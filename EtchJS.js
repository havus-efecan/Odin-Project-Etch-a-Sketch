    
    let mouseDown = 0;
    let colorSelected = false;
    colorRandom = true;

    document.body.onmousedown = function() { 
        ++mouseDown;
      }
      document.body.onmouseup = function() {
        --mouseDown;
      }

    let size = 16

    let newButton = document.createElement('button');

    let outerBox

    let mainDiv = document.createElement('div');
    document.body.appendChild(mainDiv);
    mainDiv.classList.add('mainDiv')

    let sideBar = document.createElement('div')

    
    newButton.addEventListener('click',function(){

        size = prompt("Enter a size")
    
        outerBox.remove();
        drawGrid();
    
    
    
    })

    newButton.addEventListener('onmouseover',function(){

      //  newButton.style.backgroundColor = 'red'
    
    
    
    })



    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    drawSideBar()
    drawGrid();

    function drawSideBar(){

        sideBar.classList.add('sideBar')
        mainDiv.appendChild(sideBar)

        sideBar.appendChild(newButton);
        newButton.classList.add('button')
        newButton.innerText = "New grid"

        let colorContainer = document.createElement('div')
        sideBar.appendChild(colorContainer)
        colorContainer.classList.add('colorContainer')

        let redButton = document.createElement('button');
        let blueButton = document.createElement('button');
        let greenButton = document.createElement('button');
        let yellowButton = document.createElement('button');



        colorContainer.appendChild(redButton);
        redButton.classList.add('button')
        redButton.classList.add('red')


        colorContainer.appendChild(blueButton);
        blueButton.classList.add('button')
        blueButton.classList.add('blue')


        colorContainer.appendChild(greenButton);
        greenButton.classList.add('button')
        greenButton.classList.add('green')


        colorContainer.appendChild(yellowButton);
        yellowButton.classList.add('button')
        yellowButton.classList.add('yellow')

    }

    function drawGrid(){
        

      

        outerBox = document.createElement('div');
        mainDiv.appendChild(outerBox);
       




        for (j = 0; j < size; j++){


            let box = document.createElement('div');
            box.classList.add('box')
            outerBox.appendChild(box);
    
    
            for (i = 0; i < size; i++){
    
    
                let square = document.createElement('div')
             
             
                square.classList.add('square1')
             
                box.appendChild(square)
            
            
            
            }
    
    
    
    
    
        }


        let squareArray = document.getElementsByClassName('square1')

 


        for(x = 0; x < squareArray.length;x++){
   
   
        squareArray[x].addEventListener('mouseover',hover)
   
        }




      }
    

    

     

   function hover(){

        

    //   this.classList.add('highlighted')

        if (colorRandom === false) {

            this.style.backgroundColor = color

        } else {

            this.style.backgroundColor = getRandomColor();


        }


   }
  

  