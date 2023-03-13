
const allItem=document.querySelectorAll('li');
const odd= document.querySelectorAll('li:nth-child(odd)');

allItem[1].style.color='green';
for(var i=0; i< odd.length; i++){
    odd[i].style.backgroundColor='green';   
}


