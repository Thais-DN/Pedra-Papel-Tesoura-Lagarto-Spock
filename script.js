document.getElementById('jogar').addEventListener('click', function(event) {
  event.preventDefault();
  var botaoJogar = document.getElementById('jogar');
  var conteudo = document.getElementById('conteudo');
  
  botaoJogar.style.display = 'none'; // Esconde o botão Jogar
  conteudo.style.display = 'block';  // Mostra o conteúdo permanentemente
});

let playerScore = 0;
let computerScore = 0;

function playerChoice(choice) {
    const choices = ["pedra", "papel", "tesoura", "lagarto", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    const result = determineWinner(choice, computerChoice);
  
    
  if (result === "Você ganhou!") {
    playerScore++;
  } else if (result === "Computador ganhou!") {
    computerScore++;
  }

  displayResult(choice, computerChoice, result);
  atualizarPlacar();
}

function atualizarPlacar() {
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
}
  
  function determineWinner(player, computer) {
    if (player === computer) {
      return "Empate!";
    } else if (
      (player === "papel" && computer === "pedra") ||
      (player === "tesoura" && computer === "papel") ||
      (player === "pedra" && computer === "lagarto") ||
      (player === "lagarto" && computer === "spock") ||
      (player === "spock" && computer === "tesoura") ||
      (player === "tesoura" && computer === "lagarto") ||
      (player === "lagarto" && computer === "papel") ||
      (player === "papel" && computer === "spock") ||
      (player === "spock" && computer === "pedra") ||
      (player === "pedra" && computer === "tesoura")
    ) {
      return "Você ganhou!";
    } else {
      return "Computador ganhou!";
    }
  }

  const imagens = {
    pedra: "../img/stone.png",
    papel: "../img/paper.png",
    tesoura: "../img/scissors.png",
    lagarto: "../img/lizard.png",
    spock: "../img/spock.png",
  };
  
  function displayResult(player, computer, result) {
    const staticContent = `
        <div class="img_result">
          <div class="ajustar">
            <img class="player-choice" src="${imagens[player]}" alt="${player}" width="50px">
            <p>Você escolheu</p>
          </div>
          <div class="ajustar">
              <img class="computer-choice" src="${imagens[computer]}" alt="${player}" width="50px">
              <p>O computador escolheu</p>
          </div>
        </div>
        <p>${result}</p>
        `;



const resultDiv = document.querySelector(".result");
resultDiv.innerHTML = staticContent;
  }