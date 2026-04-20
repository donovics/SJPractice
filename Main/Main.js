let value = 0;

function randomfaszság(){
    for (let i = 1; i <= 5; i++){
        value++;
        document.getElementById("id" + i).innerHTML = value;
    }
}
