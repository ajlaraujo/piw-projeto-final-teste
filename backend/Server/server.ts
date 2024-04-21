import express from 'express';
import { router } from './routes';

export function startServer() {
    const app = express();
    const PORT = 3333;

    // Middleware para processar corpor de requisição JSON
    app.use(express.json());

    // Rotas da API
    app.use(router);

    // Iniciar o servidor 
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}