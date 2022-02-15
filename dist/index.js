"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userController_1 = __importDefault(require("./controllers/userController"));
var app = express_1.default();
app.use(express_1.default.json());
app.use("/user", userController_1.default);
app.listen(5000, function () { return console.log("API is running at http://localhost:5000"); });
