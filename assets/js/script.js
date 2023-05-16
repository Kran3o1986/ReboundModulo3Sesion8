const formulario = document.querySelector("#formulario");
const formNombre = document.querySelector("#nombre");
const formApellido = document.querySelector("#apellido");
const formCorreo = document.querySelector("#correo");
const formEdad = document.querySelector("#edad");
const formFecha = document.querySelector("#fecha");

const reserva = {};

const handler = {
  set: function (objeto, propiedad, valor) {
    if (propiedad === "edad") {
      if (valor < 18) {
        alert("Debes ser mayor de edad para reservar con nosotros");
        return false;
      }

      console.log(reserva);
    }

    objeto[propiedad] = valor;
    return true;
  },
};

const proxyReserva = new Proxy(reserva, handler);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !formNombre.value ||
    !formApellido.value ||
    !formEdad.value ||
    !formCorreo.value ||
    !formFecha.value
  ) {
    alert("Recuerda rellenar todos los campos");
    return;
  }

  proxyReserva.nombre = formNombre.value;
  proxyReserva.apellido = formApellido.value;
  proxyReserva.edad = formEdad.value;
  proxyReserva.correo = formCorreo.value;
  proxyReserva.fecha = formFecha.value;
});