import "./TrailerSinopse.css";

const showtimesData = [
    { room: "Sala 1", time: "18:45", type: "DUB" },
    { room: "Sala 2", time: "20:50", type: "LEG" },
    { room: "Sala 3", time: "21:35", type: "DUB" },
    { room: "Sala 4", time: "23:50", type: "LEG" },
    { room: "Sala 5", time: "19:30", type: "DUB" },
    { room: "Sala 6", time: "20:00", type: "LEG" },
    // Adicione mais objetos para mais salas, horários e opções de dublagem/legendagem
];

export default function TrailerSinopse() {
    return (
        <div>
            <div className="trailer-and-sinopse">
                <div className="trailer">
                    <h2>Trailer</h2>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        /*src="https://www.dailymotion.com/embed/video/x2vgpzv"*/
                        frameBorder="0"
                        allowFullScreen
                        title="Trailer"
                    ></iframe>
                </div>

                <div className="sinopse">
                    <h2>Sinopse</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
                        felis in risus commodo consectetur. Sed fringilla nisl vel mi lobortis
                        congue. Proin consectetur ante felis, ac iaculis est lobortis ut.
                        Suspendisse potenti. Nullam et mi felis. Mauris eu turpis consequat,
                        blandit lectus sit amet, bibendum ex. Duis vitae metus ac mauris
                        efficitur vulputate eget sit amet metus. Sed tempus dapibus enim, in
                        convallis elit accumsan et. In sodales consequat enim, non facilisis
                        neque luctus et. Phasellus tristique massa in ligula lobortis, vitae
                        aliquet mauris egestas. Sed varius bibendum orci vitae hendrerit.
                    </p>
                </div>
            </div>

            <div className="showtime-items">
                {showtimesData.map((showtime, index) => (
                    <div className="showtime-item" key={index}>
                        <div className="time-box">
                            <div className="room">{showtime.room}</div>
                            <a href="outra_tela.html" className="time">
                                {showtime.time}
                            </a>
                            <div className="type">{showtime.type}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
