export function POSTEndpoint(){
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let num = document.getElementById("num").value;

    let xhttp = new XMLHttpRequest();
    /*xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };*/
    xhttp.open("POST", "http://localhost:8080/data", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send('{ "id":' + id + ', ' +
        '"name": "' + name + '", ' +
        '"age": ' + age + ', ' +
        '"num": ' + num +
        '}');
}