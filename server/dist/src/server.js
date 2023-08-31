"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes"));
const app = (0, express_1.default)();
const router = new routes_1.default(app);
// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(express_1.default.json());
router.init();
const port = app.get('port');
const server = app.listen(port, () => console.log(`Server is running on port: ${port}`));
process.on('SIGINT', () => {
    server.close(() => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    server.close(() => {
        process.exit(0);
    });
});
exports.default = server;
