var readmebutton = document.getElementsByClassName("readmebutton")[0]; //i can use .queryselector
var fiobutton = document.getElementsByClassName("fiobutton")[0];
var fio = document.getElementsByClassName("fio")[0];
var mainmenu = document.getElementsByClassName("mainmenu")[0];
var returnfiobutton = document.getElementsByClassName("returnfiobutton")[0];
var returnreadmebutton = document.getElementsByClassName("returnreadmebutton")[0];
var returngallerybutton = document.getElementsByClassName("returngallerybutton")[0];
var readme = document.getElementsByClassName("readme")[0];
var gallery = document.getElementsByClassName("gallery")[0];
var gallerybutton = document.getElementsByClassName("gallerybutton")[0];

fiobutton.addEventListener('click', function(){
    fio.style.display = 'flex';
    mainmenu.style.display = 'none';
});

readmebutton.addEventListener('click', function(){
    readme.style.display = 'flex';
    mainmenu.style.display = 'none';
});

gallerybutton.addEventListener('click', function(){
    gallery.style.display = 'flex';
    mainmenu.style.display = 'none';
});

returnfiobutton.addEventListener('click', function(){
    mainmenu.style.display = 'flex';
    fio.style.display = 'none';
});

returnreadmebutton.addEventListener('click', function(){
    mainmenu.style.display = 'flex';
    readme.style.display = 'none';
});

returngallerybutton.addEventListener('click', function(){
    mainmenu.style.display = 'flex';
    gallery.style.display = 'none';
});

var birthday = new Date("2024-03-21 00:00:00").getTime();
var func = setInterval(function(){
    var now = new Date().getTime();
    var interval = birthday - now;
    var days = Math.floor(interval / (1000 * 60 * 60 * 24));
    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((interval % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if(interval < 0){
        clearInterval(func);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);

