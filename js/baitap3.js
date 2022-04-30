function demCL() {
    var chan = 0;
    var le = 0;
    var num31 = document.getElementById("num31").value;
    var num32 = document.getElementById("num32").value;
    var num33 = document.getElementById("num33").value;
    if (
        num31 - Math.floor(num31) == 0 &&
        num32 - Math.floor(num32) == 0 &&
        num33 - Math.floor(num33) == 0
    ) {
        if (num31 % 2 == 0) {
            chan = chan + 1;
        } else {
            le = le + 1;
        }
        if (num32 % 2 == 0) {
            chan = chan + 1;
        } else {
            le = le + 1;
        }
        if (num33 % 2 == 0) {
            chan = chan + 1;
        } else {
            le = le + 1;
        }
        document.getElementById("xuatCL").innerHTML =
            "Số chẵn: " + chan + "<br>Số lẻ: " + le;
    } else {
        if (num31 - Math.floor(num31) !== 0) {
            document.getElementById("xuatCL").innerHTML =
                "Số " + num31 + " không phải số nguyên, vui lòng nhập lại";
        }
        if (num32 - Math.floor(num32) !== 0) {
            document.getElementById("xuatCL").innerHTML =
                "Số " + num32 + " không phải số nguyên, vui lòng nhập lại";
        }
        if (num33 - Math.floor(num33) !== 0) {
            document.getElementById("xuatCL").innerHTML =
                "Số " + num33 + " không phải số nguyên, vui lòng nhập lại";
        }
    }
}