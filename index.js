const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


(async () => {
  let x;
  while (x != 'x') {
    x = await readInput();
    const r = somar(x);
    if(r != null) console.log("Soma: " + r + "\n");
  }

  process.exit(1);

  function somar(x) {
    let soma = 0;
    if (x !== 'x' && checkNum(x)) {
      for (let i = x - 1; i > 0; i--) {
        if (checkDiv(i)) soma += i;
      }
      return soma;
    }
    return null;
  }

  async function readInput() {
    return new Promise((resolve, reject) => {
      readline.question(`Digite um número inteiro e positivo ('x' para sair): `, num => {
        resolve(num == 'x' ? 'x' : +num);
      });
    });
  }

  function checkNum(n) {
    if (!isNaN(n) && n >= 0 && (n == parseInt(n))) {
      return true;
    } else {
      console.log('O Valor inserido é inválido!\n');
      return false;
    }
  }

  function checkDiv(n) {
    if ((n % 3 == 0) || (n % 5 == 0)) {
      return true;
    } else {
      return false;
    }
  }
})();