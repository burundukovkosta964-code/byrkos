document.addEventListener("DOMContentLoaded", () => {
    
    const animatedSections = document.querySelectorAll(".text-animate");
    
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                if (entry.target.id === "stats") {
                    startCounters();
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedSections.forEach(section => scrollObserver.observe(section));

    function startCounters() {
        const counters = document.querySelectorAll(".counter-num");
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = target / 60;
            
            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = (counter.innerText.startsWith("+") ? "+" : "") + Math.floor(count);
                    setTimeout(updateCount, 16);
                } else {
                    counter.innerText = (counter.innerText.startsWith("+") ? "+" : "") + target;
                }
            };
            updateCount();
        });
    }

    const iconsContainer = document.getElementById("js-parallax-icons");
    if (iconsContainer) {
        window.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX - window.innerWidth / 2;
            const mouseY = e.clientY - window.innerHeight / 2;
            const moveX = mouseX * 0.03; 
            const moveY = mouseY * 0.03;
            iconsContainer.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.05}deg)`;
        });
        
        window.addEventListener("mouseleave", () => {
            iconsContainer.style.transform = "translate(0px, 0px) rotate(0deg)";
        });
    }
});

