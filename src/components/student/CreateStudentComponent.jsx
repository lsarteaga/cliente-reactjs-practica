import React, { Component } from "react";
import StudentService from "../../services/StudentService";

class CreateStudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      ci: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeCiHandler = this.changeCiHandler.bind(this);
    this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    this.getTitle = this.getTitle.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      StudentService.getStudentById(this.state.id).then((res) => {
        let student = res.data;
        this.setState({ name: student.name, ci: student.ci });
      });
    }
  }

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeCiHandler = (event) => {
    this.setState({ ci: event.target.value });
  };

  saveOrUpdateStudent = (e) => {
    e.preventDefault();
    let student = { name: this.state.name, ci: this.state.ci };
    console.log("alumno => " + JSON.stringify(student));

    if (this.state.id === "_add") {
      StudentService.saveStudent(student).then((res) => {
        this.props.history.push("/alumnos");
      });
    } else {
      StudentService.updateStudent(student, this.state.id).then((res) => {
        this.props.history.push("/alumnos");
      });
    }
  };

  cancel() {
    this.props.history.push("/alumnos");
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
                    <label>CI: </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="CI"
                      value={this.state.ci}
                      onChange={this.changeCiHandler}
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

export default CreateStudentComponent;
