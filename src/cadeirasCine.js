import "./cadeirasCine.css";

export default function CadeirasCine() {
  const seats = Array.from({ length: 180 }, (_, index) => index + 1);

  const handleSeatClick = (seatNumber) => {
    const seat = document.getElementById(`seat-${seatNumber}`);
    if (seat && !seat.classList.contains("occupied")) {
      seat.classList.toggle("selected");
    }
  };

  const isSpaceBetween = (seatNumber) => {
    const spaceSeats = [8, 24, 40, 56, 72, 88, 104, 120, 136, 152, 168, 178];
    return spaceSeats.includes(seatNumber);
  };

  const hasBottomMargin = (seatNumber) => {
    return seatNumber >= 33 && seatNumber <= 48
        || seatNumber >= 113 && seatNumber <= 128;
  };

  return (
    <div className="container">
      <div className="seats">
        {seats.map((seatNumber) => {
          const seatClassName = isSpaceBetween(seatNumber) ? "seat space" : "seat";
          const seatStyle = hasBottomMargin(seatNumber) ? { marginBottom: "15px" } : {};

          return (
            <div
              key={seatNumber}
              id={`seat-${seatNumber}`}
              className={seatClassName}
              style={seatStyle}
              onClick={() => handleSeatClick(seatNumber)}
            >
              {seatNumber}
            </div>
          );
        })}
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
