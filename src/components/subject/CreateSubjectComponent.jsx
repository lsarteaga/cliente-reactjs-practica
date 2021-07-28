import React, { Component } from "react";
import SubjectService from "../../services/SubjectService";

class CreateSubjectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      nrc: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeNrcHandler = this.changeNrcHandler.bind(this);
    this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    this.getTitle = this.getTitle.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      SubjectService.getSubjectById(this.state.id).then((res) => {
        let subject = res.data;
        this.setState({ name: subject.name, nrc: subject.nrc });
      });
    }
  }

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeNrcHandler = (event) => {
    this.setState({ nrc: event.target.value });
  };

  saveOrUpdateStudent = (e) => {
    e.preventDefault();
    let subject = { name: this.state.name, nrc: this.state.nrc };
    console.log("materia => " + JSON.stringify(subject));

    if (this.state.id === "_add") {
      SubjectService.saveSubject(subject).then((res) => {
        this.props.history.push("/materias");
      });
    } else {
      SubjectService.updateSubject(subject, this.state.id).then((res) => {
        this.props.history.push("/materias");
      });
    }
  };

  cancel() {
    this.props.history.push("/materias");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Formulario de creaci&oacute;n</h3>;
    } else {
      return <h3 className="text-center">Formulario de edici&oacute;n</h3>;
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3 my-5">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Nombre: </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="nombre"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>NRC: </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="NRC"
                      value={this.state.nrc}
                      onChange={this.changeNrcHandler}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-success my-3"
                      onClick={this.saveOrUpdateStudent}
                      style={{ width: "25%" }}
                    >
                      Guardar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px", width: "25%" }}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateSubjectComponent;
