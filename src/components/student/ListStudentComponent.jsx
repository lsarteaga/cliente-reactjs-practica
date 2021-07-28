import React, { Component } from "react";
import StudentService from "../../services/StudentService";

class ListStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };

    this.addStudent = this.addStudent.bind(this);
    this.editStudent = this.editStudent.bind(this);
    this.viewStudent = this.viewStudent.bind(this);
  }

  componentDidMount() {
    StudentService.getStudents().then((res) => {
      console.log(res);
      this.setState({ students: res.data });
    });
  }

  addStudent() {
    this.props.history.push("/alumnos/_add");
  }

  editStudent(id) {
    this.props.history.push(`/alumnos/${id}`);
  }

  deleteStudent(id) {
    StudentService.deleteStudent(id).then((res) => {
      this.setState({
        students: this.state.students.filter((student) => student.id !== id),
      });
    });
  }

  viewStudent(id) {
    this.props.history.push(`/alumnos-ver/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center mt-5">Lista de Alumnos</h2>
        <div className="row">
          <button
            className="btn btn-primary my-3"
            onClick={this.addStudent}
            style={{ width: "15%" }}
          >
            Crear Alumno
          </button>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cedula</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.ci}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      style={{ marginRight: "10px", width: "25%" }}
                      onClick={() => this.viewStudent(student.id)}
                    >
                      Ver
                    </button>
                    <button
                      className="btn btn-warning"
                      style={{ marginRight: "10px", width: "25%" }}
                      onClick={() => this.editStudent(student.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ width: "25%" }}
                      onClick={() => this.deleteStudent(student.id)}
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
    );
  }
}

export default ListStudentComponent;
