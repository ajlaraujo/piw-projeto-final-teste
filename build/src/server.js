"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const users_1 = __importDefault(require("./routes/users"));
function startServer() {
    const app = (0, express_1.default)();
    const PORT = 5555;
    // Middleware para processar corpo de requisição JSON
    app.use(body_parser_1.default.json());
    // Rotas da API usuário
    app.use(users_1.default);
    // Iniciar o servidor 
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
exports.startServer = startServer;
