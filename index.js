



var colors = ["#000000", "#00008B", "#008000", "#8B4513", "#FF1493", "#FF0000", "#FFA500", "#FFFF00", "#FFFAFA"]; // Adicione mais cores aqui



function pickColor() {
  var colorBox = document.getElementById("colorBox");
  var message = document.getElementById("message");
  var gif = document.getElementById("gif");

  if (colors.length === 0) {
    colorBox.style.backgroundColor = "#f2f2f2";
    message.textContent = "Todas as cores foram sorteadas!";
    gif.style.display = "none";
    return;
  }

  var randomIndex = Math.floor(Math.random() * colors.length);
  var selectedColor = colors[randomIndex];

  colorBox.style.backgroundColor =
  colors.splice(randomIndex, 1);

  var name = "Parabéns, "; // Substitua "Fulano" pelo nome do sorteado

  message.textContent = name + "sua cor é essa! Agora corre pra comprar as coisas! " 
  gif.style.display = "block";
}