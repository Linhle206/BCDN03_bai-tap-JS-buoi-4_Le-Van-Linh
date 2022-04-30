function tamgiac() {
    var canh1 = document.getElementById("canh1").value;
    var canh2 = document.getElementById("canh2").value;
    var canh3 = document.getElementById("canh3").value;
    if (
        Number(canh1) + Number(canh2) > Number(canh3) &&
        Number(canh1) + Number(canh3) > Number(canh2) &&
        Number(canh1) + Number(canh3) > Number(canh2)
    ) {
        if (canh1 == canh2 && canh2 == canh3) {
            document.getElementById("tamgiac").innerHTML = "Tam giác đều";
        } else if (canh1 == canh2 || canh2 == canh3 || canh3 == canh1) {
            document.getElementById("tamgiac").innerHTML = "Tam giác cân";
        } else if (
            canh1 * canh1 + canh2 * canh2 == canh3 * canh3 ||
            canh1 * canh1 + canh3 * canh3 == canh2 * canh2 ||
            canh3 * canh3 + canh2 * canh2 == canh1 * canh1
        ) {
            document.getElementById("tamgiac").innerHTML = "Tam giác vuông";
        } else {
            document.getElementById("tamgiac").innerHTML = "Tam giác thường";
        }
    } else {
        document.getElementById("tamgiac").innerHTML =
            "Ba cạnh bạn vừa nhập không phải là ba cạnh của 1 tam giác, vui lòng nhập lại.";
    }
}