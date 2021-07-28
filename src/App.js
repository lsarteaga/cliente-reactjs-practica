import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListStudentComponent from "./components/student/ListStudentComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateStudentComponent from "./components/student/CreateStudentComponent";
import ViewStudentComponent from "./components/student/ViewStudentComponent";
import ListSubjectComponent from "./components/subject/ListSubjectComponent";
import CreateSubjectComponent from "./components/subject/CreateSubjectComponent";
import ListGradeComponent from "./components/grade/ListGradeComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListStudentComponent}></Route>
            <Route
              path="/alumnos"
              exact
              component={ListStudentComponent}
            ></Route>
            <Route
              path="/alumnos/:id"
              exact
              component={CreateStudentComponent}
            ></Route>
            <Route
              path="/alumnos-ver/:id"
              exact
              component={ViewStudentComponent}
            ></Route>
            <Route
              path="/materias"
              exact
              component={ListSubjectComponent}
            ></Route>
            <Route
              path="/materias/:id"
              exact
              component={CreateSubjectComponent}
            ></Route>
            <Route path="/notas" exact component={ListGradeComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
