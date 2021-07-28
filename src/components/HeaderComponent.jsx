import React, { Component } from "react";
import logo from "../logo.svg";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="/" className="navbar-brand">
                <img
                  src={logo}
                  alt=""
                  className="d-inline-block align-top"
                  width="30"
                  height="30"
                />
                Aplicaciones Distribuidas
              </a>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/alumnos">
                    Alumnos <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/materias">
                    Materias
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/notas">
                    Calificaciones
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
