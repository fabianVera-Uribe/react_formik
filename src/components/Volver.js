import { Link, Route } from "wouter";
import App from "../App";

export default function Volver() {
  return (
    <div>
      <Link href="/">
        <a className="linkBtn volver"> &larr; Regresar</a>
      </Link>
      <Route path="/" component={App} />
    </div>
  );
}
