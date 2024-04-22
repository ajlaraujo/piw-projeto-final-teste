import { Router } from 'express';

const app = Router();

app.get('/', (req, res) => {
    const htmlResponse = `
        <html>
            <body>
                <h1>ARENA é um website de aluguel de quadras esportivas</h1>
                <p>Autores: Ana Beatriz Machado, Carolaine Lima, Ana Julia Araujo, Gabriel Andrade</p>
            </body>
        </html>
        `;
    res.send(htmlResponse);
});

export { app };
