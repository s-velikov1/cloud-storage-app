"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("../routes/api/user.route"));
const auth_route_1 = __importDefault(require("../routes/api/auth.route"));
class AppRouter {
    constructor(app) {
        this.app = app;
    }
    init() {
        this.app.get('/', (req, res) => {
            res.send('API Running');
        });
        this.app.use('/api/user', user_route_1.default);
        this.app.use('/api/auth', auth_route_1.default);
    }
}
exports.default = AppRouter;
