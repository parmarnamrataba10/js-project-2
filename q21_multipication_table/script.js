const check = document.getElementById("check");

check.addEventListener("click", () => {

    multiplicationTable();

});


function multiplicationTable() {

    let num = document.getElementById("number").value;

    let result = "";

    for (let i = 1; i <= 10; i++) {

        result = result + num + " x " + i + " = " + (num * i) + "<br>";

    }

    document.getElementById("result").innerHTML = result;

}