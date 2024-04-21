"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
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
