"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdUsage = exports.cmdOptions = void 0;
const command_line_args_1 = __importDefault(require("command-line-args"));
const command_line_usage_1 = __importDefault(require("command-line-usage"));
const types_1 = require("./types");
const optionDefinitions = [
    { name: types_1.OptionsEnum.dir, alias: "d", type: String, description: "Relative directory path with images" },
    { name: types_1.OptionsEnum.out, alias: "o", type: String, description: "Output file path" },
    { name: types_1.OptionsEnum.read, alias: "r", type: String, description: "Read directory path (optional)" },
    {
        name: types_1.OptionsEnum.ts,
        alias: "t",
        type: Boolean,
        description: "Should the output file be generated as a TypeScript file (optional)",
    },
];
exports.cmdOptions = (0, command_line_args_1.default)(optionDefinitions);
exports.cmdUsage = (0, command_line_usage_1.default)([{ header: "Options", optionList: optionDefinitions }]);
