let khachHangs = [];
const key = 'database-c2002';
let index = -1;
let danhSachKhachHang = 'ItemsKhachHang';
class khachHang {
    constructor(id, name, sdt, email, diaChi, mauXe) {
        this.id = id;
        this.name = name;
        this.sdt = sdt;
        this.email = email;
        this.diaChi = diaChi;
        this.mauXe = mauXe;
    }
}
function setDataLocalStorage(key, data){
    // 4 biến mảng khách hàng thành chuỗi để lưu
  //   let obj = JSON.stringify(data);
    // 5 lưu chuỗi vào localStorage
      // window.localStorage.setItem(key, obj);
  //   hoặc có thể viết 
  window.localStorage.setItem(key, JSON.stringify(data))

}
function getDataLocalStorage(){
  // lấy dữ liệu từ localStorage
  
  // chuyễn dữ liệu từ chuỗi đó về lại mảng
  khachHangs = JSON.parse(window.localStorage.getItem(key));
}
function init() {
    if(window.localStorage.getItem('database-c2002') == null){
        let khachHang_01 = new khachHang(1, 'Huy', 972323348, 'duonghuy137@gmail.com', 'Hà Nội', 'VINFAST SA2.0');
        let khachHang_02 = new khachHang(2, 'Tiến', 973920938, 'tienVan09@gmail.com', 'TP.Hồ Chí Minh', 'VINFAST FADIL');
        let khachHang_03 = new khachHang(3, 'Long', 923242323, 'longnguyen73@gmail.com', 'TP.Hồ Chí Minh', 'VINFAST LUX 2.0');
        let khachHang_04 = new khachHang(4, 'Khánh', 997208739, 'duongKhanh091@gmail.com', 'Hà Nội', 'VINFAST FADIL');
        let khachHang_05 = new khachHang(5, 'Toàn', 972323348, 'dinhToan19@gmail.com', 'Hà Nội', 'VINFAST LUX 2.0');
        let khachHang_06 = new khachHang(6, 'Bình', 909368750, 'BìnhLongAn@gmail.com', 'Hà Nội', 'VINFAST A2.0');
        khachHangs.push(khachHang_01, khachHang_02, khachHang_03, khachHang_04, khachHang_05, khachHang_06);
        setDataLocalStorage(key, khachHangs);
    }else{
        getDataLocalStorage();
    }
}
let show_01 = document.getElementById('after_run');
//  HIỆN THỊ THÔNG TIN KHÁCH HÀNG
function showTT() {
    getDataLocalStorage()
    for (let i = 0; i < khachHangs.length; i++) {
        show_01.innerHTML += `
                <tr> 
                    <td>${i + 1}</td>
                    <td>${khachHangs[i].id}</td>
                    <td>${khachHangs[i].name}</td>
                    <td>${khachHangs[i].sdt}</td>
                    <td>${khachHangs[i].email}</td>
                    <td>${khachHangs[i].diaChi}</td>
                    <td>${khachHangs[i].mauXe}</td>
                    <td><a id='tr_99' class='text-warning' onclick='editTT(${khachHangs[i].id})'> <i  class="fa fa-pencil-square-o  aria-hidden="true"></i><a></td>
                    <td><a id='tr_100' class='text-success' onclick='removeStudent(${khachHangs[i].id})'> <i class="fa fa-trash-o" aria-hidden="true"></i><a></td>        
                </tr>
                `;
    }
}

