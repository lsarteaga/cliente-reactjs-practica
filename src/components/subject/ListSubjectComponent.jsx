import React, { Component } from "react";
import SubjectService from "../../services/SubjectService";

class ListSubjectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
    };
    this.editSubject = this.editSubject.bind(this);
    this.deleteSubject = this.deleteSubject.bind(this);
    this.addSubject = this.addSubject.bind(this);
  }

  componentDidMount() {
    SubjectService.getSubjects().then((res) => {
      console.log(res);
      this.setState({ subjects: res.data });
    });
  }

  addSubject() {
    this.props.history.push("/materias/_add");
  }

  editSubject(id) {
    this.props.history.push(`/materias/${id}`);
  }

  deleteSubject(id) {
    SubjectService.deleteSubject(id).then((res) => {
      this.setState({
        subjects: this.state.subjects.filter((subject) => subject.id !== id),
      });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center my-5">Lista de Materias</h2>
        <div className="row">
          <button
            className="btn btn-primary mb-3"
            onClick={this.addSubject}
            style={{ width: "15%" }}
          >
            Crear Materia
          </button>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Nrc</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.subjects.map((subject) => (
                <tr key={subject.id}>
                  <td>{subject.name}</td>
                  <td>{subject.nrc}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      style={{ marginRight: "10px", width: "25%" }}
                      onClick={() => this.editSubject(subject.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ width: "25%" }}
                      onClick={() => this.deleteSubject(subject.id)}
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

export default ListSubjectComponent;
