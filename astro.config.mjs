import { defineConfig } from 'astro/config';

export default defineConfig({
    // Garante que o build gere apenas HTML/CSS/JS estáticos puros
    output: 'static',

    // Força o Astro a usar a data que o servidor da Cloudflare aceita
    compatibilityDate: '2026-08-08',
});