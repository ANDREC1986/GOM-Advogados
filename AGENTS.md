## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Layout e Estilização (Regra Estrita)

- **Proibido o uso de bibliotecas de terceiros de Layout/CSS** (ex: Tailwind CSS, Bootstrap, Bulma, MUI, Chakra, Sass etc.).
- Todo o layout e estilização devem ser desenvolvidos estritamente em **Vanilla CSS puro** (CSS Grid, Flexbox, Variáveis CSS nativas e `<style>` escopado nos componentes Astro).

## Regras de Arquitetura e Componentização

- **Componentização Isolada**: 
  - Todo elemento de menu/navegação deve ser um componente isolado em `src/components/layout/` (`Header.astro`, `Navbar.astro`, `MobileMenu.astro`).
  - Todo conjunto de 2+ elementos repetidos deve usar um componente modelo em `src/components/common/` (`ValueItem.astro`, `StatItem.astro`, `SpecialtyItem.astro`, `Button.astro`).
- **Flexbox e Fragments Astro**: 
  - Nunca encapsule itens dentro de fragmentos `<> ... </>` em contêineres flexbox que utilizem `align-items: stretch`. Mantenha os componentes modelo como filhos diretos da flexbox para garantir que todos tenham 100% de altura simétrica.

## Regras de Layout e Design System

- **Design System Tokens**:
  - `--color-bg-light: #fdfbf7` (Fundo marfim claro das seções Quem Somos e Áreas de Atuação).
  - `--color-card-light: #f7f4ee` (Fundo marfim original dos cards de valores/caixas).
  - `--color-gold: #c8a261` (Dourado padrão para destaques, ícones e linhas).
  - `--color-bg-dark: #0a0b0d` (Fundo escuro da Hero e barra de estatísticas).
- **Cabeçalho e Menu Mobile**:
  - Menu sanduíche ocultado no desktop (`display: none`), visível apenas no mobile/tablet (`max-width: 1024px`).
  - No mobile, o cabeçalho é `position: fixed`, assumindo fundo preto sólido (`#0a0b0d`) ao rolar a página (`.scrolled`).
  - A HeroSection no mobile possui `padding-top` de ~105px para não ficar coberta pelo menu fixo.
  - O logotipo não possui linha decorativa inferior.
- **Interações & Hover**:
  - Cards de valor mantêm sua cor de fundo original (`var(--color-card-light)`), com elevação discreta (`translateY(-3px)`) e sombra suave (`box-shadow: 0 8px 20px rgba(0,0,0,0.08)`), sem brilho dourado.
- **Links de CTA**:
  - Botões "AGENDAR REUNIÃO" direcionam para o WhatsApp oficial (`554730457491`) com texto pré-preenchido de agendamento (`https://wa.me/554730457491?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o.`).
