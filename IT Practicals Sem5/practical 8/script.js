function loadJSONData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            displayJSONData(json);
        }
    }
    xhr.open("GET", "pets.json", true);
    xhr.send();
}

function displayJSONData(json) {
    var chatbox = document.getElementById('petdog');
    for (var i = 0; i < json.length; i++) {
        chatbox.innerHTML += `<p>${json[i].name}: Age(${json[i].age}) ; Weight(${json[i].weight}) ; Type(${json[i].type}) ; Likes(${json[i].likes})</p>`;
    }
}

loadJSONData();