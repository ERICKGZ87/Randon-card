function Creador() {
    const valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const nombresIconos = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const cartas = [];
    for (let s = 0; s < nombresIconos.length; s++) {
      for (let v = 0; v < valores.length; v++) {
        const value = valores[v];
        const suit = nombresIconos[s];
        cartas.push({ value, suit });
      }
    }
    return cartas;
  }
  
  function randomCard(cartas) {
    const random = Math.floor(Math.random() * 51);
    const cardValue = cartas[random].value;
    const cartasuit = cartas[random].suit;
    let entidad;
    cartasuit === "Diamonds"
      ? (entidad = "&diams;")
      : (entidad = "&" + cartasuit.toLowerCase() + ";");
    const card = document.createElement("div");
    card.classList.add("card", cartasuit.toLowerCase());
    card.innerHTML = '<span class="card-value-suit top">' + cardValue + entidad + "</span>" + '<span class="card-suit">' + entidad + "</span>" + '<span class="card-value-suit bot">' + cardValue + entidad + "</span>";
    document.body.appendChild(card);
  }
  const cartas = Creador();
  randomCard(cartas);
  