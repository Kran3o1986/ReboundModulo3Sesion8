alert("Pasajero, se le recuerda que para abordar el avión debe tener\nen mano su pasaporte y boleto de embarque. Mantengase\natento a los avisos mediante esta plataforma");
const htmlCode = `
    <div class="container" id="welcomeBox">
        <h1><b>Bienvenido a la plataforma <i>Eport</i></b></h1>
        <h3>Aquí podrá encontrar la información de vuelos más reciente en nuestro aeropuerto.</h3>
    </div>
    <div class="container-fluid">
        <div class="column" id="time">
            <h3>Hora:</h3>
            <h1 id="insertTime">15:11</h1>
        </div>
        <div class="column" id="date">
            <h3>Fecha:</h3>
            <h1 id="insertDate">30-12-2020</h1>
        </div>
    </div>
    <div class="container" id="flightBox">
        <h1><b>El vuelo más próximo:</b></h1>
        <h3>Número de vuelo: <em id="flightNumber">1234</em></h3>
        <h3>Terminal: <em id="terminalNumber">14</em></h3>
    </div>
`;

document.body.innerHTML = htmlCode;

// Obtener los elementos con los IDs "insertTime", "insertDate", "flightNumber" e "terminalNumber"
const timeElement = document.getElementById("insertTime");
const dateElement = document.getElementById("insertDate");
const flightNumberElement = document.getElementById("flightNumber");
const terminalNumberElement = document.getElementById("terminalNumber");

// Función para actualizar la hora y fecha cada segundo
function updateTime() {
  // Obtener la hora actual
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Actualizar el contenido del elemento "insertTime"
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;

  // Obtener la fecha actual
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");

  // Actualizar el contenido del elemento "insertDate"
  dateElement.textContent = `${day}-${month}-${year}`;
}

// Actualizar la hora y fecha cada segundo
setInterval(updateTime, 1000);

// Generar un número aleatorio para el número de vuelo y el terminal
const flightNumber = Math.floor(Math.random() * 10000);
const terminalNumber = Math.floor(Math.random() * 30) + 1;

// Actualizar el contenido de los elementos "flightNumber" y "terminalNumber" con los valores aleatorios
flightNumberElement.textContent = flightNumber;
terminalNumberElement.textContent = terminalNumber;
