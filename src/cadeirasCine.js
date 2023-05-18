import "./cadeirasCine.css";

export default function CadeirasCine() {
    const seats = Array.from({ length: 350 }, (_, index) => index + 1);

    const handleSeatClick = (seatNumber) => {
        const seat = document.getElementById(`seat-${seatNumber}`);
        if (seat && !seat.classList.contains('occupied')) {
            seat.classList.toggle('selected');
        }
    };

    return (
        <div className="container">
            <div className="seats">
                {seats.map((seatNumber) => (
                    <div
                        key={seatNumber}
                        id={`seat-${seatNumber}`}
                        className={`seat`}
                        onClick={() => handleSeatClick(seatNumber)}
                    >
                        {seatNumber}
                    </div>
                ))}
            </div>
            <div className="screen">Tela</div>
            <div className="legend">
                <div className="legend-item">
                    <div className="seat available"></div>
                    <span>Disponível</span>
                </div>
                <div className="legend-item">
                    <div className="seat selected"></div>
                    <span>Selecionada</span>
                </div>
                <div className="legend-item">
                    <div className="seat occupied"></div>
                    <span>Ocupada</span>
                </div>
            </div>
        </div>
    );
}
