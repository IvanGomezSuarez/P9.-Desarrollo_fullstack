//canvas
// function iniciar() {



//   var canvas_element = document.getElementById('canvas');
//   var context = canvas_element.getContext('2d');

//   var tiles_array = [];

//   function Tile(x, y, width, height, id, fillColor, strokeStyle) {
//     this.id = id;
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.workWidth = {
//       start: x,
//       end: x + width
//     }
//     this.workHeight = {
//       start: y,
//       end: y + height
//     }
//     this.fillColor = fillColor;
//     this.strokeStyle = 'black';
//   }

//   //var tile = new Tile(0, 0, 200, 150)

//   canvas_element.onclick = function (e) {
//     event = e;
//     //checkClick(event);
//     var elementClickedId = checkClick(event);
//     console.log(`You click element with number ${elementClickedId}`);
//     tiles_array[elementClickedId].fillColor = 'blue';
//     drawTiles();
//   }

//   canvas_element.onmousemove = function (e) {
//     var elementUnder = checkClick(event);
//     if (elementUnder == 1) {
//       changeCursor('pointer');
//     } else {
//       changeCursor('default');
//     }
//   }

//   canvas_element.onmouseout = function (e) {
//     changeCursor('default');
//   }


//   //context.fillRect(tile.x, tile.y, tile.width, tile.height);

//   function checkClick(event) {
//     var clickX = event.layerX;
//     var clickY = event.layerY;

//     var element;

//     tiles_array.forEach(function (tile, i, arr) {
//       if (
//         clickX > tile.workWidth.start &&
//         clickX < tile.workWidth.end &&
//         clickY > tile.workHeight.start &&
//         clickY < tile.workHeight.end
//       ) {
//         element = tile.id;
//       }
//     });
//     return element;
//   }

//   // Create Tiles
//   function createTiles(quantityX, quantityY) {
//     var quantityAll = quantityX * quantityY;
//     var tileWidth = canvas_element.width / quantityX;
//     var tileHeight = canvas_element.height / quantityY;

//     var drawPosition = {
//       x: 0,
//       y: 0
//     }

//     for (var i = 0; i < quantityAll; i++) {
//       var fillColor = 'white';
//       var tile = new Tile(drawPosition.x, drawPosition.y, tileWidth, tileHeight, i, fillColor);
//       tiles_array.push(tile);

//       drawPosition.x = drawPosition.x + tileWidth;
//       if (drawPosition.x >= canvas_element.width) {
//         drawPosition.x = 0;
//         drawPosition.y = drawPosition.y + tileHeight;
//       }
//     }

//   }

//   createTiles(8, 8);


//   function drawTiles() {
//     tiles_array.forEach(function (tile, i, arr) {
//       context.beginPath()

//       context.fillStyle = tile.fillColor;
//       context.rect(tile.x, tile.y, tile.width, tile.height);

//       context.lineWidth = "2";
//       context.strokeStyle = tile.strokeStyle;
//       context.stroke()

//       context.fill();
//     });
//   }

//   drawTiles();


//   /*function getRandomColor() {
//       var letters = '0123456789ABCDEF';
//       var color = '#';
//       for (var i = 0; i < 6; i++ ) {
//           color += letters[Math.floor(Math.random() * 16)];
//       }
//       return color;
//   }*/



//   function changeCursor(cursorType) {
//     document.body.style.cursor = cursorType;
//   }

// }

function iniciar(){
  var elem = document.getElementById('canvas'),
  elemLeft = elem.offsetLeft,
  elemTop = elem.offsetTop,
  context = elem.getContext('2d'),
  elements = [];

    function Tile(x, y, width, height, id, fillColor, strokeStyle) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // this.workWidth = {
    //   start: x,
    //   end: x + width
    // }
    // this.workHeight = {
    //   start: y,
    //   end: y + height
    // }
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
      console.log(tile);
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

// Render elements.

// Add event listener for `click` events.
elem.addEventListener('click', function(event) {
  var x = event.pageX - elemLeft,
      y = event.pageY - elemTop;
  //console.log(x, y);
  
elements.forEach(function(element) {
      if (y > element.x && y < element.x + element.height && x > element.y && x < element.y + element.width) {
          //alert('clicked an element');
          //console.log(event.button);
          //console.log("CLUCK!!!");
          console.log(element.id);
      }
  });

}, false);

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

//       context.beginPath()

//       context.fillStyle = tile.fillColor;
//       context.rect(tile.x, tile.y, tile.width, tile.height);

//       context.lineWidth = "2";
//       context.strokeStyle = tile.strokeStyle;
//       context.stroke()

//       context.fill();



window.addEventListener("load", iniciar, false);


























































































































































































































































































































































































