import React, { Component } from "react";
import StudentService from "../../services/StudentService";
import SubjectService from "../../services/SubjectService";
import GradeService from "../../services/GradeService";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

class ListGradeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstGrade: null,
      secondGrade: null,
      thirdGrade: null,
      selectedStudent: {},
      selectedSubject: {},
      students: [],
      subjects: [],
    };

    this.changeFirstGrade = this.changeFirstGrade.bind(this);
    this.changeSecondGrade = this.changeSecondGrade.bind(this);
    this.changeThirdGrade = this.changeThirdGrade.bind(this);
    this.saveStudentGrade = this.saveStudentGrade.bind(this);
  }

  componentDidMount() {
    StudentService.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
    SubjectService.getSubjects().then((res) => {
      this.setState({ subjects: res.data });
    });
  }

  changeFirstGrade = (event) => {
    this.setState({ firstGrade: event.target.value });
  };

  changeSecondGrade = (event) => {
    this.setState({ secondGrade: event.target.value });
  };

  changeThirdGrade = (event) => {
    this.setState({ thirdGrade: event.target.value });
  };

  changeStudentCombo(newValue) {
    this.setState({ selectedStudent: newValue });
  }

  changeSubjectCombo(newValue) {
    this.setState({ selectedSubject: newValue });
  }

  saveStudentGrade = (e) => {
    e.preventDefault();
    let grade = {
      firstGrade: this.state.firstGrade,
      secondGrade: this.state.secondGrade,
      thirdGrade: this.state.thirdGrade,
      student: this.state.selectedStudent,
      subject: this.state.selectedSubject,
    };
    console.log("alumno => " + JSON.stringify(grade));

    GradeService.saveGrade(grade).then((res) => {
      this.props.history.push("/alumnos");
    });
  };

  render() {
    return (
      <div>
        <div className="row my-5">
          <div className="col-4">
            <h4>Alumnos</h4>
            <div className="my-3">
              <Autocomplete
                id="combo-box-student"
                options={this.state.students}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Listado de alumnos"
                    variant="outlined"
                  />
                )}
                onChange={(event, newValue) => {
                  this.changeStudentCombo(newValue);
                }}
              />
            </div>
          </div>
          <div className="col-4">
            <h4>Materias</h4>
            <div className="my-3">
              <Autocomplete
                id="combo-box-subject"
                options={this.state.subjects}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Listado de materias"
                    variant="outlined"
                  />
                )}
                onChange={(event, newValue) => {
                  this.changeSubjectCombo(newValue);
                }}
              />
            </div>
          </div>
          <div className="col-4">
            <h4>Registro de notas</h4>
            <form className="my-3">
              <div className="form-group">
                <label>Nota 1</label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  className="form-control"
                  id="firstGrade"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese la calificación"
                  onChange={this.changeFirstGrade}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Las calificaciones deben estar entre 0 y 20.
                </small>
              </div>
              <div className="form-group">
                <label>Nota 2</label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  className="form-control"
                  id="secondGrade"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese la calificación"
                  onChange={this.changeSecondGrade}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Las calificaciones deben estar entre 0 y 20.
                </small>
              </div>
              <div className="form-group">
                <label>Nota 3</label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  className="form-control"
                  id="thirdGrade"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese la calificación"
                  onChange={this.changeThirdGrade}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Las calificaciones deben estar entre 0 y 20.
                </small>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success mt-3"
                  onClick={this.saveStudentGrade}
                  style={{ width: "50%" }}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ListGradeComponent;
