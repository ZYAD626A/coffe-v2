let ul = document.querySelector('header ul');
let show = document.getElementById('show');
let hide = document.getElementById('hide');
show.onclick = function(){
ul.style.left="0%";
show.style.display = 'none';
hide.style.display = 'block';
}
hide.onclick = function(){
ul.style.left="-100%";
show.style.display = 'block';
hide.style.display = 'none';
}
let header = document.querySelector('header');
let left_home = document.getElementById('left_home');
let right_home = document.getElementById('right_home');
let titleWeb = document.querySelector('.titleWeb');
let scrollUp = document.querySelector('.scrollUp');
 
window.onscroll = function (){
    header.classList.toggle('header_scroll', scrollY > 0);
    if(scrollY > 150){
        scrollUp.style.right = '3%';
    }else{
        scrollUp.style.right = '-100%';
    }
}
scrollUp.onclick = function (){
    window.scroll({
        top:0,
        behavior:'smooth'
    })
}
//leftHomePage / rightHomePage
window.onload = function () {
left_home.style.opacity="1";
right_home.style.opacity="1";
titleWeb.style.top="60%"
}

let img = document.querySelectorAll('.changer');
let change_foodN = document.querySelectorAll('.change_foodN');
let cake = ['cake1.jpg','cake2.jpg','cake3.jpg','cake4.jpg','cake5.jpg','cake56.jpg','Crepe.jpg','cake.jpg'];
let bread = ['https://i.pinimg.com/736x/d6/8f/d3/d68fd3ed9874b7f14356203808f922e0.jpg',
    'https://i.pinimg.com/736x/52/ec/40/52ec40d34e6d082251235c7e002da022.jpg',
    'https://i.pinimg.com/736x/0d/e3/c7/0de3c762d84445c282081af30863a398.jpg',
    'https://i.pinimg.com/736x/a8/cc/82/a8cc8273337db7cab9b4a05b06a1a1f9.jpg',
    'https://i.pinimg.com/736x/cb/f1/1b/cbf11b9a00cfca015db7d64a4004dbe1.jpg',
    'https://i.pinimg.com/736x/11/e2/8d/11e28d1d35103a697819471ac38431d4.jpg',
    'https://i.pinimg.com/736x/18/a7/64/18a7640977fcef26bfa7ac91070dbc76.jpg',
    'https://i.pinimg.com/736x/92/f5/1d/92f51df3689b4cc4c6670ce77aa6c5d8.jpg'];
let coffe = ['images/coffe1.jpg','images/coffe2.jpg',
    'https://i.pinimg.com/736x/d7/23/3a/d7233a04fd31b7c6e93a2f62fd454c78.jpg',
    'https://i.pinimg.com/736x/c3/0e/0e/c30e0ecc2b17ff4fa571f5963c70519b.jpg',
    'https://i.pinimg.com/736x/1c/0d/37/1c0d370cbb6c60eada20037d674ce3ce.jpg',
    'https://i.pinimg.com/736x/63/9b/08/639b0874b7c1227a6c98cbeae656eba0.jpg',
    'https://i.pinimg.com/736x/47/f9/e1/47f9e1817dff1fcd5e8756b6771fa192.jpg',
    'https://i.pinimg.com/736x/ff/fb/f2/fffbf2ff6caf46fdea4bdf3ca57020da.jpg'];
let crepe = ['https://i.pinimg.com/736x/cf/2d/a6/cf2da6a062bb2d8e238c324b7aafd196.jpg',
    'https://i.pinimg.com/736x/da/b6/5c/dab65c454080a157da5e8c4d94febea3.jpg',
    'https://i.pinimg.com/736x/23/7f/7e/237f7ed54313001e7b9c20f5c549d090.jpg',
    'https://i.pinimg.com/736x/43/03/d3/4303d3eb77ec7b54fcf0f3bf1d33c1cf.jpg',
    'https://i.pinimg.com/736x/7f/e0/bd/7fe0bd9dc68eb550a443ede2c33db537.jpg',
    'https://i.pinimg.com/736x/24/30/5d/24305df344f4485783397e0e29328c81.jpg',
    'https://i.pinimg.com/736x/6f/8d/87/6f8d872f57ceb97e11eb90020479912d.jpg',
    'https://i.pinimg.com/736x/3e/6f/47/3e6f471bf69d3f3b226affb1c9191bd2.jpg'];
