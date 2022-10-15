// Create a "close" button and append it to each list item
var Mynodelist =document.getElementsByTagName("LI") //document.getElementsByTagName : lấy toàn bộ thẻ element
var i ;
for ( i = 0 ; i < Mynodelist.length;i++){ //i chạy từ 0 cho đến khi i < Mynodelist.length ; và i++ tăng lên 1;
    var span =document.createElement("SPAN");    // tạo ra nội dung của thẻ mới 
    var txt = document.createTextNode("\u00D7");  // nội dung của thẻ mới được thêm vào trang
    span.className="close"; // tạo class cho thẻ span
    span.appendChild(txt); // thêm node vào làm con của node
    Mynodelist[i].appendChild(span); // mảng i của Mynodelist[i].appendChild // thêm node vào làm con của node
}
// Click on a close button to hide the current list item
var close =document.getElementsByClassName("close"); //tìm phần tử bằng ten class
var i;// biến i
for (i = 0; i < close.length; i++){
    close[i].onclick =function(){ // xử lý sự kiện onclick
        var div = this.parentElement; // thuộc tính parent sẽ trả về thuộc tính của thẻ hiện tại , nếu không có thì trả về null
        div.style.display ="none"; // style display cho div
    }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul'); //trả về phần tử đầu tiên là phần tử con mà nó được gọi ra khớp với nhóm bộ chọn được chỉ định
list.addEventListener('click', function(ev) { // hàm lắng nghe xự kiện addevenlistener('click' , function(ev))
  if (ev.target.tagName === 'LI') {   
    ev.target.classList.toggle('checked'); // classlist.toggle : dùng để add thêm class 'checked' vào thẻ ul
  }
}, false); // 

// Create a new list item when clicking on the "Add" button
function newElement(){ // hàm để click nút button
    var li = document.createElement("li"); // tạo ra nội dung cho thẻ mới
    var inputValue = document.getElementById("myInput").value; // tìm phần tử của tên thẻ id
    var t = document.createTextNode(inputValue); // in ra trang nội dung mới
    li.appendChild(t); //thêm li vào làm con của t
    if(inputValue ===''){ // điều kiện if 
        alert("You must write something!") // bảng thông báo nếu không nhập gì mà add
    }else{
            document.getElementById("myUL").appendChild(li); // sai thì xuất thằng inputvalue và con thằng t

    }
    document.getElementById("myInput").value =" "; // truy xuất tới tên thằng id

    var span =document.createElement("SPAN");     //copy dòng 1 quăng xuống
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++){
        close[i].onclick =function(){
            var div = this.parentElement;
            div.style.display ="none";
        }
    }
}

