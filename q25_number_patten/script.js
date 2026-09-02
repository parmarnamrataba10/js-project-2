
const check = document.getElementById("check");

check.addEventListener("click", () => {

    numberPattern();

});


function numberPattern() {

    let result = "";

    for (let i = 1; i <= 5; i++) {

        for (let j = 1; j <= i; j++) {

            result = result + i;

        }

        result = result + "<br>";

    }

    document.getElementById("result").innerHTML = result;

}