// Objeto de notificação Toast personalizado, moderno e de alta performance
const toast = {
    show(message, type = 'info', duration = 4000) {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }

        const toastEl = document.createElement('div');
        toastEl.className = `custom-toast toast-${type}`;

        let iconClass = 'fa-info-circle';
        if (type === 'success') iconClass = 'fa-check-circle';
        if (type === 'error') iconClass = 'fa-exclamation-circle';
        if (type === 'warning') iconClass = 'fa-exclamation-triangle';

        toastEl.innerHTML = `
            <i class="fas ${iconClass} toast-icon"></i>
            <span class="toast-message">${message}</span>
            <button class="toast-close-btn" aria-label="Fechar">&times;</button>
        `;

        container.appendChild(toastEl);

        // Força o reflow para iniciar a animação
        toastEl.offsetHeight;

        // Ativa a animação de entrada
        toastEl.classList.add('show');

        const closeBtn = toastEl.querySelector('.toast-close-btn');
        let autoTimeout;

        const dismissToast = () => {
            if (toastEl.classList.contains('hide')) return;
            toastEl.classList.remove('show');
            toastEl.classList.add('hide');

            // Fallback para remoção caso transitionend não dispare
            const fallbackTimeout = setTimeout(() => {
                toastEl.remove();
                if (container.children.length === 0) {
                    container.remove();
                }
            }, 500);

            toastEl.addEventListener('transitionend', function handler() {
                clearTimeout(fallbackTimeout);
                toastEl.removeEventListener('transitionend', handler);
                toastEl.remove();
                if (container.children.length === 0) {
                    container.remove();
                }
            });
        };

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearTimeout(autoTimeout);
            dismissToast();
        });

        // Remove automaticamente após o tempo determinado
        autoTimeout = setTimeout(dismissToast, duration);

        // Pausa temporizador no hover do mouse para melhor usabilidade
        toastEl.addEventListener('mouseenter', () => clearTimeout(autoTimeout));
        toastEl.addEventListener('mouseleave', () => {
            autoTimeout = setTimeout(dismissToast, 2000); // Dá mais 2 segundos após tirar o mouse
        });
    },
    info(message, duration) { this.show(message, 'info', duration); },
    success(message, duration) { this.show(message, 'success', duration); },
    error(message, duration) { this.show(message, 'error', duration); },
    warning(message, duration) { this.show(message, 'warning', duration); }
};

document.addEventListener("DOMContentLoaded", function () {
    const formAgendamento = document.getElementById("formAgendamento");
    // Trava a data para o dia atual
    const inputData = document.getElementById("data");



    if (inputData) {
        // Configura a data mínima (hoje)
        inputData.min = new Date().toISOString().split("T")[0];

        // Ouve mudanças na data
        inputData.addEventListener('change', function () {
            // Evita o problema de fuso horário criando a data com ano, mês e dia locais
            const [ano, mes, dia] = this.value.split('-');
            const dataLocal = new Date(ano, mes - 1, dia);
            const diaSemana = dataLocal.getDay(); // 0 = Domingo, 6 = Sábado


            // Bloqueia agendamento aos domingos (0) e segundas (1)
            //codigo melhorado

            if (diaSemana === 0 || diaSemana === 1) {
                const diaNome = diaSemana === 0 ? "domingos" : "segundas";
                toast.info(`Não abrimos aos ${diaNome}. Por favor, escolha outra data.`);
                this.value = ""; // Limpa o campo
            }
        });
    }

    // Fechar menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
    const menuToggle = document.getElementById('menuNavegacao');

    if (navLinks && menuToggle) {
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (menuToggle.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(menuToggle, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            });
        });
    }

    if (formAgendamento) {
        formAgendamento.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita o recarregamento da página

            // Captura os dados do formulário
            const nome = document.getElementById("nome").value;
            const servico = document.getElementById("servico").value;
            const data = document.getElementById("data").value;
            const hora = document.getElementById("hora").value;

            // Formata a data de AAAA-MM-DD para DD/MM/AAAA
            const dataFormatada = data.split("-").reverse().join("/");

            // Número do WhatsApp da barbearia (com o código do país e DDD)
            const numeroWhatsApp = "5511913240301";

            // Monta a mensagem escapando caracteres para evitar problemas de codificação
            const mensagemBruta = `Ol\xE1, Barbearia 84! Gostaria de agendar um hor\xE1rio.\n\n` +
                `\uD83D\uDC64 *Nome:* ${nome}\n` +
                `\u2702\uFE0F *Servi\xE7o:* ${servico}\n` +
                `\uD83D\uDCC5 *Data:* ${dataFormatada}\n` +
                `\u23F0 *Hor\xE1rio:* ${hora}`;

            // Cria o link final usando a API direta do WhatsApp
            const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagemBruta)}`;

            // Abre o WhatsApp em uma nova aba
            window.open(url, '_blank');

            // Exibir toast de sucesso
            toast.success("Agendamento preparado com sucesso! Redirecionando para o WhatsApp...");

            // Fechar o modal e limpar o formulário
            const modalEl = document.getElementById("modalAgendamento");
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) {
                modal.hide();
            }
            formAgendamento.reset();
        });
    }


});
