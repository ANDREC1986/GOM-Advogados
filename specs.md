# Especificações Técnicas e de Conteúdo - GOM Advogados (Site Antigo)

Este documento detalha o mapeamento das funcionalidades, integrações de RSS, estrutura de blog e todo o conteúdo do site antigo do escritório **GOM Advogados** (`https://gomadvogados.com.br/`).

---

## 1. Visão Geral da Arquitetura e Stack
- **Tecnologia Original**: WordPress.
- **Tema Base**: BeTheme.
- **Page Builder**: Elementor / Elementor Pro.
- **Plugins Principais Identificados**:
  - `Feedzy RSS Feeds`: Exibição dinâmica de notícias jurídicas externas.
  - `Click to Chat for WhatsApp`: Botão flutuante para atendimento via WhatsApp.
  - `Slider Revolution (revslider)`: Slider/banner institucional na página inicial.
  - `Mighty Addons`: Componentes adicionais do Elementor.

---

## 2. Especificações da Integração de RSS

### 2.1 Exibição de Notícias (RSS de Entrada)
- **Plugin Utilizado**: `Feedzy RSS Feeds` (`wp-widget-feedzy_wp_widget`).
- **Fonte do Feed**: `https://www.conjur.com.br/rss.xml` (Portal Consultor Jurídico - ConJur).
- **Modo de Funcionamento**: 
  - O site antigo **não possui uma equipe redatora de notícias próprias**.
  - As notícias exibidas no site são importadas dinamicamente do feed RSS do ConJur.
- **Configurações do Widget**:
  - **Quantidade Máxima de Itens**: 4 notícias.
  - **Frequência de Atualização (Cache)**: A cada 1 hora (`refresh="1_hours"`).
  - **Ordenação**: Por data decrescente (`sort="date_desc"`).
  - **Comportamento do Link**: Abre a notícia original no portal ConJur em nova aba (`target="_blank"` e `rel="noopener"`).
  - **Elementos Exibidos em Cada Item**:
    - **Imagem (Thumbnail)**: Redimensionada para 150x150px.
    - **Título**: Link direto para a matéria original.
    - **Data/Hora**: Formato local.
    - **Resumo/Excerpt**: Descrição resumida da notícia.
    - **Lazy Loading**: Ativado (`data-lazy="yes"` / classe `feedzy-lazy`).

### 2.2 Feeds RSS de Saída (Nativos da Plataforma)
- **Feed Principal de Conteúdo**: `https://gomadvogados.com.br/feed/` (`type="application/rss+xml"`).
- **Feed de Comentários**: `https://gomadvogados.com.br/comments/feed/`.
- **Endpoints oEmbed**:
  - JSON: `https://gomadvogados.com.br/wp-json/oembed/1.0/embed?url=...`
  - XML: `https://gomadvogados.com.br/wp-json/oembed/1.0/embed?url=...&format=xml`

---

## 3. Especificações do Blog

- **Status do Blog Interno**: **Inativo / Inexistente**.
- **Postagens Próprias**: O site antigo conta apenas com 1 publicação de teste padrão do WordPress:
  - Título: `Hello world!`
  - URL original: `https://gomadvogados.com.br/2021/02/02/hello-world/`
- **Diagnóstico da Seção "Notícias"**:
  - O que parece ser um "Blog" na página inicial é, na verdade, a seção alimentada pelo widget RSS do ConJur detalhado na seção 2.1.
  - Não existem categorias de blog ativas nem artigos próprios produzidos pelo escritório.

---

## 4. Especificações do Conteúdo e Estrutura de Páginas

### 4.1 Estrutura de Navegação (Menu)
- **Início** (`/` ou `#`)
- **Escritório** (`#escritorio`)
- **Áreas de Atuação** (`/areas-de-atuacao/`)
- **Contato** (`#contato`)

### 4.2 Detalhamento do Conteúdo da Página Inicial (`index.html`)

#### A. Cabeçalho / Top Bar
- **Logo**: Logo oficial GOM Advogados (`wp-content/uploads/2021/03/GOM-Advogados-Logo.png`).
- **Contatos Rápidos**:
  - Telefone: `(47) 3045-7491`
  - E-mail: `contato@gomadvogados.com.br`
- **Favicon**: Ícone de balança da justiça (`scales-of-justice-450203_640.png`).

#### B. Hero Section (Banner Inicial)
- Banner institucional em slider apresentando o escritório e destacando a atuação jurídica com foco em excelência e ética.

#### C. Seção "O Escritório" (`#escritorio`)
- **Título**: *GOM Advogados - Experiência e Dedicação*
- **Descrição**: Apresentação institucional destacando a missão do escritório em oferecer suporte jurídico especializado a empresas e indivíduos com soluções personalizadas.
- **Imagem de Destaque**: Foto do ambiente físico do escritório (`Escritorio.png`).

