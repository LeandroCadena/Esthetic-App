import React from "react";

function Event({ r }) {
  return (
    <div>
      {r.isActive === false && r.ratingAlert === false && (
        <div className="accordion-item">
          <div className="accordion-title">
            <p>
              <b>Servicio Contratado:</b> {r.service.name}
            </p>
          </div>

          {r && (
            <div>
              <p className="p">Dia: {r.date}</p>
              <p className="p">Hora: {r.hour} Hs.</p>
              <p className="p">Precio: ${r.service.price}</p>
              <p className="p">
                Prestador: {r.provider.firstName} {r.provider.lastName}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Event;
