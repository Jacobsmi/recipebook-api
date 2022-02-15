"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var basicUserData = client_1.Prisma.validator()({
    select: { firstname: true, lastname: true, email: true, password: true },
});
