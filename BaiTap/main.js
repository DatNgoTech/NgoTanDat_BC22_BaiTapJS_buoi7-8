// Khai Báo Mảng
var numberList = [];

document.getElementById("btnThemSo").onclick = function () {
  // Lấy giá trị từ người dùng nhập
  var number = document.getElementById("txt_ThemSo").value;

  // Thêm number vào màng numberList
  numberList.push(number);

  console.log(numberList);
};

/**
 * Tổng
 */
document.getElementById("btnTong").onclick = function () {
  /**
   * 0. tạo tích lũy tổng
   * 1. Duyệt mảng vòng lập for
   *  ===> tính tổng
   */
  var tong = 0;

  for (var i = 0; i < numberList.length; i++) {
    tong += numberList[i] * 1;
  }
  console.log(tong);
  document.getElementById("footerCard1").innerHTML = "Tổng là : " + tong;
};

/**
 * Đếm số âm
 */
document.getElementById("btnDemDuong").onclick = function () {
  /**
   * 0. Tạo biến count = 0;
   * 1. Duyệt mảng
   * 2. Nếu như phần tử < 0
   *  ===> tăng biến count 1 đơn vị
   */
  var count = 0;

  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      count++;
    }
  }
  console.log(count);
  document.getElementById("footerCard1").innerHTML = "Đếm số Dương : " + count;
};

/**
 * Tìm số nhỏ nhất trong Array
 */
document.getElementById("btnSoNhoNhat").onclick = function () {
  soNhoNhat(numberList);
};

//Hàm tìm vị trí số nhỏ nhất trong mảng*/
function soNhoNhat(array) {
  //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
  var min = array[0];
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
  for (var i = 1; i < array.length; ++i) {
    if (min > array[i]) {
      //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
      min = array[i];
    }
  }
  console.log("min= ", min);
  document.getElementById("footerCard1").innerHTML =
    "Số nhỏ nhất trong mảng : " + min;
}

document.getElementById("btnDuongNhoNhat").onclick = function () {
  soDuongNhoNhat(numberList);
};

function soDuongNhoNhat(array) {
  //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
  var min = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      min = array[i];
    } else if (min != 0) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] < min) min = array[i];
      }
    }
  }
  console.log("minDuong= ", min);
  document.getElementById("footerCard1").innerHTML =
    "Số Dương nhỏ nhất trong mảng : " + min;
}

document.getElementById("btnLastEven").onclick = function () {
    last_Even(numberList);
    
  };

/*Tạo hàm tìm số chẵn cuối cùng trong mảng*/
function last_Even(array){
    for (var i = array.length-1; i >=0; i --){
        if (array[i] == 0) 
        return array[i];
    }
    console.log("Số chẵn cuối cùng: "+last_Even(array));
}

