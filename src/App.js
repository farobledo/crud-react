
import './App.css';

import Listar from "./components/Listar";

import Crear from "./components/Crear";

import Editar from "./components/Editar";

import { Route, BrowserRouter as Router } from "react-router-dom";

import { Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active text-primary" to={"/"}><h1>Sistema</h1> <span className="visually-hidden">(current)</span></Link>
             
          </div>
      </nav>

      <div className="container">
        <br></br>
    
  <Route  exact path="/" component={Listar} ></Route>
  <Route  path="/crear" component={Crear} ></Route>
  <Route  path="/editar/:id" component={Editar} ></Route>

    </div>
</Router>
  );
}

export default App;
