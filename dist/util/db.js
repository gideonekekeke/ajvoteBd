"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const url = "mongodb://localhost/votersDB";
const urlOnline = "mongodb+srv://OneChurch:<OneChurch@cluster0.q3zol.mongodb.net/youthCouncil?retryWrites=true&w=majority";
mongoose_1.default.connect(urlOnline, () => {
    console.log("database is now connected...!");
});
exports.default = mongoose_1.default;
