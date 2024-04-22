import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users';

export function startServer() {
    const app = express();
    const PORT = 5555;

    // Middleware para processar corpo de requisição JSON
    app.use(bodyParser.json());

    // Rotas da API usuário
    app.use(usersRouter);

    // Iniciar o servidor 
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}