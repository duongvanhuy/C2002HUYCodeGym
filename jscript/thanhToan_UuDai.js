
const key = 'itemOto';
let itemCar = [];
let myArrayTongTien =[];
// let index= -1;
class sanPham{
    constructor(hinhAnh,maSP, tenSp, giaTien){
        this.hinhAnh = hinhAnh;
        this.maSP = maSP;
        this.tenSp = tenSp;
        this.giaTien = giaTien;
    }  
}
function setLocalStorage(key, data){
    window.localStorage.setItem(key,JSON.stringify(data));
}
//  lấy giá trị từ local
function getDataLocalStorage(){
   itemCar = JSON.parse(window.localStorage.getItem(key));
}
//  hàm khởi tạo
function init(){
    // if(window.localStorage.getItem('itemOto') == null){
    //    let sanpham01 = new sanPham('../img/AH04.png','HDTK210L','VINFAST FADIL', 12)
    //    let sanpham02 = new sanPham('../img/VFe34.png','HDTK210K','VINFAST VF e34',13 ) 
    //    let sanpham03 = new sanPham('../img/2LuxSA.png','HDTK210N','VINFAST LUX A2.0',14)
    // //    myArrayTongTien.push(sanpham01.tongTien(),sanpham02.tongTien(),sanpham03.tongTien()) 
    //    itemCar.push(sanpham01,sanpham02,sanpham03);
    //    setLocalStorage(key,itemCar);
      
    // }else{
    //     getDataLocalStorage()
    // }
    getDataLocalStorage()
}
//  phương thức aad  sản phẩm 
// khi khách hàng bấm nút mua hàng ở file thanhToan_UaDai.html
function addSanPham(){
//    1.kiểm tra mã sản phẩm không được trùng
//    2. kiểm tra tên sản phẩm bằng những gía trị gì để từ đó suy ra được ảnh mình cần lưu
//    2. add thông tin
//  lẽ ra mã sản phẩm phải được định nghãi từ ngoài sản ohaamr
//  nhưng tránh mất thời gian, maSP mình sẽ cho radom cho nhanh
    let maSp = Math.random().toString(36).substr(2, 8).toUpperCase()
    let tenSP = document.getElementById('mauxe').innerHTML;
    let tongTien = document.getElementById('donGia').innerHTML
    let sanpham = new sanPham('../img/AH04.png', maSp, tenSP,tongTien)
    itemCar.push(sanpham);
    setLocalStorage(key, itemCar)
}
//  slie img


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// đóng slide img