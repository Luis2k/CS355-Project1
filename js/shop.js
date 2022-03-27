
const btn = document.getElementsByClassName('btn');

for (let i = 0; i < btn.length; i++){
let added = false;
btn[i].addEventListener('click', ()=> {

  if(added){
    added = false;
    btn[i].style.backgroundColor = 'black';
    btn[i].style.color = 'white';
  }
  else {
    added = true;
    btn[i].style.backgroundColor = 'blue';
    btn[i].style.color = 'white';
  }

});
}
