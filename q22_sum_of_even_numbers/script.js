
const check = document.getElementById("check");

check.addEventListener("click", () => {

    sumEvenNumbers();

});


function sumEvenNumbers() {

    let num = document.getElementById("number").value;

    let sum = 0;

    for (let i = 1; i <= num; i++) {

        if (i % 2 === 0) {

            sum = sum + i;

        }

    }

    document.getElementById("result").innerHTML = "Sum = " + sum;

}