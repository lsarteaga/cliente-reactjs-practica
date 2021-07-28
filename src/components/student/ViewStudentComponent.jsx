import React, { Component } from "react";
import StudentService from "../../services/StudentService";
import GradeService from "../../services/GradeService";

class ViewStudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      student: {},
      grades: [],
    };

    this.deleteGrade = this.deleteGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);
  }

  componentDidMount() {
    StudentService.getStudentById(this.state.id).then((res) => {
      this.setState({ student: res.data });
    });

    GradeService.getStudentGrades(this.state.id).then((res) => {
      this.setState({ grades: res.data });
    });
  }

  deleteGrade(id) {
    GradeService.deleteGrade(id).then((res) => {
      this.setState({
        grades: this.state.grades.filter((grade) => grade.id !== id),
      });
    });
  }

  addGrade() {
    this.props.history.push("/notas");
  }

  render() {
    return (
      <div>
        <div className="row my-5">
          <div className="col">
            <div className="card">
              <div class="card-body">
                <h5 class="card-title">Detalle de Alumno</h5>
                <p class="card-text">Nombre: {this.state.student.name}</p>
                <p class="card-text">C.I: {this.state.student.ci}</p>
                <div className="py-4">
                  <h5 className="d-inline mr-4">Calificaciones</h5>
                  <button
                    className="btn btn-primary"
                    style={{ float: "right", width: "20%" }}
                    onClick={this.addGrade}
                  >
                    Agregar calificación
                  </button>
                </div>
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Materia</th>
                      <th>Nota 1</th>
                      <th>Nota 2</th>
                      <th>Nota 3</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.grades.map((grade) => (
                      <tr key={grade.id}>
                        <td>{grade.subject.name}</td>
                        <td>{grade.firstGrade}</td>
                        <td>{grade.secondGrade}</td>
                        <td>{grade.thirdGrade}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            style={{ width: "60%" }}
                            onClick={() => this.deleteGrade(grade.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewStudentComponent;
