const contenedorDolares = document.getElementById(
  "dolars-container-javascrips"
);
const textoUltimaFecha = document.getElementById("ult-fecha-dolar");

function imprimirValores(dolar) {
  const nombreDolar = document.createElement("span");
  const precioVenta = document.createElement("p");
  const precioCompra = document.createElement("p");
  const variacion = document.createElement("p");
  const contenedorDolar = document.createElement("div");

  nombreDolar.innerHTML = dolar.nombre;
  precioVenta.innerHTML = `Venta: $ ${dolar.venta}`;
  precioCompra.innerHTML = `Compra: $${dolar.compra}`;
  variacion.innerHTML = `Variacion: ${dolar.variacion}%`;

  contenedorDolar.className = "carta";

  if (
    dolar.nombre !== "Dolar Soja" &&
    dolar.nombre !== "Argentina" &&
    dolar.nombre !== "Bitcoin"
  ) {
    contenedorDolar.appendChild(nombreDolar);
    contenedorDolar.appendChild(precioVenta);
    contenedorDolar.appendChild(precioCompra);
    contenedorDolar.appendChild(variacion);

    contenedorDolares.appendChild(contenedorDolar);
  } else if (dolar.nombre === "Argentina") {
    textoUltimaFecha.innerHTML = `Ultima actualizacion: ${dolar.fecha}`;
  }
}

function llamarApiDolares() {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((res) => res.json()) //SE PONE COMO PRIMER THEN
    .then((res) => {
      //RES = ARRAY DE OBJETOS
      for (dolar of res) {
        imprimirValores(dolar.casa);
      }
    });
}

llamarApiDolares();
