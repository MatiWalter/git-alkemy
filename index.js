import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

for (let i = 0; i < boton.length; i++){
  boton[i].onclick = function (){mostrar(this.innerHTML)};
}

function mostrar(param) {
 //alert('el color es: '+ param); 
 document.getElementById('container').innerHTML = 'el color es: '+ param ;
 switch (param) {
     case 'azul':
         document.getElementById('container').style.backgroundColor = 'blue';
         document.getElementById('container').style.color = 'white';
         break;
         case 'rojo':
          document.getElementById('container').style.backgroundColor = 'red';
          document.getElementById('container').style.color = 'white';
          break;
          case 'verde':
              document.getElementById('container').style.backgroundColor = 'green';
              document.getElementById('container').style.color = 'white';
              break;
         
     default:
      document.getElementById('container').style.backgroundColor = 'pink';
      document.getElementById('container').style.color = 'black';
         break;
 }
}


