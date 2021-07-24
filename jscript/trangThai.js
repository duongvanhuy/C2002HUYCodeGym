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
function tinhTien(){
    let donGia = parseInt(document.getElementById('donGia'));
    return myArrayTongTien.push(donGia);
}
//  hàm khởi tạo
function init(){
    if(window.localStorage.getItem('itemOto') == null){
       let sanpham01 = new sanPham('../img/AH04.png','HDTK210L','VINFAST FADIL', 12)
       let sanpham02 = new sanPham('../img/VFe34.png','HDTK210K','VINFAST VF e34',13 ) 
       let sanpham03 = new sanPham('../img/2LuxSA.png','HDTK210N','VINFAST LUX A2.0',14)
    //    myArrayTongTien.push(sanpham01.tongTien(),sanpham02.tongTien(),sanpham03.tongTien()) 
       itemCar.push(sanpham01,sanpham02,sanpham03);
       setLocalStorage(key,itemCar);
      
    }else{
        getDataLocalStorage()
    }
}
// phương thức lấy giá trị innerHTML để tính giá tiền

//  hiện thị thông tin
let show = document.getElementById('sale')
function showSP(){
    getDataLocalStorage()
    for(let  i= 0; i< itemCar.length; i++){
        show.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
            <td>${itemCar[i].maSP}</td>
            <td>${itemCar[i].tenSp}</td>
            <td>${itemCar[i].giaTien}</td>
            <td class="text-center"><a href="" onclick="xemThongTin(${i})" > <i class="fa fa-address-card-o"  aria-hidden="true"></i><span class="px-4"> Xem ngay </span></a></td>
        </tr>
        `
    }
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
    let tenSP = document.getElementById('mauXe').innerHTML;
    let tongTien = parseInt(document.getElementById('donGia').innerHTML)
    let sanpham = new sanPham('../img/AH04.png', maSp, tenSP,tongTien)
    itemCar.push(sanpham);
    setLocalStorage(key, itemCar)
}
//  TÌM KIẾM SẢN PHẨM
function search() {
    let value_name = document.getElementById('search').value;
    let up_value_name = value_name.toUpperCase();
    let txtValue = '';
    //  định dạng giá trị nhập vào không phân biệt bởi dấu cách
    let tr = show.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        //  duyệt qua hết thẻ tr. 
        //  mình muốn tìm thông tin thông qua name thì phải sử dựng cột name tương ứng với td thứ 1.
        let td = tr[i].getElementsByTagName('td')[3];
        //   nếu có giá trị(data)
        if (td) {
            //  muốn lấy giá trị thằng td thì phải làm 1 trong các cách thức sau:
            // innerText, textContent
            // this.text() trong jquery
            txtValue = td.innerText || td.textContent;
            if (txtValue.toUpperCase().indexOf(up_value_name) > -1) {
                tr[i].style.display = '';
            }
            else {
                tr[i].style.display = 'none';
            }
        }
    }
}
//  SẮP XẾP THÔNG TIN THEO TÊN
// function sortABC() {
//     itemCar.sort(function (a, b) {
//         let nameA = a.tenSp.toUpperCase();
//         let nameB = b.tenSp.toUpperCase();
//         if (nameA < nameB) {
//             return -1;
//         }
//         if (nameA > nameB) {
//             return 1;
//         }
//         return 0;
//     });
//     $('#sale tr').remove();
//     for (let i = 0; i < itemCar.length; i++) {
//         show.innerHTML += `
//             <tr> 
//             <td>${i+1}</td>
//             <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
//             <td>${itemCar[i].maSP}</td>
//             <td>${itemCar[i].tenSp}</td>
//             <td>${itemCar[i].giaTien}</td>
           
//             </tr>
//             `;
//     }
// }
// //  sắp xếp theo số lượng cao => thấp
// function sortHeight() {

//     itemCar.sort(function (a, b) {
//         return b.soLuong - a.soLuong;
//     })
//     $('#sale tr').remove();
//     for (let i = 0; i < itemCar.length; i++) {
//         show.innerHTML += `
//         <tr> 
//         <td>${i+1}</td>
//         <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
//         <td>${itemCar[i].maSP}</td>
//         <td>${itemCar[i].tenSp}</td>
//         <td>${itemCar[i].giaTien}</td>
       
//         </tr>
//         `;
//     }
// }
// //  sắp xếp số lượng thấp => cao
// function sortLow() {
//     itemCar.sort(function (a, b) {
//         return a.soLuong - b.soLuong;
//     })
//     $('#sale tr').remove();
//     for (let i = 0; i < itemCar.length; i++) {
//         show.innerHTML += `
//         <tr> 
//         <td>${i+1}</td>
//         <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
//         <td>${itemCar[i].maSP}</td>
//         <td>${itemCar[i].tenSp}</td>
//         <td>${itemCar[i].giaTien}</td>
       
//         </tr>
//         `;
//     }
// }
// //sắp xếp tiền cao => thấp
// function sortHeightMoney() {
//     myArrayTongTien.sort(function (a, b) {
//         return b - a;
//     })
//     $('#sale tr').remove();
//     for (let i = 0; i < itemCar.length; i++) {
//         show.innerHTML += `
//         <tr> 
//         <td>${i+1}</td>
//         <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
//         <td>${itemCar[i].maSP}</td>
//         <td>${itemCar[i].tenSp}</td>
//         <td>${itemCar[i].giaTien}</td>
       
//         </tr>
//         `;
//     }
// }
// //sắp xếp tiền thấp => cao
// function sortLowMoney() {
//     myArrayTongTien.sort(function (a, b) {
//         return a - b;
//     })
//     $('#sale tr').remove();
//     for (let i = 0; i < itemCar.length; i++) {
//         show.innerHTML += `
//         <tr> 
//         <td>${i+1}</td>
//         <td> <img src='${itemCar[i].hinhAnh}' width='100px' height='70px'></td>
//         <td>${itemCar[i].maSP}</td>
//         <td>${itemCar[i].tenSp}</td>
//         <td>${itemCar[i].giaTien}</td>
       
//         </tr>
//         `;
//     }
// }
 function run(){
     init()
     showSP();
    //  addSanPham()
 }
 run();