const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Fecha todos os itens
        faqItems.forEach(i => i.classList.remove('active'));

        // Se não estava ativo, abre
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
