    // Khai Báo Mảng
    var numberList = [];

document.getElementById("btnThemSo").onclick = function(){
    
    // Lấy giá trị từ người dùng nhập
    var number = document.getElementById("txt_ThemSo").value;

    // Thêm number vào màng numberList
    numberList.push(number);

    console.log(numberList);
}

/**
 * Tổng chẳn
 */
document.getElementById("btnTongChan").onclick = function(){
    /**
     * 0. tạo tích lũy tổng
     * 1. Duyệt mảng vòng lập for
     * 2. Nếu phần tử chia hết cho 2 === 0
     *  ===> tính tổng
     */
    var tong = 0;

    for (var i = 0; i < numberList.length; i++) {
        if(numberList[i] % 2 ===0) {
            tong += numberList[i];
        }
    }
    console.log(tong);
};

/**
 * Đếm số âm
 */
 document.getElementById("btnTongChan").onclick = function(){
     /**
      * 0. Tạo biến count = 0;
      * 1. Duyệt mảng
      * 2. Nếu như phần tử < 0
      *  ===> tăng biến count 1 đơn vị
      */
    var count = 0;

    for( var i = 0; i < numberList.length; i++){
        if (numberList[i] < 0) {
            count++;
        }
    }

    console.log(count);
 };