#### D. Seção "Áreas de Atuação" (`#areas`)
O site aborda 9 disciplinas jurídicas principais:
1. **Direito Empresarial**: Assessoria preventiva e litigiosa para empresas, contratos comerciais e estruturação corporativa.
2. **Direito Tributário**: Planejamento tributário, recuperação de créditos e defesa em execuções fiscais.
3. **Direito Trabalhista**: Defesa de interesses patronais e empregados em reclamações trabalhistas e consultoria preventiva.
4. **Direito Imobiliário**: Compra, venda, usucapião, registros, locação, contratos de aluguel e direito de construir.
5. **Direito Civil**: Contratos, responsabilidade civil, indenizações e obrigações.
6. **Direito Condominial**: Regras de convivência, aplicação de penalidades, cobrança de inadimplência e consultoria para síndicos e condomínios.
7. **Direito Societário**: Processos de fusão, cisão, incorporação de empresas e proteção de interesses societários.
8. **Direito Previdenciário**: Representação perante o INSS e na justiça para concessão, revisão ou reestabelecimento de benefícios.
9. **Auditorias**: Auditorias especializadas contábeis, tributárias e trabalhistas para adequação à legislação vigente.

#### E. Seção "Nossa Equipe"
Apresentação dos 3 advogados sócios do escritório:
1. **Mauricio José Gom** (Sócio / Advogado - Foto: `Mauricio-2.png`)
2. **Carlos Leandro Roslindo** (Sócio / Advogado - Foto: `Leo-2.png`)
3. **Giancarlo Maturano Ghisleni** (Sócio / Advogado - Foto: `GianCarlo-2.png`)

#### F. Seção Chamada para Ação (CTA)
- **Texto**: *"Procurando por Serviço Jurídico Especializado?"*
- **Ação**: Botão de direcionamento para envio de mensagem ou contato via WhatsApp.

#### G. Seção "Notícias"
- Bloco dinâmico com as 4 últimas notícias jurídicas nacionais importadas via RSS do ConJur.

#### H. Seção "Venha nos Visitar" & "Contato" (`#contato`)
- **Endereço**: Rua João Bauer, 354, Centro - Itajaí/SC
- **E-mail**: `contato@gomadvogados.com.br`
- **Telefone**: `(47) 3045-7491`
- **Horário de Atendimento**: Segunda a Sexta-feira, das 09:00 às 12:00 e das 13:30 às 18:00.
- **Formulário de Contato**: Campos de Nome, E-mail, Assunto e Mensagem.
- **Widget de WhatsApp**: Botão flutuante no canto da tela para conversa direta no aplicativo.

#### I. Rodapé / Footer
- **Logo Negativo**: Versão branca da marca (`LOGO-NEGATIVO_BRANCO-01.png`).
- **Links do Menu**: Início, Escritório, Áreas de Atuação, Contato.
- **Horário de Atendimento**: Exibição repetida dos horários comerciais.
- **Formulário de Newsletter**: Campo para captura de e-mail dos visitantes (*"Assine nossa newsletter e saiba nossas novidades"*).
- **Créditos**: Copyright GOM Advogados e assinatura de desenvolvimento (`K3 Web`).

---

### 4.3 Detalhamento da Página Interna: Áreas de Atuação (`areas-de-atuacao/index.html`)
- Página dedicada ao detalhamento individualizado de cada uma das 9 áreas jurídicas listadas no menu principal.
- Mantém a mesma identidade visual, cabeçalho, rodapé e bloco de contato da página inicial.

---

## 5. Resumo Executivo para Novo Desenvolvimento

| Módulo | Implementação no Site Antigo | Recomendação para Novo Site |
| :--- | :--- | :--- |
| **RSS (Notícias)** | Widget externo conectando ao RSS do ConJur (`conjur.com.br/rss.xml`). | Manter a integração com RSS de notícias jurídicas ou criar um blog interno próprio com artigos dos advogados. |
| **Blog Interno** | Inexistente (apenas o post nativo "Hello World"). | Criar um sistema de CMS/Blog real caso o escritório deseje publicar artigos autorais e gerar SEO orgânico. |
| **Páginas Principais** | Página Única (Home Institucional) + Página Interna de Áreas de Atuação. | Estrutura limpa e enxuta, facilmente convertível para Next.js / Vite / HTML5 moderno. |
| **Formulários / CTA** | Formulário de Contato estático, Newsletter no footer e Botão de WhatsApp. | Integrar os formulários com serviços de e-mail (ex: Web3Forms, Resend, Formspree) e manter CTA direto para WhatsApp. |
