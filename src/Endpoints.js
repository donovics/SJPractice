export function POSTEndpoint(){
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let num = document.getElementById("num").value;

    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/data", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send('{ "id":' + id + ', ' +
        '"name": "' + name + '", ' +
        '"age": ' + age + ', ' +
        '"num": ' + num +
        '}');
}

export function GETEndpoint(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            document.getElementById("textarea").innerHTML = this.responseText;
         }
    };
    xhttp.open("GET", "http://localhost:8080/data", true);
    xhttp.send();
}

export function DELETEEndpoint(){
    let id = document.getElementById("delid").value;

    let xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://localhost:8080/data/" + id, true);
    xhttp.send();
}