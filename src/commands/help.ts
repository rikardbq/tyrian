import * as fs from "fs"

export function version(instdir: string) {
    return JSON.parse(fs.readFileSync(`${instdir}/package.json`, "utf-8")).version
}

export function help(instdir: string, status: number) {
    console.error(`

Version: ${version(instdir)}

Usage:
  1c help                                           print this message
  1c version                                        print the version number
  1c env                                            check if all dependencies of 1c are ready
  1c install                                        install dependencies in package.json
  1c build [-w] [-m] [-c dir | -o file] <entry>     build one entry (.ts/.tsx)
  1c build [-w] [-c dir] <entry1> <entry2> ...      build multiple entries (.ts/.tsx)
  1c run [-w] [jjs options] <output>                run output file (.js)

Options:

  -c <dir>          output build result in <dir>
  -m                build the entry as a commonjs module
  -o <file>         output build result to <file>
  -w                watch changes and re-build/re-run
  jjs options       check out 'jjs -h'

    `.trim())

    process.exit(status)
}
