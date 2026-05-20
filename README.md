# Barbearia 84

Bem-vindo ao repositório do projeto **Barbearia 84**, um site responsivo e moderno desenvolvido para uma barbearia, com o objetivo de apresentar serviços, exibir trabalhos e facilitar o agendamento de horários através do WhatsApp.

## ✂️ Sobre o Projeto

O site da **Barbearia 84** foi construído com foco na experiência do usuário (UX) e em uma interface limpa e elegante. Ele permite que os clientes conheçam os serviços oferecidos, vejam fotos dos cortes na galeria, leiam depoimentos de outros clientes e realizem agendamentos de forma rápida e prática diretamente pelo WhatsApp.

## 🚀 Funcionalidades Principais

- **Design Responsivo:** O site se adapta perfeitamente a diferentes tamanhos de tela (celulares, tablets e desktops).
- **Galeria Interativa:** Um carrossel de imagens para exibir os melhores cortes e serviços.
- **Sistema de Agendamento Inteligente:** 
  - Formulário em modal intuitivo e moderno.
  - Validação de datas (bloqueia agendamentos em dias passados).
  - Restrição de dias úteis (bloqueia agendamentos aos domingos e segundas-feiras).
  - Feedback visual imediato através do sistema Toast na validação de dias bloqueados e na confirmação do agendamento.
  - Integração direta com a API do WhatsApp, gerando uma mensagem pré-formatada com os detalhes do agendamento.
- **Sistema de Notificações Toast Premium (Nativo):** 
  - Alertas flutuantes personalizados em JavaScript puro (zero dependências externas pesadas ou quebras de script).
  - Design sofisticado de *glassmorphism* (efeito de desfoque de fundo `backdrop-filter`) que se integra perfeitamente com a identidade visual dourada da barbearia.
  - Barra de progresso animada mostrando de forma intuitiva o tempo de sumiço do toast.
  - Recurso inteligente de *pause-on-hover* (congela o tempo do toast quando o ponteiro do mouse está sobre ele).
  - Estados semânticos integrados a ícones do FontAwesome (`success`, `info`, `warning`, `error`) e botão de fechar ("×").
- **Mapa Integrado:** Localização da barbearia fácil de encontrar via Google Maps.
- **Navegação Suave (Smooth Scroll):** Transições fluidas ao navegar pelas seções do menu.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização, variáveis de cores (tema escuro e dourado) e layouts responsivos.
- **JavaScript (Vanilla):** Lógica de validação do formulário, manipulação do menu mobile e criação da URL do WhatsApp.
- **Bootstrap 5:** Framework CSS para agilizar componentes de interface (Navbar, Carrossel, Modal, Grid responsivo).
- **FontAwesome:** Ícones vetoriais.
- **Google Fonts:** Tipografia (Oswald e Poppins).

## 📁 Estrutura de Arquivos

```text
projetoBarbearia84/
├── index.html        # Página principal e estrutura HTML
├── style.css         # Estilos customizados
├── script.js         # Lógica de interação (agendamento, validações, menu)
├── CHANGELOG.md      # Histórico de versões e alterações
├── galeria/          # Imagens utilizadas no carrossel de trabalhos
├── imagens/          # Logo e imagens de background
└── icon/             # Ícones do site (favicon, apple-touch-icon, etc)
```

## 📱 Como Executar / Testar Localmente

1. Faça o clone ou baixe os arquivos para o seu computador.
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` em qualquer navegador web (Chrome, Firefox, Edge, etc.).
4. Clique no botão **"Agende seu Horário"** para testar as validações do calendário e o redirecionamento para o WhatsApp Web.


---
Feito com dedicação para a **Barbearia 84**! 🧔✂️
