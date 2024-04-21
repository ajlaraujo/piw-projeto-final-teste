import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    const htmlResponse = `
        <html>
            <head>
                <title>Descrição do Projeto</title>
            </head>
            <body>
                <h1>ARENA é um website de aluguel de quadras esportivas</h1>
                <p>Autores: Ana Beatriz Machado, Carolaine Lima, Ana Julia Araujo, Gabriel Andrade</p>
            </body>
        </html>
        `;
    res.send(htmlResponse);
});

export { router };