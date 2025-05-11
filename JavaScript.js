    <script>
        const slides = document.querySelectorAll('.hero-image img');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);
        setInterval(nextSlide, 3500); 

        document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
            document.querySelector('.navbar').classList.toggle('active');
        });
    </script>

