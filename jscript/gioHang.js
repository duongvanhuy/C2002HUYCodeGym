// đọc dữ liệu từ local
// chuyển hóa dữ liệu về mảng
//  show ra dữ liệu
// hết

// const key = 'itemOto';
// let itemCar = [];
// let myArrayTongTien =[];
// class sanPham{
//     constructor(hinhAnh, tenSp, giaTien){
//         this.hinhAnh = hinhAnh;
//         this.tenSp = tenSp;
//         this.giaTien = giaTien;
//     }  
// }
// function setLocalStorage(key, data){
//     window.localStorage.setItem(key,JSON.stringify(data));
// }
//  lấy giá trị từ local
function getDataLocalStorage(){
   itemCar = JSON.parse(window.localStorage.getItem('itemOto'));
}
// function tinhTien(){
//     let donGia = parseInt(document.getElementById('donGia'));
//     return myArrayTongTien.push(donGia);
// }
//  hàm khởi tạo
// function init(){
//     if(window.localStorage.getItem('itemOto') == null){
//        let sanpham01 = new sanPham('../img/AH04.png','VINFAST FADIL', 12) 
//        itemCar.push(sanpham01);
//        setLocalStorage(key,itemCar);
      
//     }else{
//         getDataLocalStorage()
//     }
// }
// phương thức lấy giá trị innerHTML để tính giá tiền

//  hiện thị thông tin
let show = document.getElementById('gioHangs')
function showSP(){
    getDataLocalStorage()
    for(let  i= 0; i< itemCar.length; i++){
        show.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
            <td>${itemCar[i].tenSp}</td>
            <td>${itemCar[i].giaTien}</td>
            <td class="text-center"><a href="" onclick="xemThongTin(${i})" > <i class="fa fa-address-card-o"  aria-hidden="true"></i><span class="px-4"> Xem ngay </span></a></td>
        </tr>
        `
    }
}

//  phương thức aad  sản phẩm 
// khi khách hàng bấm nút mua hàng ở file thanhToan_UaDai.html
// function addSanPham(){
//    1.kiểm tra mã sản phẩm không được trùng
//    2. kiểm tra tên sản phẩm bằng những gía trị gì để từ đó suy ra được ảnh mình cần lưu
//    2. add thông tin
//  lẽ ra mã sản phẩm phải được định nghãi từ ngoài sản ohaamr
//  nhưng tránh mất thời gian, maSP mình sẽ cho radom cho nhanh
//     let maSp = Math.random().toString(36).substr(2, 8).toUpperCase()
//     let tenSP = document.getElementById('mauXe').innerHTML;
//     let tongTien = parseInt(document.getElementById('donGia').innerHTML)
//     let sanpham = new sanPham('../img/AH04.png', maSp, tenSP,tongTien)
//     itemCar.push(sanpham);
//     setLocalStorage(key, itemCar)
// }
//  TÌM KIẾM SẢN PHẨM

//  SẮP XẾP THÔNG TIN THEO TÊN

 function run(){
     
     showSP();
    //  addSanPham()
 }
 run();