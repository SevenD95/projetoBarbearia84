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


            // Se for Domingo (0), alerta o usuário e limpa o campo
            if (diaSemana === 0) {
                alert("Não abrimos aos domingos. Por favor, escolha outra data.");
                this.value = ""; // Limpa o campo
            }//Se for segunda (1), alerta o usuário e limpa o campo
            if (diaSemana === 1) {
                alert("Não abrimos as segunda. Por favor, escolha outra data.");
                this.value = "";
            }
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
            // Mantendo o número que estava no link anterior: 5511945976278
            const numeroWhatsApp = "5511945976278";

            // Monta a mensagem usando APENAS caracteres ASCII e códigos Unicode.
            // Isso ignora completamente qualquer problema de codificação (ANSI/UTF-8) do seu editor de texto!
            const mensagemBruta = "Ol\xE1, Barbearia 84! Gostaria de agendar um hor\xE1rio.\n\n" +
                "\uD83D\uDC64 *Nome:* " + nome + "\n" +
                "\u2702\uFE0F *Servi\xE7o:* " + servico + "\n" +
                "\uD83D\uDCC5 *Data:* " + dataFormatada + "\n" +
                "\u23F0 *Hor\xE1rio:* " + hora;

            // Cria o link final usando a API direta do WhatsApp
            const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagemBruta)}`;

            // Abre o WhatsApp em uma nova aba
            window.open(url, '_blank');

            // Fechar o modal e limpar o formulário
            const modalEl = document.getElementById("modalAgendamento");
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) {
                modal.hide();
            }
            formAgendamento.reset();
        });
    }

    // Lógica para ampliar imagens da galeria (Lightbox)
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modalImagemEl = document.getElementById('modalImagem');
    const imagemAmpliada = document.getElementById('imagemAmpliada');

    if (modalImagemEl && imagemAmpliada) {
        galleryItems.forEach(img => {
            img.style.cursor = 'pointer';

            img.addEventListener('click', function () {
                // Pega a URL e o texto alternativo da imagem clicada
                const imgSrc = this.getAttribute('src');
                const imgAlt = this.getAttribute('alt');

                // Atualiza a imagem dentro do modal
                imagemAmpliada.setAttribute('src', imgSrc);
                imagemAmpliada.setAttribute('alt', imgAlt);

                // Abre o modal de imagem
                const modalImagem = bootstrap.Modal.getOrCreateInstance(modalImagemEl);
                modalImagem.show();
            });
        });
    }
});
