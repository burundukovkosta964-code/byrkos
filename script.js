document.addEventListener("DOMContentLoaded", () => {
    // Находим все элементы с классом fade-in
    const faders = document.querySelectorAll(".fade-in");

    // Настройки: элемент начнет появляться, когда 10% его видимой части зайдет на экран
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            // Если элемент попал в зону видимости
            if (entry.isIntersecting) {
                entry.target.classList.add("appear"); // Добавляем класс анимации
                appearOnScroll.unobserve(entry.target); // Отключаем слежку за ним, чтобы не анимировать повторно
            }
        });
    }, appearOptions);

    // Запускаем слежку за каждым элементом
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
