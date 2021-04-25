const moneyFlow = {
    receitas: [500],
    despesas: [10,30,40,60]
}
function familyExpenses(moneyFlow) {
    let receita = moneyFlow.receitas.reduce((a,b)=> a+b,0);
    let despesas = moneyFlow.despesas.reduce((a,b) => a+b,0);
    let saldo = receita - despesas;
    if (saldo<0){
        return ('Saldo negativo',saldo);
    }else{
        return ("Saldo positivo",saldo);
    }
}
console.log(familyExpenses(moneyFlow))
