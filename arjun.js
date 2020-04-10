var popup = document.getElementById('popup1');
var openbtn = document.getElementById('btn1');
var closebtn = document.getElementById('close1');
openbtn.addEventListener('click',openpopup);
closebtn.addEventListener('click',closepopup);
function openpopup(){
    popup.style.display = 'block';
    console('desd')
}
function closepopup(){
    popup.style.display = 'none';
}