//  1
const key = 'database';
let itemKhachHangs = [];
class itemKhachHang {
    constructor(email, name, passWord) {
        this.email = email;
        this.name = name;
        this.passWord = passWord;
    }
}
function init() {
    if(window.localStorage.getItem('database'==null)){
        let khachHang_01 = new itemKhachHang('duongvanhuy137@gmail.com', 'Dương Văn Huy', 'duonghuy261');
        let khachHang_02 = new itemKhachHang('PhamNguLao0900@gmail.com', 'Phạm Ngũ Lão', '0353133137');
        let khachHang_03 = new itemKhachHang('nguyenBaoAn@gmail.com', 'Nguyễn Bảo An', 'anNguyen2790');
        let khachHang_04 = new itemKhachHang('luongThanhDat@gmail.com', 'Lương Thành Đạt', 'dat09122002');
        let khachHang_05 = new itemKhachHang('nguyenDinhLong12@gmail.com', 'Nguyễn Đình Long', '26012002');
        itemKhachHangs.push(khachHang_01, khachHang_02, khachHang_03, khachHang_04, khachHang_05);
        // 2
        setDataLocalStorage(key, itemKhachHangs)
    }
    else{
        getDataLocalStorage();
    }
   
}
// check thông tin đăng nhập
function checkLogin() {
    let valueName = document.getElementById('inputPassword1');
    let valuePassWord = document.getElementById('inputPassword2');
    let check = true;
    let keys ='checkDangNhap';
    let index =-1
   getDataLocalStorage();
    for (let i = 0; i < itemKhachHangs.length; i++) {
        check = true;
        if (valueName.value == itemKhachHangs[i].email && valuePassWord.value == itemKhachHangs[i].passWord) {
            // alert('Đăng nhập thành công');
            //  có 2 cú pháp để chuyển hướng tới 1 trang:
            //  1 là window.location.replace(...)
            //  2 là: window.location.href =...
            index=1;
            window.localStorage.setItem(keys, index);
            window.location.href = 'Trangchu.html'
            break;
        }
        check = false;
    }
    if (check == false) {
        alert('Tài khoản đăng nhập không đúng')
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
  itemKhachHangs = JSON.parse(window.localStorage.getItem(key));
}
function checkRegister() {
    let valueName = document.getElementById('inputPassword1');
    let name = document.getElementById('inputPassword3');
    let passWord = document.getElementById('inputPassword2')
    let backPassWord = document.getElementById('inputPassword4');
    if (valueName.value != '' && name.value != '' && passWord.value != '' && backPassWord.value != '') {
        for (let i = 0; i < itemKhachHangs.length; i++) {
            if (valueName.value == itemKhachHangs[i].email) {
                alert('Tài khoản email đăng kí đã tồn tại')
                valueName.innerHTML = ''
                break;
            }
            else {
                if (passWord.value != backPassWord.value) {
                    alert('Hai mật khẩu không trùng nhau')
                    return false;
                } else {
                    let khachang = new itemKhachHang(valueName.value, name.value, passWord.value);
                    itemKhachHangs.push(khachang);
                    setDataLocalStorage(key, itemKhachHangs)
                    // hộp thoại confirm()
                    let choosing = confirm('Đăng kí thành công. Đăng nhập ngay !!');
                    if (choosing) {
                        $('#inputPassword3').attr('style', 'display: none! important');
                        $('#inputPassword4').attr('style', 'display: none! important');
                        $('.remove').attr('style', 'display: block! important');
                        $('.choos').attr('style', 'display: inline-block! important');
                        $('#login11').attr('style', 'display: block! important')
                        $('#register').attr('style', 'display: none! important')
                        $('#have').attr('style', 'display: none! important');
                        $('#have01').attr('style', 'display: none! important');
                        $('#not_have').attr('style', 'display: block! important');
                        $('#not_have01').attr('style', 'display: block! important');
                        $('.dang_ki').attr('style', 'color:  #000! important');
                        $('.dang_nhap01').attr('style', 'color: #006699! important');
                    }

                    // break;
                    return false;
                }
            }
        }
    }
    else {
        alert('Mời bạn điền đầy đủ thông tin !!!!');
    }
}
