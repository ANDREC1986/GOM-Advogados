import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'static',
    compatibilityDate: '2026-08-08',

    // 🚀 FORÇA O ASTRO A PROCESSAR AS IMAGENS VIA NODE, SEM ENVOLVER WORKERS
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp'
        }
    }
});