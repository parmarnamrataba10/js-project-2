const check = document.getElementById("check");

check.addEventListener("click", () => {

    countNumbers();

});


function countNumbers() {

    let arr = [10, -5, 0, 20, -8, 0, 15, -2];

    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let num of arr) {

        if (num > 0) {

            positive++;

        }
        else if (num < 0) {

            negative++;

        }
        else {

            zero++;

        }

    }

    document.getElementById("result").innerHTML = "Positive = " + positive + "<br>" + "Negative = " + negative + "<br>" + "Zeros = " + zero;

}