
    let size = 16




    
    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    



    for (j = 0; j < size; j++){


        let box = document.createElement('div');
        box.classList.add('box')
        document.body.appendChild(box);


        for (i = 0; i < size; i++){


            let square = document.createElement('div')
         
         
            square.classList.add('square1')
         
            box.appendChild(square)
        
        
        
        }





    }

    let squareArray = document.getElementsByClassName('square1')

    // squareArray[0].addEventListener('mouseover',hover)
    // squareArray[0].addEventListener('mouseout',unHover)


     for(x = 0; x < squareArray.length;x++){


     squareArray[x].addEventListener('mouseover',hover)
   // squareArray[x].addEventListener('mouseout',unHover)

     }

      squareArray.item(0)
     

   function hover(){

        
    //   this.classList.add('highlighted')
       this.style.backgroundColor = getRandomColor();

   }
  
   function unHover(){

        
   // this.classList.remove('highlighted')



}

