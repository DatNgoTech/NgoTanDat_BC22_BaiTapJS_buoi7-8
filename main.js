/**
 * While
 */

var n = 0;

while(n < 5){
    // Thực thi hành động
    console.log("Hello Cybersoft");

    //
    n++;
}

document.getElementById("btnSubmit").onclick = function(){
    var number = document.getElementById("txt_number").value;

    //tạo bộ đếm
    var count = 0;
    var content = "";

    while(number > 1){
        //Vừa tính kết quả & vừa là bước nhảy
        number = Math.floor (number / 2);

        count++;
        content += "<p>Count: " + count + " - " + "num: " + number + "</p>";
    }

    //in kết quả
    document.getElementById("footerCard").innerHTML = content;
};

/**
 * Do - While
 */

var m = 0;
do {
    //Bước Nhảy
    m++;
    console.log("Hello Cybersoft");
} while (m < 5);

document.getElementById("btnSubmit2").onclick = function(){
    var number2 = document.getElementById("txt_number2").value;

    var numberx = 0;
    var count = 1;

    do {
        numberx += count
        count++;
    } while (count <= number2);

    document.getElementById("footerCard2").innerHTML = numberx;
};

/**
 * For
 */
// for(var i = 0; i < 5; i++){
//     console.log("Hello Cybersoft");
// };

document.getElementById("btnSubmit3").onclick = function(){
    var number = document.getElementById("txt_number3").value;

    var soChan = "";
    var soLe = "";
    var tongChan = 0;
    var tongLe = 0;

    for (var i = 0; i < number; i++){
        if (i % 2 === 0){
            //Chẳn
            soChan += i + " ";
            tongChan += i;
        } else {
            //Lẻ
            soLe += i + " ";
            tongLe += i;
        }
    }


    document.getElementById("footerCard3").innerHTML = soChan + "</br>" + soLe;
    document.getElementById("footerCard3_1").innerHTML = tongChan + "</br>" + tongLe;

};

function demoVongLapLong(){
    var content = "";
    for(var i = 0; i < 5; i++){
        for(var z = 0; z < 5; z++){
            content += "* "
        }
        content += "\n";
    }
    console.log(content);
}

demoVongLapLong();

function demoBreak(){
    for(var i = 0; i < 10; i++){
        console.log(i);
        if(i > 5) {
            break; //dừng lại vòng lập
        }
    }
}

demoBreak();

function demoContinute(){
    for(var i = 0; i < 10; i++){
        if (i === 3){
            continue;
        }
        console.log(i);
    }
}

demoContinute();

function demoReturn(){
    

    if (1 === 1){
        console.log("Hello Cybersoft");
        return;
    } 
        console.log("Hello Dat");
    
}

demoReturn();