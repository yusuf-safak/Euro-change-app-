document.getElementById("change").addEventListener("click",change);
function change(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.exchangerate.host/latest");
    xhr.onload = function(){
        if(this.status){
            const operation = () => {
                const response = JSON.parse(this.responseText);
                console.log(response);
                const rate = response.rates.TRY;
                const amount = Number(document.getElementById("amount").value);
                document.getElementById("tl").value = amount*rate;
            }
            setInterval(operation,1000);
        }
    }
    xhr.send();
}
