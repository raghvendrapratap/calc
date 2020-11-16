var temporary = 0;
var result = 0;
var opt = "";

function clr() {
    temporary = 0;
    result = 0;
    opt = "";
    document.getElementById("result").innerHTML = temporary;
}

function val(x) {
    var temp = x;
    temporary = temporary * 10 + temp;
    document.getElementById("result").innerHTML = temporary;
}

function operator(op) {
    var newopt = op;

    if (opt != "") {
        if (opt == "add") {
            result = result + temporary;
            opt = newopt;
        } else if (opt == "sub") {
            result = result - temporary;
            opt = newopt;
        } else if (opt == "mul") {
            result = result * temporary;
            opt = newopt;
        } else if (opt == "div") {
            result = result / temporary;
            opt = newopt;
        } else {
            result = temporary;
            opt = newopt;
        }
    } else {
        result = temporary;
        opt = newopt;
    }
    temporary = 0;
    document.getElementById("result").innerHTML = result;

}