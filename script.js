function toggleCard(card) {
    // Tutup kartu lain kalau ada yang terbuka (opsional)
    // const allCards = document.querySelectorAll('.achievement-card');
    // allCards.forEach(c => { if(c !== card) c.classList.remove('active'); });

    // Toggle kelas 'active' pada kartu yang diklik
    card.classList.toggle('active');

    // Ubah tulisan hint (opsional)
    const hint = card.querySelector('.click-hint');
    if (card.classList.contains('active')) {
        hint.innerText = "Click to hide";
    } else {
        hint.innerText = "Click to see more";
    }
}