

fetch(`https://api.nomics.com/v1/currencies/ticker?key=31adda52e0a9ad4eb985c8115233563f7007a005&convert=INR&per-page=100&page=1`)
.then(response =>
{
    if(response.ok){
      response.json().then((currency) => {
          console.log(currency)

          let coinsData = currency

            if(coinsData.length>0){
                var cryptoCoin=""
            }
          
     

      coinsData.forEach((currency) => {
        cryptoCoin += "<tr>"
        cryptoCoin +=  `<td style={color:blue;}> ${currency.name} </td>`
        cryptoCoin +=  `<td> ${currency.symbol} </td>`
        cryptoCoin +=  `<td> ${currency.status} </td>`
        cryptoCoin +=  `<td> ${currency.price} </td>`
        cryptoCoin +=  `<td> ${currency.price_date} </td>`
        cryptoCoin +=  `<td> ${currency.currency} </td>`;"<tr>";
    });
    document.getElementById("data").innerHTML=cryptoCoin
    })      
}
 })

//   .then(data => console.log(data))
//   console.log(json.data)