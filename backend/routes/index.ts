import { Router } from 'express';

const router = Router();


router.get('/', (req, res) => {
    const htmlResponse = `
        <html>
            <h1>ARENA</h1>
            <p>Website para aluguel de quadras esportivas</p>
            <p>Autores: Ana Julia Araujo, Ana Beatriz Machado,
            Carolaine Lima, Gabriel Andrade</p>
        </html>
    `;
  res.send(htmlResponse);
});

router.post('/teste', (req, res) => {
    console.log(req.body);
    return res.send('Teste!@@@');
})


export { router };

