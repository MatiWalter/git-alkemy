import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import { Login } from './Login';

ReactDOM.render(
  <React.StrictMode>
    <AlkemyApp />
  </React.StrictMode>,
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


const AlkemyApp = () => {

  use

  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
