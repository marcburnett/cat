  class Cat {
 
    constructor(name, pic)
        {
        this.name = name;
        this.pic = pic;
        this.clicks = 0;
      
    let parent = document.getElementById('home');
    
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    image.setAttribute('src', `${this.pic}`);
    image.setAttribute('width', '200px');
    let h3 = document.createElement('h3');  
    let h4 = document.createElement('h4');  
    
    let p = document.createElement('p');
    
    parent.appendChild(h2).innerHTML = `Hello, I am ${this.name}`;  
    h2.style.color = 'red';
    parent.appendChild(image);
    parent.appendChild(p).innerHTML = `Click on the picture`; 
    parent.appendChild(h3).innerHTML = `Likes = ${this.clicks}`; 
    parent.appendChild(h4).innerHTML = `Level = Baby`;

    let list = Array.from(document.getElementsByTagName('img')) ;
    
   for(let i = 0; i<list.length; i++) {
       
    list[i].addEventListener('click', (function(clicks) {
        return function() {
          //alert (clicks + 1);
          //h3.setAttribute('id', i)
          
          h3.setAttribute('id', i);
          h4.setAttribute('id', `${-1*(i+1)}`);

        document.getElementById(`${i}`).innerHTML = `Likes = ${clicks+1}`;
        clicks++;

        let level = 'Baby';
        if(clicks <5){level = 'Baby'}
          else if (clicks === 5 ||  clicks<10 ){level = 'Infant'}
            else if (clicks === 12 ||  clicks<21 ){level = 'Mature'}
              else{level = 'Elderly'}
        document.getElementById(`${-1*(i+1)}`).innerHTML = `Level = ${level}`;
        
        };

    })(this.clicks));

   }

  
   //elem.addEventListener('click', (function(numCopy) {
  //  return function() {
  //      alert(numCopy)
 //   };
//})(num));
          
}

 
}


let cat1 = new Cat ('First', 'CatClicker.png') ;
let cat2 = new Cat ('Second', 'CatClicker1.png') ;
let cat3 = new Cat ('Third', 'Merci.jpg') ;
let cat4 = new Cat ('Fourth', 'CatClicker4.jpg') ;
let cat5 = new Cat ('Fifth', 'CatClicker3.jpg') ;

   

   