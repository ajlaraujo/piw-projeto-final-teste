import express from 'express';

const app = express ();
const PORT = 3333;

app.get('/', (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});