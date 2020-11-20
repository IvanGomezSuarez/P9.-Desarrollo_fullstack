    //canvas
    function iniciar(){
        var elemento=document.getElementById("lienzo");
        lienzo=elemento.getContext("2d");
        
        lienzo.strokeRect(10,10,820,820);
        lienzo.strokeRect(20,20,800,800);

        
        var c=20;
       
        for(i=1;i<5;i++){
          lienzo.fillRect(20,c,100,100);
          lienzo.clearRect(120,c,100,100);
          lienzo.fillRect(220,c,100,100);
          lienzo.clearRect(320,c,100,100);
          lienzo.fillRect(420,c,100,100);
          lienzo.clearRect(520,c,100,100);
          lienzo.fillRect(620,c,100,100);
          lienzo.clearRect(720,c,100,100);
          
          c=c+100;
          
          lienzo.clearRect(20,c,100,100);
          lienzo.fillRect(120,c,100,100);
          lienzo.clearRect(220,c,100,100);  
          lienzo.fillRect(320,c,100,100);
          lienzo.clearRect(420,c,100,100);  
          lienzo.fillRect(520,c,100,100);
          lienzo.clearRect(620,c,100,100);  
          lienzo.fillRect(720,c,100,100);
          
          c=c+100;
        }
        /*
        lienzo.fillRect(20,20,100,100);
        lienzo.clearRect(120,20,100,100);
        lienzo.fillRect(220,20,100,100);
        lienzo.clearRect(320,20,100,100);
        lienzo.fillRect(420,20,100,100);
        lienzo.clearRect(520,20,100,100);
        lienzo.fillRect(620,20,100,100);
        lienzo.clearRect(720,20,100,100);
        
        lienzo.clearRect(20,120,100,100);
        lienzo.fillRect(120,120,100,100);
        lienzo.clearRect(220,120,100,100);  
        lienzo.fillRect(320,120,100,100);
        lienzo.clearRect(420,120,100,100);  
        lienzo.fillRect(520,120,100,100);
        lienzo.clearRect(620,120,100,100);  
        lienzo.fillRect(720,120,100,100);
        
        lienzo.fillRect(20,220,100,100);
        lienzo.clearRect(120,220,100,100);
        lienzo.fillRect(220,220,100,100);
        lienzo.clearRect(320,220,100,100);
        lienzo.fillRect(420,220,100,100);
        lienzo.clearRect(520,220,100,100);
        lienzo.fillRect(620,220,100,100);
        lienzo.clearRect(720,220,100,100);
        
        lienzo.clearRect(20,320,100,100);
        lienzo.fillRect(120,320,100,100);
        lienzo.clearRect(220,320,100,100);  
        lienzo.fillRect(320,320,100,100);
        lienzo.clearRect(420,320,100,100);  
        lienzo.fillRect(520,320,100,100);
        lienzo.clearRect(620,320,100,100);  
        lienzo.fillRect(720,320,100,100);
        
        lienzo.fillRect(20,420,100,100);
        lienzo.clearRect(120,420,100,100);
        lienzo.fillRect(220,420,100,100);
        lienzo.clearRect(320,420,100,100);
        lienzo.fillRect(420,420,100,100);
        lienzo.clearRect(520,420,100,100);
        lienzo.fillRect(620,420,100,100);
        lienzo.clearRect(720,420,100,100);
        
        lienzo.clearRect(20,520,100,100);
        lienzo.fillRect(120,520,100,100);
        lienzo.clearRect(220,520,100,100);  
        lienzo.fillRect(320,520,100,100);
        lienzo.clearRect(420,520,100,100);  
        lienzo.fillRect(520,520,100,100);
        lienzo.clearRect(620,520,100,100);  
        lienzo.fillRect(720,520,100,100);
        
        lienzo.fillRect(20,620,100,100);
        lienzo.clearRect(120,620,100,100);
        lienzo.fillRect(220,620,100,100);
        lienzo.clearRect(320,620,100,100);
        lienzo.fillRect(420,620,100,100);
        lienzo.clearRect(520,620,100,100);
        lienzo.fillRect(620,620,100,100);
        lienzo.clearRect(720,620,100,100);
        
        lienzo.clearRect(20,720,100,100);
        lienzo.fillRect(120,720,100,100);
        lienzo.clearRect(220,720,100,100);  
        lienzo.fillRect(320,720,100,100);
        lienzo.clearRect(420,720,100,100);  
        lienzo.fillRect(520,720,100,100);
        lienzo.clearRect(620,720,100,100);  
        lienzo.fillRect(720,720,100,100);*/
      }
      
      window.addEventListener("load",iniciar,false);
 
 
    /*   function iniciaCanvas(idCanvas){
        var elemento = document.getElementById(idCanvas);
        if (elemento &&  elemento.getContext){
            var contexto = elemento.getContext('2d');
            if (contexto) {
               return contexto;
               }
            }
            return false;
        }


    window.onload=function() {
        cxt=iniciaCanvas("ejemplo1")
        var x=0; //posición inicial primera celda: coord. X
        var y=0; //posición inicial primera celda: coord Y
        var r=30; //radio de circunferencias 
        var ini=0; //inicio arco circunferencias
        var fin=2*Math.PI; //final arco circunferencias
        //array de valores de globalCompositeOperation.
        var valor=new Array();
        valor[0]="source-over";
        valor[1]="destination-over";
        valor[2]="source-in";
        valor[3]="destination-in";
        valor[4]="source-out";
        valor[5]="destination-out";
        valor[6]="source-atop";
        valor[7]="destination-atop";
        valor[8]="lighter";
        valor[9]="daker";
        valor[10]="xor";
        valor[11]="copy";
        //bucle ; diferentes celdas para distintos valores:
        for (i=0; i<valor.length; i++) {
            //Valores de coordenadas de elementos dentro de la celda:
            w=x+100; //ancho de celda
            h=y+100; //alto de celda
            rx1=x+35; //centro del círculo rojo, coord. X
            ry1=y+35; //centro del círculo rojo, coord. Y
            rx2=x+65; //centro del círculo verde, coord. X
            ry2=y+35; //centro del círculo verde, coord. Y
            tx=x+10; //inicio de texto explicativo, coord X
            ty=y+85; //inicio de texto explicativo, coord Y
            //Dibujar celda: 
            cxt.beginPath(); //iniciar ruta
            cxt.moveTo(x,y); //punto inicial;
            cxt.lineTo(w,y); //línea superior
            cxt.lineTo(w,h); //línea derecha
            cxt.lineTo(x,h); //linea inferior
            cxt.closePath(); //cerrar camino: línea izquierda.
            cxt.stroke(); //dibujo de líneas;
            //crear región de ajuste y dibujar en ella dos círculos:
            cxt.save(); //guardar estado del canvas
            cxt.clip(); //entrar en nueva región de ajuste.
            cxt.beginPath(); //nueva ruta: círculo rojo.
            cxt.fillStyle="red"; //color relleno, rojo
            cxt.arc(rx1,ry1,r,ini,fin); //definir círculo
            cxt.fill(); //rellenar de color
            //aplicar operación de composición: según valor del array.
            cxt.globalCompositeOperation=valor[i]; 
            cxt.beginPath(); //nueva ruta: círculo verde
            cxt.fillStyle="green"; //color relleno, verde.
            cxt.arc(rx2,ry2,r,ini,fin); //definir ciírculo
            cxt.fill(); //rellenar de color
            //volver a estado anterior y salir de región de ajuste.
            cxt.restore(); 
            //texto explicativo debajo del dibujo:
            cxt.font="normal 11px arial"; //estilo de texto
            num=i+1; //número de celda.
            cxt.fillText(num+". "+valor[i],tx,ty); //texto: núm de celda + valor propiedad.
            //preparar la siguiente celda.
            x+=100; //añadir una celda horizontal a la derecha.
            if (x>=200) { //cada 2 celdas horizontales pasamos a siguiente línea vertical
                x=0; //valor para nueva línea de celdas coord.X
                y+=90; //valor para nueva línea de celdas coord.Y
                }
            }
        }*/

    
