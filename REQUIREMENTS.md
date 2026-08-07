# Requisitos e Diretrizes - Novo Site GOM Advogados

Este documento estabelece as diretrizes de arquitetura, regras de componentização e o escopo para o desenvolvimento do **novo site** em **Astro.js**.

---

## 1. Diretriz Principal: Novo Design (Conteúdo Antigo apenas como Referência)

- **Design 100% Novo e Autoral**: O layout e o estilo do site antigo **não serão reconstruídos**. O site antigo servirá **apenas como fonte de conteúdo e dados** (textos institucionais, informações de contato, áreas de atuação, equipe de sócios e feed RSS).
- **Identidade Visual Moderna**: A nova interface deve ser construída do zero, com visual sóbrio, elegante e moderno, focado em alta legibilidade e performance.

---

## 2. Regras Estritas de Arquitetura e Componentização

### 2.1 Componentização Obrigatória
- **Componentização Total**: Todo elemento estrutural ou reutilizável **deve ser obrigatoriamente componentizado** em arquivos `.astro`.
- **Regra de 2+ Bullets / Itens**: Se existirem 2 ou mais elementos de lista/itens com estrutura idêntica ou equivalente, eles **devem ser gerados via um componente modelo reutilizável** (ex: `BulletItem.astro`, `ContactItem.astro`).
- **Regra de 5+ Cards**: Se existirem 5 ou mais elementos no formato de card (ex: Áreas de Atuação, Notícias, Equipe), eles **devem obrigatoriamente utilizar um componente modelo único e padronizado** (ex: `AreaCard.astro`, `NewsCard.astro`, `TeamCard.astro`), recebendo seus dados via `Props`.

### 2.2 Regra de Estilização (Vanilla CSS Puro)
- **Proibição de Bibliotecas Externas de Layout/CSS**: É terminantemente **proibido o uso de frameworks/libs CSS de terceiros** (Tailwind CSS, Bootstrap, Bulma, MUI, Chakra, etc.).
- **CSS Nativo**: Todo o layout, alinhamento, grid e responsividade devem ser desenvolvidos estritamente com **Vanilla CSS puro** (CSS Grid, Flexbox, Variáveis CSS e blocos `<style>` escopados em cada componente Astro).

---

## 3. Mapeamento de Conteúdo de Referência (extraído de `specs.md`)

O novo site utilizará como referência os seguintes dados do site antigo:

1. **Dados de Contato & Localização**:
   - Telefone: `(47) 3045-7491`
   - E-mail: `contato@gomadvogados.com.br`
   - Endereço: Rua João Bauer, 354, Centro - Itajaí/SC
   - Horário: Segunda a Sexta, 09h-12h e 13h30-18h
2. **Áreas de Atuação (9 áreas)**:
   - Direito Empresarial, Direito Tributário, Direito Trabalhista, Direito Imobiliário, Direito Civil, Direito Condominial, Direito Societário, Direito Previdenciário e Auditorias.
3. **Equipe de Sócios**:
   - Mauricio José Gom, Carlos Leandro Roslindo, Giancarlo Maturano Ghisleni.
4. **Feed RSS de Notícias Jurídicas**:
   - Integração com o feed RSS do portal ConJur (`https://www.conjur.com.br/rss.xml`).

---

## 4. Estrutura Proposta de Componentes Astro

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro             # Cabeçalho do novo site
│   │   └── Footer.astro             # Rodapé do novo site
│   ├── common/
│   │   ├── BulletItem.astro         # Componente modelo para itens de lista (Regra 2+ itens)
│   │   ├── SectionHeader.astro      # Componente modelo para títulos de seção
│   │   └── WhatsAppButton.astro     # Botão flutuante do WhatsApp
│   └── cards/
│       ├── AreaCard.astro           # Componente modelo para cards de áreas (Regra 5+ cards)
│       ├── TeamCard.astro           # Componente modelo para cards da equipe (Regra 5+ cards)
│       └── NewsCard.astro           # Componente modelo para cards de notícias RSS (Regra 5+ cards)
├── layouts/
│   └── BaseLayout.astro             # Layout global HTML5 + CSS Tokens
└── pages/
    └── index.astro                  # Página Inicial do Novo Site
```
