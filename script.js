function trocarTema() {
    document.body.classList.toggle('claro');
    const botao = document.getElementById('tema');

    if (document.body.classList.contains('claro')) {
        botao.textContent = 'Modo escuro';
    } else {
        botao.textContent = 'Modo claro';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('form-contato');
    if (!formulario) return;

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        const assunto = encodeURIComponent('Contato pelo portfólio');
        const corpo = encodeURIComponent(
            `Nome: ${nome}\\nE-mail: ${email}\\n\\nMensagem:\\n${mensagem}`
        );

        // Troque pelo seu e-mail para habilitar o envio.
        const emailDestino = 'SEU_EMAIL_AQUI';
        const status = document.getElementById('status-contato');

        if (emailDestino === 'SEU_EMAIL_AQUI') {
            status.textContent = 'Falta configurar seu endereço de e-mail na variável emailDestino do arquivo script.js.';
            return;
        }

        window.location.href = `mailto:${emailDestino}?subject=${assunto}&body=${corpo}`;
    });
});
