# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-05-20

### Added
- **Sistema de Notificações Toast Premium:** Criado um sistema nativo e premium de notificações Toast (mensagens flutuantes temporárias) em JavaScript e CSS, sem dependências externas (jQuery/Toastr).
  - Estilização moderna com *glassmorphism* (`backdrop-filter`) e bordas douradas/semânticas condizentes com a identidade da Barbearia 84.
  - Animações fluidas de entrada (`slide-in` a partir da direita em desktop / topo em mobile) e de saída (`fade-out` com deslocamento vertical).
  - Barra de progresso de tempo sutil integrada à base do toast.
  - Funcionalidade de pause-on-hover (pausa o temporizador quando o usuário passa o mouse por cima do toast).
  - Botão de fechamento manual rápido ("×").
  - Adicionado suporte a múltiplos estados: `success`, `info`, `warning` e `error`.
  - Notificação de sucesso exibida dinamicamente após o agendamento bem-sucedido: *"Agendamento preparado com sucesso! Redirecionando para o WhatsApp..."*.

### Fixed
- **Mensagens de Validação de Data:** Removido o import quebrado de `'toastr'` que causava exceção e crash de script nos navegadores devido ao formato de script estático, substituindo-o pelo sistema nativo `toast.info(...)`.

## [1.0.0] - 2026-05-14

### Fixed
- **Menu Mobile (Navbar):** Refatorada a estrutura HTML da barra de navegação para resolver problemas de abertura no celular. Adicionado script (`script.js`) para fechar o menu automaticamente ao clicar em um link. Removido o atributo `defer` do Bootstrap JS para garantir o funcionamento correto dos eventos.

### Commits
- `1fac11c` **revisão e otimização do cogido** - Ajustes finais de performance e limpeza de código não utilizado.
- `2e94e3b` **revisão e otimização do codigo** - Melhorias nas práticas de código, ajustes de indentação e organização estrutural.
- `0d840f6` **galeria carousel** - Implementação de um carrossel interativo usando Bootstrap para exibir as fotos na seção Galeria.
- `17cd07d` **html e css refeito** - Refatoração completa da estrutura das tags HTML e classes, visando maior semântica e facilidade de manutenção no CSS.
- `fef14c1` **images e icon** - Inclusão de novas imagens otimizadas para a barbearia e ícones vetorizados para a interface.
- `e1a87b0` **otimização e correções do codigo** - Ajustes de responsividade em dispositivos móveis e resolução de pequenos problemas de layout.
- `b0d4e51` **background corrigido** - Solução para o problema de repetição e dimensionamento da imagem de fundo.
- `f0259ee` **correçao do html e css** - Correções em atributos HTML faltantes e refinamentos de margens/espaçamentos no estilo.
- `24f179e` **Lógica galeria** - Criação das funções em JavaScript para manipulação e exibição das imagens.
- `73af67c` **logica do formulario** - Implementação de validação, bloqueio de datas e formatação de links (WhatsApp) no envio do formulário de agendamento.
- `4f0205b` **modal de agendamento** - Criação e estilização da janela modal (pop-up) do formulário de agendamentos.
- `69da990` **footer e mapa** - Desenvolvimento do rodapé do site, contendo avisos legais e integração com iframe do Google Maps para localização.
- `cc4122f` **seção social media e endereço** - Adição dos blocos de contato e links rápidos das redes sociais da barbearia.
- `0a1a34c` **imagens** - Primeira inserção de imagens base do projeto, incluindo logo e fotos dos serviços.
- `7f8638e` **Merge pull request #1 from SevenD95/hero-css** - Integração de modificações e estilos aplicados à seção Hero (Destaque inicial).
- `64855c7` **Hero Section** - Estruturação e estilização da área inicial de destaque, contendo a principal chamada de ação (Call to Action).
- `c702efa` **html section inicio,Serviços ,Galeria Depoimentos.** - Criação do esqueleto HTML das seções de Início, Serviços, Galeria e Depoimentos.
- `7853d5e` **alteração da fontes** - Inclusão e configuração de fontes customizadas via Google Fonts.
- `683ecfb` **Cabeçalho e logo html e css** - Criação da barra de navegação superior (Header) fixa e posicionamento do logotipo.
- `10d7e63` **inicio do projeto** - Commit inicial com a criação dos arquivos base (`index.html`, `style.css`, `script.js`).
