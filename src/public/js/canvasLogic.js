//canvas
function iniciar(){
  var elem = document.getElementById('canvas'),
  elemLeft = elem.offsetLeft,
  elemTop = elem.offsetTop,
  context = elem.getContext('2d'),
  elements = [];
  //var prueba = elem.removeEventListener('click', pulsaCelda,false);

  // if(prueba){
  //   console.log("se queta el evento");
  // }else{
  //   console.log("no se ha podido quitar");
  // }

  function Tile(x, y, width, height, id, fillColor, strokeStyle) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fillColor = fillColor;
    this.strokeStyle = 'black';
  }


  function createTiles(quantityX, quantityY) {
    var quantityAll = quantityX * quantityY;
    var tileWidth = elem.width / quantityX;
    var tileHeight = elem.height / quantityY;

    var drawPosition = {
      x: 0,
      y: 0
    }

    for (var i = 0; i < quantityAll; i++) {
      var fillColor = 'white';
      var tile = new Tile(drawPosition.x, drawPosition.y, tileWidth, tileHeight, i, fillColor);
      elements.push(tile);

      drawPosition.x = drawPosition.x + tileWidth;
      if (drawPosition.x >= elem.width) {
        drawPosition.x = 0;
        drawPosition.y = drawPosition.y + tileHeight;
      }
    }

  }

  createTiles(8, 8);

// Add element.
// elements.push({
//   colour: '#05EFFF',
//   width: 150,
//   height: 100,
//   top: 0,
//   left: 0,
//   },
//   {
//   colour: '#05EFFF',
//   width: 150,
//   height: 100,
//   top: 20,
//   left: 170
// });


function pulsaCelda(event){
  //elem.removeEventListener('click');
  let y = event.pageX - elemLeft,
      x = event.pageY - elemTop;
  //console.log(x, y);  
  elements.forEach(function(element) {
      if (y > element.x && y < element.x + element.height && x > element.y && x < element.y + element.width) {
          let id = 1;
          id = element.id;
          console.log(`La casilla es la número: ${id}`);
      }
  });

}

elem.addEventListener('click', pulsaCelda,false);


// Add event listener for `click` events.
  // elem.addEventListener('click', function(event) {
  //   //elem.removeEventListener('click', function, true);
  //   var y = event.pageX - elemLeft,
  //       x = event.pageY - elemTop;
  //   //console.log(x, y);
    
  //   elements.forEach(function(element) {
  //       if (y > element.x && y < element.x + element.height && x > element.y && x < element.y + element.width) {
  //           var id = element.id;
  //           console.log(`La casilla es la número: ${id}`);
  //       }
  //   });

  // }, false);


// Render elements.
  function drawTiles() {
    elements.forEach(function(element) {
      context.beginPath();
      context.fillStyle = element.fillColor;
      context.rect(element.x, element.y, element.width, element.height);
      context.lineWidth = "2";
      context.strokeStyle = element.strokeStyle;
      context.stroke();
      context.fill();
  });

}
drawTiles();
}

window.addEventListener("load", iniciar, false);


























































































































































































































































































































































































