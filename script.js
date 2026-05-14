document.addEventListener("DOMContentLoaded", function () {
    const formAgendamento = document.getElementById("formAgendamento");

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

            // Mensagem formatada enviada para o WhatsApp
            const mensagem = `Olá, Barbearia 84! Gostaria de agendar um horário.\n\n` +
                `👤 *Nome:* ${nome}\n` +
                `✂️ *Serviço:* ${servico}\n` +
                `📅 *Data:* ${dataFormatada}\n` +
                `⏰ *Horário:* ${hora}`;

            // Codifica a mensagem para formato de URL e cria o link final
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

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
});

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
