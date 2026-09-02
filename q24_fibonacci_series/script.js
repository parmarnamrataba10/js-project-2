
const check = document.getElementById("check");

check.addEventListener("click", () => {

    fibonacciSeries();

});


function fibonacciSeries() {

    let num = document.getElementById("number").value;

    let a = 0;
    let b = 1;
    let result = "";

    for (let i = 1; i <= num; i++) {

        result = result + a + " ";

        let next = a + b;

        a = b;
        b = next;

    }

    document.getElementById("result").innerHTML = "Series = " + result;

}