let pizza = ['https://i.pinimg.com/736x/37/b6/60/37b660cb40988dda83c8d345f62c83da.jpg',
    'https://i.pinimg.com/736x/ab/e6/57/abe65721a6d06545c99230151aab0177.jpg',
    'https://i.pinimg.com/736x/37/9b/40/379b40c726939f450996952e3873302d.jpg',
    'https://i.pinimg.com/736x/21/60/d5/2160d5a47fc808875ee0338af5fe0ef1.jpg',
    'https://i.pinimg.com/736x/b2/d8/4f/b2d84f98d8954af7aea3cbc6c252c663.jpg',
    'https://i.pinimg.com/736x/7f/5a/82/7f5a82dd3f5f6ef17648cb9386c33bcb.jpg',
    'https://i.pinimg.com/736x/b6/7b/da/b67bda12145d854333b81d7896e3d126.jpg',
    'https://i.pinimg.com/736x/f6/8e/be/f68ebe1dc8a1b292e94ca2a4570d7a0b.jpg'];
    function changeImg(imgSource){
        /*you can use case */
if(imgSource.innerHTML === "Cake"){
    for(let i = 0; i < cake.length ; i++){
        img[i].src = `images/${cake[i]}`
        change_foodN[i].innerHTML = "Cake";
    }
}else if(imgSource.innerHTML === "Breads"){
     for(let i = 0; i < bread.length ; i++){
        img[i].src = bread[i];
        change_foodN[i].innerHTML = "Breads";
    }   
}else if(imgSource.innerHTML === "Coffe"){
     for(let i = 0; i < coffe.length ; i++){
        img[i].src = coffe[i]
        change_foodN[i].innerHTML = "Coffe";
    }    
}else if(imgSource.innerHTML === "Crepe"){
     for(let i = 0; i < crepe.length ; i++){
        img[i].src = crepe[i]
        change_foodN[i].innerHTML = "Crepe";
    }
}else if(imgSource.innerHTML === "Pizza"){
     for(let i = 0; i < pizza.length ; i++){
        img[i].src = pizza[i];
        change_foodN[i].innerHTML = "Pizza";
    }   
}
 }




function setting(){

 Swal.fire({
 
  text: 'Do you want to change settings',
  confirmButtonText: 'Save',
  showCloseButton: true,
  showCancelButton: true,
  html:`
  <center>
  <h2>Change Background :</h2>
  <br><br>
  <!-- From Uiverse.io by csemszepp --> 
<div class="container1">
<label class="switch">
  <input class="togglesw" checked="" type="checkbox"id="changeColor">
  <div class="indicator left"></div>
  <div class="indicator right"></div>
  <div class="button"></div>
</label>
</div>
<br>
  </center>
  `
});
let checkBox = document.getElementById('changeColor');
let a = document.querySelectorAll('.a1');
let card = document.querySelectorAll('.boxCard .card');
let featured = document.querySelector('.featured h3');
 
 
checkBox.addEventListener('change', function() {
    if (checkBox.checked) {
        document.body.style.background = '#111'; 
        //whiteCard / whiteText
        for(let i = 0; i < 5 ; i++){
            a[i].style.color = "white";
            card[i].classList.add('whiteCard');
        };
        featured.classList.add('whiteText');
 
 
    } else {
        document.body.style.background = '#ffffff'; // اللون الأبيض
        for(let i = 0; i < 5 ; i++){
            a[i].style.color = "#222";
            card[i].classList.remove('whiteCard');
        };
        featured.classList.remove('whiteText');
    }
});

}


document.querySelectorAll("img").forEach(img => {
  img.setAttribute("loading", "lazy");
});
let btn_cards = document.querySelectorAll('.card button');
let allimages = document.querySelectorAll('.card .image img');
let allPrice = document.querySelectorAll('.card .price');
let allNameF = document.querySelectorAll('.card .buy h4');
//console.log(allPrice[1]);
for(let i = 0;i < 16 ; i++){

btn_cards[i].onclick = function () {
  Swal.fire({
    title: `Are you want to buy it ?`,
    text: "Modal with a custom image.",
    confirmButtonText: "Buy",
    cancelButtonText: "Cancel",
    showCancelButton: true,
    showCloseButton: true,
    html: `
      <img src='${allimages[i].src}' class='img_food'>

      <div class="food">
        <h3 class="priceFood">Price : <span>${allPrice[i].innerHTML}</span></h3> |
        <h3 class="nameFood">Food Name : <span>${allNameF[i].innerHTML}</span></h3>
      </div>
    `,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'true or soon we will get your order',
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
}

}
 
if(screen.availWidth < 600){
 for(let i = 0 ;i < 6 ;i++){
    allimages[i].onclick = function () {
        
          Swal.fire({
    title: `Are you want to buy it ?`,
    text: "Modal with a custom image.",
    confirmButtonText: "Buy",
    cancelButtonText: "Cancel",
    showCancelButton: true,
    showCloseButton: true,
    html: `
      <img src='${allimages[i].src}' class='img_food'>

      <div class="food">
        <h3 class="priceFood">Price : <span>${allPrice[i].innerHTML}</span></h3> |
        <h3 class="nameFood">Food Name : <span>${allNameF[i].innerHTML}</span></h3>
      </div>
    `,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'true or soon we will get your order',
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
        
    }
 }   
} 