// thêm khách hàng ở trang khachHang.html
function addkhachHang() {
    td = khachHangs.length+1;
    let name = document.getElementById('name').value;
    // định dạng tên nhập vào sẽ viết hoa các chữ cái đầu, xóa bỏ khoảng trắng
    let myName = myFormat(name);
    let sdt = document.getElementById('sdt').value;
    let email = document.getElementById('email').value;
    let diaChi = document.getElementById('address').value;
    let mauXe = document.getElementById('status').value;

    if (myName != '' && sdt != 0 && email != '') {
        let khachang = new khachHang(td, myName, sdt, email, diaChi, mauXe);
        // kiểm tra ID nhập vào không được trùng
        if (index == -1) {
            for(let i=0; i< khachHangs.length; i++){
                if(td==khachHangs[i].id){
                    td = khachHangs[i].id +1;
                }
            }
            khachHangs.push(khachang);
            setDataLocalStorage(key, khachHangs)
        }
        else {
            khachHangs[index].name = myName;
            khachHangs[index].sdt = sdt;
            khachHangs[index].email = email;
            khachHangs[index].diaChi = diaChi;
            khachHangs[index].mauXe = mauXe;
            index = -1;
            document.getElementById('addkhachHangs').innerHTML = 'Thêm khách hàng'
        }
            $('#after_run tr').remove();
            showTT(khachHangs);
        //  ..............................................
        document.getElementById('name').value = '';
        document.getElementById('sdt').value = 0;
        document.getElementById('email').value = '';
        document.getElementById('address').value = '';
        document.getElementById('status').value = '';
    } else {
        alert('Thông tin  không hợp lệ!!!')
    }

}
function myFormat(name) {
    let myString = name.toLowerCase().split(' ');
    for (let i = 0; i < myString.length; i++) {
        myString[i] = myString[i].charAt(0).toUpperCase() + myString[i].substring(1);
    }
    return myString.join(' ');
}
// tìm kiếm sinh viên
function search() {
    let value_name = document.getElementById('search').value;
    let up_value_name = value_name.toUpperCase();
    let txtValue = '';
    //  định dạng giá trị nhập vào không phân biệt bởi dấu cách
    let tr = show_01.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        //  duyệt qua hết thẻ tr. 
        //  mình muốn tìm thông tin thông qua name thì phải sử dựng cột name tương ứng với td thứ 1.
        let td = tr[i].getElementsByTagName('td')[2];
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
//  xóa sinh viên khỏi danh sách
function removeStudent(id) {
    // giải thích mã code dưới:
    //  students.map(x=>{return x.id})
    //  cái code trêm sẽ bằng students.map(function(x){
    //  return x.id})
    // CÁCH 1
    // let index = students.map(x => {
    //     return x.id;
    // })
    // let index_01 = index.indexOf(id);
    // students.splice(index_01, 1);
    // cách 2
    let arr = [];
    getDataLocalStorage()
    for (let i = 0; i < khachHangs.length; i++) {
        arr.push(khachHangs[i].id);
        //    let compare = id.localeCompare(arr[i])
        //    alert(compare);
        if (id == arr[i]) {
            let index = arr.indexOf(arr[i]);
            khachHangs.splice(index, 1);
            setDataLocalStorage(key, khachHangs);
            break;
        }
    }
    $('#after_run tr').remove();
    showTT(khachHangs);
}
// chỉnh sửa thông tin
function editTT(id) {
    // alert(students.length);
    document.getElementById('name').value = khachHangs[id - 1].name;
    document.getElementById('sdt').value = khachHangs[id - 1].sdt;
    document.getElementById('email').value = khachHangs[id - 1].email;
    document.getElementById('address').value = khachHangs[id - 1].diaChi;
    document.getElementById('status').value = khachHangs[id - 1].mauXe;
    document.getElementById('addkhachHangs').innerHTML = 'Sửa thông tin'
    index = id - 1;
}
// function sortHeight() {

//     students.sort(function (a, b) {
//         return b.sumTest() - a.sumTest();
//     })

//     $('#after_run tr').remove();
//     for (let i = 0; i < students.length; i++) {
//         show_01.innerHTML += `
//                 <tr> 
//                     <td>${i + 1}</td>
//                     <td>${students[i].id}</td>
//                     <td>${students[i].name}</td>
//                     <td>${students[i].diemQT}</td>
//                     <td>${students[i].diemTHI}</td>
//                     <td>${students[i].sumTest()}</td>
//                     <td><a id='tr_99' class='text-warning' onclick='editTT(${students[i].id})'> <i  class="fa fa-pencil-square-o  aria-hidden="true"></i><a></td>
//                     <td><a id='tr_100' class='text-success' onclick='removeStudent(${students[i].id})'> <i class="fa fa-trash-o" aria-hidden="true"></i><a></td>        
//                 </tr>
//                 `;
//     }
// }
// function sortLow() {

//     students.sort(function (a, b) {
//         return a.sumTest() - b.sumTest();
//     })

//     $('#after_run tr').remove();
//     for (let i = 0; i < students.length; i++) {
//         show_01.innerHTML += `
//             <tr> 
//                 <td>${i + 1}</td>
//                 <td>${students[i].id}</td>
//                 <td>${students[i].name}</td>
//                 <td>${students[i].diemQT}</td>
//                 <td>${students[i].diemTHI}</td>
//                 <td>${students[i].sumTest()}</td>
//                 <td><a id='tr_99' class='text-warning' onclick='editTT(${students[i].id})'> <i  class="fa fa-pencil-square-o  aria-hidden="true"></i><a></td>
//                 <td><a id='tr_100' class='text-success' onclick='removeStudent(${students[i].id})'> <i class="fa fa-trash-o" aria-hidden="true"></i><a></td>        
//             </tr>
//             `;
//     }
// }
function sortABC() {
    khachHangs.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    $('#after_run tr').remove();
    for (let i = 0; i < khachHangs.length; i++) {
        show_01.innerHTML += `
            <tr> 
                <td>${i + 1}</td>
                <td>${khachHangs[i].id}</td>
                <td>${khachHangs[i].name}</td>
                <td>${khachHangs[i].sdt}</td>
                <td>${khachHangs[i].email}</td>
                <td>${khachHangs[i].diaChi}</td>
                <td>${khachHangs[i].mauXe}</td>
                <td><a id='tr_99' class='text-warning' onclick='editTT(${khachHangs[i].id})'> <i  class="fa fa-pencil-square-o  aria-hidden="true"></i><a></td>
                <td><a id='tr_100' class='text-success' onclick='removeStudent(${khachHangs[i].id})'> <i class="fa fa-trash-o" aria-hidden="true"></i><a></td>        
            </tr>
            `;
    }
}

//  update thông tin sau chỉnh sửa
//  xây đựng danh sách sinh viên thi lại;
// function retest() {
//     let show = document.getElementById('retest');
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].sumTest() < 5) {
//             show.innerHTML += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${students[i].name}</td>
//             <td>${students[i].sumTest()}</td>
//         </tr>
//         `
//         }
//     }
// }
// 
//  xây dựng hàm xếp loại sinh viên
//  check thêm điều kiện sum<=10 và sum sum>=0
// function xepLoai() {
//     let show = document.getElementById('xeploai');
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].sumTest() >= 8) {
//             xeploai = 'A'
//         }
//         else if (students[i].sumTest() >= 6.5) {
//             xeploai = 'B';
//         }
//         else if (students[i].sumTest() >= 5) {
//             xeploai = 'C';
//         }
//         else {
//             xeploai = 'D';
//         }
//         show.innerHTML += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${students[i].name}</td>
//             <td>${students[i].sumTest()}</td>
//             <td>${xeploai}</td>
//         </tr>
//         `
//     }
// }
//  danh sách sinh viên nhận học bổng ( số lượng 3);
// function hocBong() {
//     // let show = document.getElementById('hocbong');
//     students.sort(function (a, b) {
//         return b.sumTest() - a.sumTest();
//     })
//     for (let i = 0; i < 3; i++) {
//         if (students[i].sumTest() >= 8) {
//             xeploai = 'A'
//         }
//         else if (students[i].sumTest() >= 6.5) {
//             xeploai = 'B';
//         }
//         else if (students[i].sumTest() >= 5) {
//             xeploai = 'C';
//         }
//         else {
//             xeploai = 'D';
//         }

//         show.innerHTML += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${students[i].name}</td>
//             <td>${students[i].sumTest()}</td>
//             <td>${xeploai}</td>
//         </tr>
//         `
//     }
// }
function run() {
    
    init();
    showTT();
    //     // retest();
    //     // xepLoai();
    //     // hocBong();


}
run();
