const key = 'item_car';
let itemCar = [];

class sanPham{
    constructor(hinhAnh,maSP, tenSp, soLuong){
        this.hinhAnh = hinhAnh;
        this.maSP = maSP;
        this.tenSp = tenSp;
        this.soLuong =soLuong;
    }
    tongTien(){
        let number =1
        let tongtien =0
        //  phương thức tính tổng tiền xe này là demo 
        //  tổng tiền chịu ảnh hưởng bởi nhiều yếu tố, bỏ qua các yếu tố để xd phương thức dễ dàng hơn
        // ĐỊNH DẠNG TÊN SẼ ĐƯỢC KHẮC PHỤ SAU: TÊN NHẬP VÀO CHUỖI DC ÉP IN HOA, XÓA BỎ KHAONGR TRẮNG CÁC KIỂU
        if(this.tenSP== 'VINFAST PRESIDENT' ){
            number = 3E9;
        }
        if(this.tenSp == 'VINFAST VF e34'){
            number = 690E6;
        }
        if(this.tenSp == 'VINFAST LUX A2.0'){
            number = 881695E3;
        }
        tongtien = number*this.soLuong;
    }
}
// khởi tạo giá trị lưu localStorage
function setLocalStorage(key, data){
    window.localStorage.setItem(key,JSON.stringify(data));

}
//  lấy giá trị từ local
function getDataLocalStorage(){
   itemCar = JSON.parse(window.localStorage.getItem(key));
}
//  hàm khởi tạo
function init(){
    if(window.localStorage.getItem('item_car') == null){
       let sanpham01 = new sanPham('../img/president.png','HDTK210L','VINFAST PRESIDENT', 4)
       let sanpham02 = new sanPham('../img/VFe34.png','HDTK210L','VINFAST VF e34', 7) 
       let sanpham03 = new sanPham('../img/2LuxSA.png','HDTK210L','VINFAST LUX A2.0',10) 
       itemCar.push(sanpham01,sanpham02,sanpham03);
       setLocalStorage(key,itemCar);
    }else{
        getDataLocalStorage()
    }

}

//  hiện thị thông tin
let show = document.getElementById('sale')
function showSP(){
    getDataLocalStorage()
    for(let  i= 0; i< itemCar.length; i++){
        show.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${itemCar[i].hinhAnh}</td>
            <td>${itemCar[i].maSP}</td>
            <td>${itemCar[i].tenSP}</td>
            <td>${itemCar[i].soLuong}</td>
           
        </tr>
        `
    }
}
 function run(){
     init()
     showSP();
 }
 run();