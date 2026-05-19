
        document.addEventListener("DOMContentLoaded", function() {
            
            // 1. Navbar Scrolled
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            });

            // 2. Typewriter
            const texts = ["Analista de Sistemas.", "Desenvolvedor Full Stack.", "Criador de Soluções."];
            let count = 0, index = 0, isDeleting = false, letter = "";

            function type() {
                if (count === texts.length) count = 0;
                const currentText = texts[count];
                letter = isDeleting ? currentText.slice(0, --index) : currentText.slice(0, ++index);
                document.getElementById("typewriter").textContent = letter;

                let speed = isDeleting ? 30 : 70;
                if (!isDeleting && letter.length === currentText.length) {
                    speed = 2500; isDeleting = true;
                } else if (isDeleting && letter.length === 0) {
                    isDeleting = false; count++; speed = 400;
                }
                setTimeout(type, speed);
            }
            type();

            // 3. Reveal on Scroll
            const obsOptions = { threshold: 0.1, rootMargin: "0px 0px -40px 0px" };
            const revealObs = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active"); obs.unobserve(entry.target);
                    }
                });
            }, obsOptions);
            document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

            // 4. Efeito de Brilho Dinâmico (Hover com Rato) - Desktop Apenas
            if (window.innerWidth > 900) {
                document.querySelectorAll('.card-wrapper').forEach(wrapper => {
                    const card = wrapper.firstElementChild;
                    
                    wrapper.addEventListener('mousemove', (e) => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        
                        card.style.setProperty("--mouse-x", `${x}px`);
                        card.style.setProperty("--mouse-y", `${y}px`);
                    });
                });
            }
        });
 