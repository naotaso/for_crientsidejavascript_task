async function inputNumber(data){
    return data + 1;
}

inputNumber(1).then(function(data){
    console.log(`${data}です`);
})