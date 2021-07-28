import axios from "axios";
const API_URL = "http://localhost:8080/api/v1/grades";

class GradeService {
  getStudentGrades(id) {
    return axios.get(API_URL.concat(`/${id}/student`));
  }

  saveGrade(grade) {
    return axios.post(API_URL.concat("/create"), grade);
  }

  updateGrade(grade, id) {
    return axios.put(API_URL.concat(`/${id}/update`), grade);
  }

  deleteGrade(id) {
    return axios.delete(API_URL.concat(`/${id}/delete`));
  }
}

export default new GradeService();
