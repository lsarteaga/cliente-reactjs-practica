import axios from "axios";
const API_URL = "http://localhost:8080/api/v1/students";

class StudentService {
  getStudents() {
    return axios.get(API_URL);
  }

  saveStudent(student) {
    return axios.post(API_URL.concat("/create"), student);
  }

  getStudentById(id) {
    return axios.get(API_URL.concat(`/${id}/find`));
  }

  updateStudent(student, id) {
    return axios.put(API_URL.concat(`/${id}/update`), student);
  }

  deleteStudent(id) {
    return axios.delete(API_URL.concat(`/${id}/delete`));
  }
}

export default new StudentService();
