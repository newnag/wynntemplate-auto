//==== เปิดเมนูโมบาย ====//
function open_menu(){
  document.querySelector('.menu-head nav').classList.toggle('open')
}

//==== เปิดรูปภาพใหญ่ ====//
function big_img(src){
  document.querySelector('.big-img').classList.add('show')
  document.querySelector('.big-img img').src = src
}
//==== ปิดรูปภาพใหญ่ ====//
function close_bigImg(){
  document.querySelector('.big-img').classList.remove('show')
}

//==== เปิดช่องค้นหา ====//
function open_search(that){
  that.closest('.search').querySelector('.input-search').classList.toggle('show')
}