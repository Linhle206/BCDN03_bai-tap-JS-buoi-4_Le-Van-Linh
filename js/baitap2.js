function chao() {
    var thanhvien = document.getElementById("thanhvien").value;
    if (thanhvien == 2) {
        document.getElementById("loichao").innerHTML = "Xin chào Bố";
    } else if (thanhvien == 3) {
        document.getElementById("loichao").innerHTML = "Xin chào Mẹ";
    } else if (thanhvien == 4) {
        document.getElementById("loichao").innerHTML = "Xin chào Anh trai";
    } else {
        document.getElementById("loichao").innerHTML = "Xin chào Em gái";
    }
}