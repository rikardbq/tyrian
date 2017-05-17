"use strict";
exports.__esModule = true;
var chalk = require("chalk");
var fs = require("fs");
var path = require("path");
var child_process_1 = require("child_process");
var parseClass_1 = require("./parseClass");
var lambda = require("./lambda");
function commandOutput(command, args) {
    var child = child_process_1.spawnSync(command, args, { stdio: "pipe" });
    return child.stdout.toString() + child.stderr.toString();
}
function parsePackage(pkg, level) {
    var result = "";
    Object.keys(pkg).forEach(function (key) {
        if (key === "function" || key === "is" || key === "in") {
            return "";
        }
        else if (typeof pkg[key] === "string") {
            result += pkg[key];
        }
        else {
            result += (level === 0 ? "declare " : "") + "namespace " + key + " {\n";
            result += parsePackage(pkg[key], level + 1).split("\n").map(function (line) { return "    " + line; }).join("\n");
            result += "\n}\n";
        }
    });
    return result;
}
function parseJAR(jar) {
    var classes = commandOutput("jar", ["tf", jar]).split("\n");
    classes = classes.filter(function (c) { return /\.class$/.test(c); }).map(function (c) { return c.replace(/\//g, ".").replace(/\.class$/, ""); });
    console.log(chalk.gray("Disassembling " + jar + ": " + classes.length + " classes"));
    var pkg = {};
    for (var i = 0; i < classes.length; i += 2000) {
        var javaCode = commandOutput("javap", ["-cp", jar].concat(classes.slice(i, i + 2000)));
        parseClass_1["default"](javaCode, pkg);
    }
    return parsePackage(pkg, 0);
}
exports["default"] = parseJAR;
function generateJDKDefinition(root) {
    var jars = process.argv.slice(1);
    jars.forEach(function (jar) { return parseJAR(jar); });
    fs.writeFileSync(fs.realpathSync(root + "/src/compiler/isLambda.js"), "module.exports = " + JSON.stringify(lambda.isLambda, null, 4));
    jars.forEach(function (jar) {
        var target = path.basename(jar).replace(/\.jar$/, ".d.ts");
        fs.writeFileSync(target, parseJAR(jar).replace(/^\s+\n/gm, ""));
    });
}
exports.generateJDKDefinition = generateJDKDefinition;
function getTopPackages(jar) {
    var packages = {};
    var classes = commandOutput("jar", ["tf", jar]).split("\n");
    classes.filter(function (c) { return /\.class$/.test(c); }).forEach(function (path) { return packages[path.split("/")[0]] = true; });
    return Object.keys(packages);
}
exports.getTopPackages = getTopPackages;
