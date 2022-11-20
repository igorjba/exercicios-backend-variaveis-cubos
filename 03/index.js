const valorDoProduto = a = 129_99;  //valor do produto
const meuDinheiro = 80_00; //valor que eu tenho
const desconto = c = valorDoProduto - meuDinheiro;
const percentualTotal = b = 100; //100% 

const cupom = (b * c) / a; //regra de três

console.log(`É necessário um desconto de ≅ ${cupom.toFixed(2)}%.`);



