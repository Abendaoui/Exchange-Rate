// Access Elements
const currencyOne = document.getElementById('currency-one'),
    amountOne = document.getElementById('amount-one'),
    currencyTwo = document.getElementById('currency-two'),
    amountTwo = document.getElementById('amount-two'),
    rateEl = document.getElementById('rate'),
    swap = document.getElementById('swap')


// Fetch Exchange Rates And Update The Dom
function calculate(){
    const currencyValOne = currencyOne.value
    const currencyValTwo = currencyTwo.value

    // console.log(currencyValOne)
    fetch(`https://api.exchangerate.host/latest`)
    .then(res => res.json())
    .then(data => {

        let rates = data.rates[currencyValTwo]

        rateEl.innerHTML = `1 ${currencyValOne} = ${rates} ${currencyValTwo}`

        amountTwo.value = (amountOne.value * rates).toFixed(4)
    })

}
// Evebt Listeners
currencyOne.addEventListener('change',calculate)
amountOne.addEventListener('input',calculate)
currencyTwo.addEventListener('change',calculate)
amountTwo.addEventListener('input',calculate)

swap.addEventListener('click',() =>{
    [currencyOne.value, currencyTwo.value] = [currencyTwo.value,currencyOne.value]
    calculate()
})


calculate()