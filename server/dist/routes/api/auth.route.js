"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json('auth get route');
});
// Register user
router.post('/register', (req, res) => {
});
exports.default = router;
