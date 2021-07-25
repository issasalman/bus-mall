'use strict';

let maxTries=10;
let userCounter=0;

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;



function Item(name,src) {
  this.name= name;
  this.src= src;
  this.votes=0;
  this.shown=0;

  Item.all.push(this);

}
 Item.all=[];
new Item('bag.jpg','images/bag.jpg');
new Item('banana.jpg','images/banana.jpg');
new Item('bathroom.jpg','images/bathroom.jpg');
new Item('boots.jpg','images/boots.jpg');
new Item('breakfast.jpg','images/breakfast.jpg');
new Item('bubblegum.jpg','images/bubblegum.jpg');
new Item('chair.jpg','images/chair.jpg');
new Item('cthulhu.jpg','images/cthulhu.jpg');
new Item('dog-duck.jpg','images/dog-duck.jpg');
new Item('dragon.jpg','images/dragon.jpg');
new Item('pen.jpg','images/pen.jpg');
new Item('pet-sweep.jpg','images/pet-sweep.jpg');
new Item('scissors.jpg','images/scissors.jpg');
new Item('shark.jpg','images/shark.jpg');
new Item('sweep.png','images/sweep.png');
new Item('tauntaun.jpg','images/tauntaun.jpg');
new Item('unicorn.jpg','images/unicorn.jpg');
new Item('water-can.jpg','images/water-can.jpg');
new Item('wine-glass.jpg','images/wine-glass.jpg');

let leftImageElement=document.getElementById('left-img');
let middleImageElement=document.getElementById('middle-img');
let rightImageElement=document.getElementById('right-img');

function getRandomIndex() {

  return Math.floor(Math.random() * Item.all.length);
}

function renderImages() {

  leftImageIndex=getRandomIndex();
  middleImageIndex=getRandomIndex();
  rightImageIndex=getRandomIndex();

  while (leftImageIndex===rightImageIndex || leftImageIndex===middleImageIndex || rightImageIndex===middleImageIndex) {
    leftImageIndex=getRandomIndex();
    middleImageIndex=getRandomIndex();
    rightImageIndex=getRandomIndex();

  }
  leftImageElement.src=Item.all[leftImageIndex].src;
  middleImageElement.src=Item.all[middleImageIndex].src;
  rightImageElement.src=Item.all[rightImageIndex].src;
  Item.all[leftImageIndex].shown++;
  Item.all[middleImageIndex].shown++;
  Item.all[rightImageIndex].shown++;
}

renderImages();

let imagesDiv=document.getElementById('main-div');
imagesDiv.addEventListener('click',userClick);

function userClick(event) {

  if (userCounter<maxTries) {


    if (event.target.id==='left-img') {

      Item.all[leftImageIndex].votes++;
      userCounter++;

    }
    else if(event.target.id==='right-img')
    {
      userCounter++;
      Item.all[rightImageIndex].votes++;
    }

    else if(event.target.id==='middle-img'){
      Item.all[middleImageIndex].votes++;
      userCounter++;
    }
    else{
      alert('Please click on imgs');



    }

    renderImages();

  }else{







    let btn = document.createElement('button');
    imagesDiv.appendChild(btn);
    btn.textContent='View Results';
    btn.addEventListener('click',results);
    // btn.setAttribute ("type", "submit");
    // btn.setAttribute ("value", "View Results");
    // btn.id = "done"




    // remove event listener:
    imagesDiv.removeEventListener('click',userClick);


  }}


function results(){





  let list= document.getElementById('results-list');

  for (let i = 0; i < Item.all.length; i++) {

    let listItem=document.createElement('li');

    list.appendChild(listItem);

    listItem.textContent=`${Item.all[i].name} has ${Item.all[i].votes}  votes  and showing ${Item.all[i].shown}`;

  }}



  imagesDiv.removeEventListener('click',results);






