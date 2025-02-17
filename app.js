function adicionarAmigo() {
  if (document.getElementById("amigo").value === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  let resultado = document.getElementById("resultado");
  console.log(resultado.style.display);

  if (resultado.style.display === "block") {
    resultado.style.display = "none";
  }

  let amigo = document.getElementById("amigo").value;

  let lista = document.getElementById("listaAmigos");

  lista.style.display = "block";

  let item = document.createElement("li");

  item.textContent = amigo;

  console.log("dentro do li " + item.textContent);

  lista.appendChild(item);

  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  let itens = document.getElementById("listaAmigos").getElementsByTagName("li");

  if (itens.length === 0) {
    alert("Não há amigos para sortear.");
    return;
  }

  let index = Math.floor(Math.random() * itens.length);

  let item = itens[index];

  let lista = document.getElementById("listaAmigos");

  lista.style.display = "none";

  let resultado = document.getElementById("resultado");

  resultado.style.display = "block";
  resultado.style.fontSize = "2rem";
  resultado.style.fontWeight = "bold";
  resultado.style.color = "green";
  resultado.innerHTML = "O amigo secreto sorteado: " + item.textContent;

  item.remove();
}

adicionarAmigo();

setTimeout(() => {
  sortearAmigo();
}, 100);
