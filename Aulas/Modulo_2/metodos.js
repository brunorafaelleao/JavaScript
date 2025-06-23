let casa = {
  //tamanho dos comodos é em metros quadrados
  cor: "#fff",
  sala: 15,
  cozinha: 10,
  banheiro: 8,
  quarto: 20,
  areaTotaldaCasa: function () {
    const tamanhoTotal = this.sala + this.cozinha + this.banheiro + this.quarto;
    console.log(`O tamanho total da casa é de ${tamanhoTotal}m²`);
    return tamanhoTotal;
  },
};

// function areaCasa(tamanhoSala, tamanhoCozinha, tamanhoBanheiro, tamanhoQuarto) {
//   const tamanhoTotal =
//     tamanhoSala + tamanhoCozinha + tamanhoBanheiro + tamanhoQuarto;
//   console.log(`O tamanho total da casa é de ${tamanhoTotal}m²`);
//   return tamanhoTotal;
// }

casa.areaTotaldaCasa();
