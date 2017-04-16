import * as chalk from "chalk"
import * as fs from "fs"
import * as path from "path"
import { SourceMapConsumer } from "source-map"
import { spawn } from "child_process"

export default function (target: string, reload?: boolean) {
    target = path.resolve(target)
    let dirname = path.resolve(path.dirname(target))
    let lib = path.resolve(dirname + "/../lib")
    let classpath = fs.readdirSync(lib).map(jar => jar === "@types" ? "" : `${lib}/${jar}`).join(":")
    let sourceMap = new SourceMapConsumer(JSON.parse(fs.readFileSync(target + ".map", "utf-8")))

    let run = () => {
        let child = spawn("jjs", ["-cp", classpath, target])
        child.on("exit", code =>  process.exit(code))

        let lookupSource = chunk => {
            let insert: any[] = []
            let regex = new RegExp(target + ":\\d+(:\\d+)?", "g")
            while (true) {
                let match = regex.exec(chunk)
                if (!match) break
                let position = sourceMap.originalPositionFor({
                    line: parseInt(match[0].split(":")[1]),
                    column: parseInt(match[0].split(":")[2]) || 0,
                })
                insert.push({
                    index: match.index + match[0].length,
                    position: `${position.source}:${position.line}:${position.column}`
                })
            }
            insert.reverse().forEach((s: any) => {
                chunk = chunk.substring(0, s.index) +
                    chalk.yellow(`(${s.position})`) +
                    chunk.substring(s.index)
            })
            return chunk
        }

        child.stdout.on("data", chunk => {
            process.stdout.write(lookupSource(chunk.toString()))
        })
        child.stderr.on("data", chunk => {
            process.stderr.write(lookupSource(chunk.toString()))
        })

        return child
    }

    let child = run()
    if (reload) {
        // Restart child when target changes
        fs.watchFile(target, () => {
            child.removeAllListeners()
            child.on("exit", () => child = run())
            child.kill("SIGHUP")
        })
    }
}
