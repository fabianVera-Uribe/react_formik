import "../App.css";

const Formulario = () => {
  function validacion() {
    const $boxes = document.querySelectorAll(".box");
    const $input = document.querySelectorAll(".input");

    if ($boxes.checked) {
      alert("hola");
    }
  }

  return (
    <form className="formulario">
      <div>
        <input
          id="nombre"
          className="input formulario__input"
          type="text"
          placeholder="Nombre"
        />
      </div>
      <div>
        <input
          id="email"
          className="input formulario__input"
          type="email"
          placeholder="Email"
        />
      </div>

      <h3 className="formulario__titulo">¿Qué lenguajes manejas?</h3>
      <div className="formulario__checkbox">
        <div>
          <label className="formulario__label" for="box1">
            HTML & CSS
          </label>
          <input id="box1" className="box formulario__input" type="checkbox" />
        </div>
        <div>
          <label className="formulario__label" for="box2">
            Javascript
          </label>
          <input id="box2" className="box formulario__input" type="checkbox" />
        </div>
        <div>
          <label className="formulario__label" for="box3">
            Python
          </label>
          <input id="box3" className="box formulario__input" type="checkbox" />
        </div>
        <div>
          <label className="formulario__label" for="box4">
            C++ / C#
          </label>
          <input id="box4" className="box formulario__input" type="checkbox" />
        </div>
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            validacion();
          }}
          className="linkBtn submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
