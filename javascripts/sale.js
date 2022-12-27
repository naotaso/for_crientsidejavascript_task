const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];


function calc() {
    let sum = 0;
    for(let index = 0; index < purchases.length; index++){
        sum += purchases[index].price * purchases[index].number;
    }

    let postage = 0;
    if (0 < sum && sum < 2000){
        postage = 500;
    }
    else if (2000 <= sum && sum < 3000){
        postage = 250;
    }
    else if (sum >= 3000 || sum == 0){
        postage = 0;
    }

    sum += postage;
    window.alert(`送料は${postage}円です。合計は${sum}円です`);
    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
}

const products = {
    id: [1,2,3,4],
    name:["オリジナルブレンド200g","オリジナルブレンド500g","スペシャルブレンド200g","スペシャルブレンド500g"],
    price:[500,900,700,1200],
}

function add() {
    const id = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);

    index = products["id"].findIndex(i => {
        return id == i
    })

    const name = products["name"][index];
    const price = products["price"][index]; 

    let purchase = {
        price: price,
        number:number,
        name:name,
    };
    purchases.push(purchase);

    let PriceList = {};
    for(let i=0; i < purchases.length; i++){
        if (purchases[i].price in PriceList){
            PriceList[purchases[i].price][0] += purchases[i].number;
        }
        else{
            PriceList[purchases[i].price] = [purchases[i].number, purchases[i].name];
            
        }
    }

    let text = "";
    let sum = 0;
    for(let i=0; i < Object.keys(PriceList).length; i++){
        text += Object.values(PriceList)[i][1] + " " + Object.keys(PriceList)[i] + "円:" + Object.values(PriceList)[i][0] + "点" + "\n";
        sum += Object.keys(PriceList)[i] * Object.values(PriceList)[i][0];
    }
    
    text += "\n" + "小計" + sum + "円"; 
    window.alert(text);
    priceElement.value = "";
    numberElement.value = "";
}

