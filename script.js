var output_one = document.querySelector('.output_one');
var output_two = document.querySelector('.output_two');
var answer = document.querySelector('.answer');
var submit = document.querySelector('.submit');
var newOp = document.querySelector('.newop');
var first = document.querySelector('.first');
var second = document.querySelector('.second');
var again = document.querySelector('.again');
var input = document.getElementById("fnumber");
var table = document.querySelector('table');
var row = document.getElementById("myRow");
var row = document.getElementById("myRow");
var tbody = document.getElementById("tbody");
var congrat = document.querySelector('.congrat');
var nice = document.querySelector('.nice');
var answers = [];
// answers.splice(0, answers.length);

// var random1 = Math.floor(Math.random() * 1000);
// var random2 = Math.floor(Math.random() * 1000);
// var operator = ['+', '-', '*', '/'];
// var randomOperator = Math.floor(Math.random() * 4);
var operator = ['+', '-', '*', '/'];
var essai = 3;
var i = 0;

var random1 = Math.floor(Math.random() * 1000);
var random2 = Math.floor(Math.random() * 1000);
var randomOperator = Math.floor(Math.random() * 4);

function operation() {
    switch (randomOperator) {
        case 0:
            result = random1 + random2;
            // answer.innerText = result
            break;
        case 1:
            result = random1 - random2;
            // answer.innerText = result
            break;
        case 2:
            result = random1 * random2;
            // answer.innerText = result
            break;
        case 3:
            result = (random1 / random2).toFixed(2);
            // answer.innerText = Math.round(result);
            // answer.innerText = result.toFixed(2);
            // answer.innerText = result;
            break;
    }

    output_one.innerText = random1 + " " + operator[randomOperator] + " " + random2 + " | " + essai;
}

function toTableCongrat() {
    display();
    congrat.innerText = "Congratulation !!! First try ! ";
    keydown();
}

function toTable() {
    display();
    // nice.style.display = "block";        
    congrat.innerText = "Nice ! You have find in " + (3 - essai) + " attempts";
    keydown();
}

function toTableLoose() {
    display();
    // congrat.innerText = "You loose !" + result;
    congrat.innerHTML = "You loose !<br>" + result;
    keydown();
}

function keydown() {
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) { // Si touche Entrée pressé
            window.location.reload()
        }
    });
}

function display() {
    first.style.display = "none";
    second.style.display = "block";
    // output_two.innerText = "OK";
    // congrat.style.display = "block";
}

console.log("essai : " + essai);
// output_one.innerText = random1 + " " + operator[Math.floor(Math.random()*4)] + " " + random2;

// output_one.innerText = random1 + " " + operator[randomOperator] + " " + random2 + " | " + essai;
// output_two.innerText = random2;



// function sendData() {
//     var XHR = new XMLHttpRequest();

//     // Liez l'objet FormData et l'élément form
//     var FD = new FormData(form);

//     // Définissez ce qui se passe si la soumission s'est opérée avec succès
//     XHR.addEventListener("load", function (event) {
//         alert(event.target.responseText);
//     });

//     // Definissez ce qui se passe en cas d'erreur
//     XHR.addEventListener("error", function (event) {
//         alert('Oups! Quelque chose s\'est mal passé.');
//     });

//     // Configurez la requête
//     XHR.open("POST", "https://example.com/cors.php");

//     // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
//     XHR.send(FD);
// }

// // Accédez à l'élément form …
// var form = document.getElementById("myForm");

// // … et prenez en charge l'événement submit.
// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     sendData();
// });

function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    // essai -= 1;
    // essai =- 1;
    --essai;
    console.log("essai : " + essai);
    // var input = document.getElementById("fnumber").value;
    answers.push(input.value);
    // answers.push(input);
    console.log(answers);
    console.log(input.value + " " + result);
    // fillArray();        

    ++i;
    // i++;
    console.log(i);
    // var x = row.insertCell();
    var x = tbody.insertRow();
    // x.innerHTML = "[" + i + "]" + " : " + input.value + "</br>";
    x.innerHTML = "[" + i + "]" + " : " + input.value;

    if (input.value == result && essai == 2) {
        toTableCongrat();
        // input.value = null;
        answers.splice(0, answers.length);
    }
    if (input.value == result && essai < 2 && essai >= 0) {
        toTable();
        // input.value = null;
        answers.splice(0, answers.length);
    } else {
        input.value = null;
    };
    // window.location.reload()

    if (input.value != result && essai == 0) {
        toTableLoose();
        answers.splice(0, answers.length);
    }

    operation();

};

// function fillArray(){
//     for (var i = 0; i<answers.length; i++){
//         var x = row.insertCell(i);
//         x.innerHTML = input.value;
//     }
// }

// newOp.addEventListener('click', function () {
//     // var essai = --essai;
//     essai -= 1;
//     operation();
//     console.log("essai : " + essai);
//     // window.location.reload()
//     if (essai == 0) {
//         toTable()
//     }
// });

again.addEventListener('click', function () {
    // first.style.display = "block";
    // second.style.display = "none";
    // output_two.innerText = null;
    // essai = 3;
    // operation();
    // toTable()
    window.location.reload()
});

operation();
console.log(random1);
console.log(random2);
console.log(Math.random());
console.log(operator[Math.floor(Math.random() * 4)]);
console.log(Math.floor(Math.random() * 4));