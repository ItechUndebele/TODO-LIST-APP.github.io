let text_field = document.querySelector('.text--field');
let button = document.querySelector('.button');
let container_space = document.querySelector('.container--space');

let id = 0; 
let number;
let creation;

button.addEventListener('click', ()=>{
    
     number = id += 1;

     let creation = document.createElement('div');
         creation.innerHTML = `
     <div class='border--container'>
      <div id=${number} class="box-container" >
        <div class='text--space'>${text_field.value}</div> 
         <div class='trash'>
        <i Onclick='del(${number})' class="bi bi-trash3-fill"></i>
       
      </div>
     </div>
     </div>
     `
    console.log(creation);
     //APPEND TODO CARD 
     document.querySelector('.container--space').appendChild(creation);

}) 


 //DELETE TODO CARD 
 function  del(number){
   let id_container =  document.getElementById(number);
   id_container.style.display = 'none';
 }
//EDITS
function  edits(number){
    let text_space = document.querySelector(number);
    text_space.innerHTML = 'shit';
}




/*
let data;

data = [

{
  title: 'number1',
  id: 1
},
{
  title: 'number2',
  id: 2
}

]

function myFunction(){
      <div class='trash'> <i  class="bi bi-trash3-fill"></i> </div>
      
    container_space.innerHTML = data.map(x =>{
      let {title, id} = x;
      return(
        ` 
        <div> 
          <div Onclick='magic(${id})' id=${id}>${title}</div>
        </div>
        `
      )
    }).join('');
    
}
myFunction();



function magic(id){
   let nje = document.getElementById(id);
   nje.style.color = 'green';
   console.log(finder);
}
*/