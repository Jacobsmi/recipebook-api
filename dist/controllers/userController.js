"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_validator_1 = require("express-validator");
var userService_1 = __importDefault(require("../services/userService"));
var router = express_1.default.Router();
var userService = new userService_1.default();
router.post("/", express_validator_1.body("firstname").isString(), express_validator_1.body("lastname").isString(), express_validator_1.body("email").isEmail(), express_validator_1.body("password").isString(), function (req, res) {
    var newUser = __assign({}, req.body);
    var err = express_validator_1.validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).send({ errors: err });
    }
    userService.addUser();
    return res.status(200).send({ success: true });
});
exports.default = router;
