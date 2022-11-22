"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileEntry = void 0;
const path_1 = __importDefault(require("path"));
class FileEntry {
    constructor(dir, out, fileName) {
        this.relativeResourcePath = path_1.default.relative(path_1.default.dirname(out), path_1.default.join(dir, fileName)).replace(/\\/g, "/");
        this.variableName = fileName
            .toLowerCase()
            .replace(/(.*)(.(png|jpg|jpeg|gif|bmp|svg))$/, "$1")
            .replace(/^\d+/, ($0) => new Array($0.length + 1).join("_"))
            .replace(/\W+/g, "_");
    }
    relativeResourcePath;
    variableName;
}
exports.FileEntry = FileEntry;
