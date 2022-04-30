function xepTT() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num = 0;
    if (
        num1 - Math.floor(num1) == 0 &&
        num2 - Math.floor(num2) == 0 &&
        num3 - Math.floor(num3) == 0
    ) {
        if (num1 > num2) {
            num = num1;
            num1 = num2;
            num2 = num;
        }
        if (num1 > num3) {
            num = num1;
            num1 = num3;
            num3 = num;
        }
        if (num2 > num3) {
            num = num2;
            num2 = num3;
            num3 = num;
        }
        document.getElementById("xuatTT").innerHTML =
            "Thứ tự tăng dần: " + num1 + ", " + num2 + ", " + num3;
    } else {
        if (num1 - Math.floor(num1) !== 0) {
            document.getElementById("xuatTT").innerHTML =
                "Số " + num1 + " không phải số nguyên, vui lòng nhập lại";
        }
        if (num2 - Math.floor(num2) !== 0) {
            document.getElementById("xuatTT").innerHTML =
                "Số " + num2 + " không phải số nguyên, vui lòng nhập lại";
        }
        if (num3 - Math.floor(num3) !== 0) {
            document.getElementById("xuatTT").innerHTML =
                "Số " + num3 + " không phải số nguyên, vui lòng nhập lại";
        }
    }
}