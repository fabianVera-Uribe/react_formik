import "../App.css";
import { Link, Route } from "wouter";
import Formulario from "./Formulario";
import Volver from "./Volver";
export default function Presentacion() {
  return (
    <div>
      <h1 className="postulacion__titulo">¿Estás buscando trabajo?</h1>
      <Link href="/postulacion">
        <a className="linkBtn">Postula !</a>
      </Link>

      <Route path="/postulacion" className="App">
        <Formulario />
        <Volver />
      </Route>
    </div>
  );
}
