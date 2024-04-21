"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
function startServer() {
    const app = (0, express_1.default)();
    const PORT = 3333;
    // Middleware para processar corpor de requisição JSON
    app.use(express_1.default.json());
    // Rotas da API
    app.use(routes_1.router);
    // Iniciar o servidor 
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
exports.startServer = startServer;
