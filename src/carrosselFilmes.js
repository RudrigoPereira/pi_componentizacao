import "./carrosselFilmes.css"
import React from "react";

export default function CarrosselFilmes() {
    function sliderFilmes() {
        const carousel = document.querySelector('.carousel');
        const movieContainer = document.querySelector('.movie-container');
        const movies = document.querySelectorAll('.movie');
        const movieWidth = movies[0].offsetWidth;
        let currentIndex = 0;
        let interval = null;

        function nextSlide() {
            currentIndex++;
            if (currentIndex >= movies.length) {
                // Reinicie o carrossel no final
                currentIndex = 0;
            }

            const translateXValue = -currentIndex * movieWidth;
            movieContainer.style.transform = `translateX(${translateXValue}px)`;
        }

        // Inicie o carrossel automaticamente
        interval = setInterval(nextSlide, 5000);

        // Pausar o carrossel quando o mouse estiver sobre ele
        carousel.addEventListener('mouseover', () => {
            clearInterval(interval);
        });

        // Retomar o carrossel quando o mouse sair
        carousel.addEventListener('mouseout', () => {
            interval = setInterval(nextSlide, 5000);
        });
    };

    React.useEffect(() => {
        sliderFilmes();
    }, [])

    return (
        <div class="container">
            <div class="carousel">
                <div class="movie-container">
                    <div class="movie">
                        <a href="#">
                            <img src={"https://ingresso-a.akamaihd.net/prd/img/movie/guardioes-da-galaxia-vol-3/36434a76-1343-4598-ad2f-fadff2122e94.jpg"} alt="Filme 1" />
                            <h3 class="title">Guardiões da Galáxia Vol.3</h3>
                        </a>
                    </div>
                    <div class="movie">
                        <a href="#">
                            <img src={"https://ingresso-a.akamaihd.net/prd/img/movie/guardioes-da-galaxia-vol-3/36434a76-1343-4598-ad2f-fadff2122e94.jpg"} alt="Filme 2" />
                            <p class="title">Guardiões da Galáxia Vol.3</p>
                        </a>
                    </div>
                    <div class="movie">
                        <a href="#">
                            <img src={"https://ingresso-a.akamaihd.net/prd/img/movie/guardioes-da-galaxia-vol-3/36434a76-1343-4598-ad2f-fadff2122e94.jpg"} alt="Filme 3" />
                            <p class="title">Guardiões da Galáxia Vol.3</p>
                        </a>
                    </div>
                    <div class="movie">
                        <a href="#">
                            <img src={"https://ingresso-a.akamaihd.net/prd/img/movie/guardioes-da-galaxia-vol-3/36434a76-1343-4598-ad2f-fadff2122e94.jpg"} alt="Filme 4" />
                            <p class="title">Guardiões da Galáxia Vol.3</p>
                        </a>
                    </div>
                    <div class="movie">
                        <a href="#">
                            <img src={"https://ingresso-a.akamaihd.net/prd/img/movie/guardioes-da-galaxia-vol-3/36434a76-1343-4598-ad2f-fadff2122e94.jpg"} alt="Filme 5" />
                            <p class="title">Guardiões da Galáxia Vol.3</p>
                        </a>
                    </div>
                    <div class="movie">
                        <a href="#">
                            <img src={"https://ingresso-a.akamaihd.net/prd/img/movie/guardioes-da-galaxia-vol-3/36434a76-1343-4598-ad2f-fadff2122e94.jpg"} alt="Filme 6" />
                            <p class="title">Guardiões da Galáxia Vol.3</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}