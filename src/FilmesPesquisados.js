import React, { useEffect } from 'react';
import './FilmesPesquisados.css';

const FilmesPesquisados = () => {
    const movies = [
        { title: 'Guardiões', image: 'https://ingresso-a.akamaihd.net/prd/img/movie/guardioes-da-galaxia-vol-3/36434a76-1343-4598-ad2f-fadff2122e94.jpg', link: 'https://exemplo.com/filme1' },
        { title: 'Miranha', image: 'https://ingresso-a.akamaihd.net/prd/img/movie/homem-aranha-atraves-do-aranhaverso-parte-1/216f2cb7-3a64-4b7a-a338-709bcde71147.webp', link: 'https://exemplo.com/filme2' },
        { title: 'Groot e Aquaman', image: 'https://ingresso-a.akamaihd.net/prd/img/movie/velozes-e-furiosos-10/aaebc05c-9524-4fe8-a2b5-9cd928659c5a.webp', link: 'https://exemplo.com/filme3' },
        { title: 'Que Mario?', image: 'https://ingresso-a.akamaihd.net/prd/img/movie/super-mario-bros/b7bd9bb8-f131-44dd-8082-667078bf2b22.jpg', link: 'https://exemplo.com/filme4' },
        { title: 'Aquagirl', image: 'https://ingresso-a.akamaihd.net/prd/img/movie/a-pequena-sereia/ba36d6b2-b739-4ba8-a662-3c64a4187004.webp', link: 'https://exemplo.com/filme5' },
        { title: 'Robôs Trans', image: 'https://ingresso-a.akamaihd.net/prd/img/movie/transformers-o-despertar-das-feras/d26ab0be-eb25-44d3-8f37-e517066c0113.webp', link: 'https://exemplo.com/filme6' },
        { title: 'Baby Shark', image: 'https://cdnim.prd.cineticket.com.br/asset/movie/8052/demonio-dos-mares-poster-desktop-5144c.jpg', link: 'https://exemplo.com/filme7' },
        { title: 'Matrix', image: 'https://ingresso-a.akamaihd.net/prd/img/movie/john-wick-4-baba-yaga/44ee6198-fafd-4101-b2b0-55292caf7990.jpg', link: 'https://exemplo.com/filme8' }
    ];

    useEffect(() => {
        const moviesGrid = document.getElementById('movies-grid');

        movies.forEach(movie => {
            const movieItem = document.createElement('a');
            movieItem.classList.add('movie-item');
            movieItem.href = movie.link;

            const movieImage = document.createElement('img');
            movieImage.src = movie.image;
            movieImage.alt = movie.title;

            const movieTitle = document.createElement('h3');
            movieTitle.textContent = movie.title;

            movieItem.appendChild(movieImage);
            movieItem.appendChild(movieTitle);

            // Adicionar e remover classe no hover
            movieItem.addEventListener('mouseenter', () => {
                movieItem.classList.add('hovered');
            });

            movieItem.addEventListener('mouseleave', () => {
                movieItem.classList.remove('hovered');
            });

            moviesGrid.appendChild(movieItem);
        });
    }, []);

    return (
        <div id="movies-grid" className="movies-grid"></div>
    );
};

export default FilmesPesquisados;
