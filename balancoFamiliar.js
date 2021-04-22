let family = {
    incomes: [20,30,100,50], 
    expenses: [40,10,60,100]
}

function sum(array){
    let total = 0
    for(let item of array){
        total += item
    }
    return total
}

function calculateBalance(incomes,expenses){
    let result = sum(incomes) - sum(expenses)
    if(result >= 0){
        console.log("A família está com saldo positivo de R$"+ result.toFixed(2))
    }else{
        console.log("A família está com saldo negativo de R$"+ result.toFixed(2))
    }
}

calculateBalance(family.incomes,family.expenses)