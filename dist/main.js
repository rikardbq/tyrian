"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const utils = __importStar(require("./utils"));
const commands_1 = __importDefault(require("./commands"));
const { name, version } = utils.readJsonObject(path_1.default.resolve(__dirname, "..", constants_1.path.PACKAGE));
commander_1.program.name(name).version(version);
commander_1.program
    .command("init")
    .description("initialize a new project in the current directory")
    .action(() => commands_1.default.init());
commander_1.program
    .command("install")
    .description("install dependencies of current project")
    .option("--offline", "generate lib/@types offline", false)
    .action(command => {
    commands_1.default.install(command.offline);
});
commander_1.program
    .command("build <entries...>")
    .description("compile one or more typescript entries")
    .option("-c <path>", "generate output in specific directory", ".")
    .option("-w --watch", "watch changes and re-build", false)
    .action((entries, { watch, c }) => {
    commands_1.default.build(entries, c, watch);
});
commander_1.program
    .command("run <output> [arguments...]")
    .description("execute one of the build output")
    .option("--inspect-brk [port]", "activate inspector on port (only with graaljs runtime)")
    .option("-w --watch", "watch changes and re-run", false)
    .action((output, args, { inspectBrk, watch }) => {
    commands_1.default.run(output, args, { inspectBrk, watch });
});
commander_1.program.parse(process.argv);
