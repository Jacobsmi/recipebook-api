"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userRepository_1 = __importDefault(require("../repositories/userRepository"));
var UserService = /** @class */ (function () {
    function UserService() {
        this.userRepository = new userRepository_1.default();
    }
    UserService.prototype.addUser = function () {
    };
    return UserService;
}());
exports.default = UserService;
