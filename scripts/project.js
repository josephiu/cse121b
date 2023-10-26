/* Week 7 project*/

/* Declare and initialize global variables */

const coinsElement  = document.querySelector("#coins");
let coinList  = [];




/* async displayCoins Function */
const displayCoins = (coinList=> {
    coinList.forEach(coins => {

           

        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.innerHTML = coins.name;

        const imgElement = document.createElement("img");
        

        imgElement.src = coins.image;
        imgElement.alt = coins.symbol;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        
        //creating inner Article

        const divv = document.createElement("div");
        const paraeElement = document.createElement("p");

        
        const innerfElement = `Current price: ${coins.current_price}`;  
        paraeElement.innerHTML = innerfElement;
        divv.appendChild(paraeElement);



        const p2 = document.createElement("p");        
        const marketcap = `Market_cap: ${coins.market_cap}`;  
        p2.innerText = marketcap; 
        divv.append(p2);

        const p3 = document.createElement("p");        
        const marketcapRank = `Market Cap Rank: ${coins.market_cap_rank}`;  
        p3.innerText = marketcapRank; 
        divv.append(p3);

        const p4 = document.createElement("p");        
        const  hiandlow= `High in 24h: ${coins.high_24h} Low in 24h: ${coins.low_24h}`;  
        p4.innerText = hiandlow; 
        divv.append(p4);


        const p5 = document.createElement("p");        
        const  marketchange= `Market Change in 24h: ${coins.market_cap_change_24h}`;  
        p5.innerText = marketchange; 
        divv.append(p5);

        const p6 = document.createElement("p");        
        const  fullydilutedVolumn= `Fully Diluted Valuation: ${coins.fully_diluted_valuation}`;  
        p6.innerText = fullydilutedVolumn; 
        divv.append(p6);

        const p7 = document.createElement("p");        
        const  lastupdate = `Last Updated: ${coins.last_updated}`;  
        p7.innerText = lastupdate; 
        divv.append(p7);







        articleElement.appendChild(divv);

     

               
        coinsElement.appendChild(articleElement);
        // templesElement.appendChild(innerArticleElement);
        
        
    })


})

/* async getCoins Function using fetch()*/

const getCoins = async() => {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    if (response.ok){
        const getData = await response.json();

        
        coinList = getData;
        displayCoins(coinList);

        //console.log(coinList)
    }
}

getCoins();


// // * reset Function */

function reset() {

    coinsElement.textContent = "";
    
}

//Getting from the search button

var user = document.querySelector("#query").value



function getFromUser ()
{
    if(coinList.indexOf(user)!== -1) {

        console.log(user);

        document.querySelector("#query").value = displayCoins(user);
        
    }
}

document.querySelector("#button").addEventListener("click", getFromUser);