$(document).ready(function(){
  
    // 
    let tinhThanhs= document.getElementById('tinhThanh');
    let chonHuyens = document.getElementsByClassName('chonHuyen');
    let showrooms = document.getElementById('showroom');
    
    $('#tinhThanh').change(function(){
        if(tinhThanhs.value =='Hà Nội'){
            $('.HCM').attr('style','display: none !important');
            $('.HN').attr('style','display: block !important');
        }else{
            $('.HCM').attr('style','display: block !important');
            $('.HN').attr('style','display: none !important');
        }
     
    })
    //  còn nhiều trường hợp nữa
    // $('.chonHuyen').change(function(){
    //     if(chonHuyens.v =='Quận Long Biên'){
    //         alert('jj')
    //         $('.HCM01').attr('style','display: none !important');
    //         $('.HN01').attr('style','display: block !important');
    //     }
    //     else{
    //         alert('ê')
    //         $('.HCM01').attr('style','display: block !important');
    //         $('.HN01').attr('style','display: none !important');
           
    //     }
    // })

    //  tùy từng mã mà giảm n tiền 
    // nhưng giờ làm 1 cái mã đã rồi có thời gian phát triển tiếp
   
  
})
  // tính giá xe
  let apDungs = document.getElementById('maGiamGia');
    //  ĐỊNH NGHĨA SẴN MÃ GIẢM GIÁ
    let myGiamGia =['HKL0949ON', 'JKFPSKSUU', '097KAJOPL', 'JSOS009PS','LLASPOER0']
  let giaNiemYet = document.getElementById('giaNiemYet')
  let uaDai = document.getElementById('uaDai');
  let giaDonHang = document.getElementById('donGia');
  let checkvouCher = document.getElementById('vouCher');
  let e_voucher = document.getElementById('e-voucher')
  let vouCher=0;
  let giaBD =1552E6;
  let giaUaDai =425925E3
  let tongGia = giaBD - giaUaDai;
  let check = true;
   
    
function checkGia(){
    for(let i=0; i< myGiamGia.length; i++){
        check = true
        if(apDungs.value==myGiamGia[i]){
            vouCher = 5E7
            // alert('aa')
            break;
        }else{
            check = false;
        }
    }
    if(check){
        tongGia -= vouCher
        e_voucher.innerHTML = vouCher.toLocaleString('it-IT')
    }
    else{
        
        checkvouCher.innerHTML = 'E-VouCher không hợp lệ'
    }
    tongGia -= vouCher;
    giaNiemYet.innerHTML = giaBD.toLocaleString('it-IT')
uaDai.innerHTML = giaUaDai.toLocaleString("it-IT");
giaDonHang.innerHTML =tongGia.toLocaleString("it-IT")
}
giaNiemYet.innerHTML = giaBD.toLocaleString('it-IT')
uaDai.innerHTML = giaUaDai.toLocaleString("it-IT");
giaDonHang.innerHTML =tongGia.toLocaleString("it-IT")


