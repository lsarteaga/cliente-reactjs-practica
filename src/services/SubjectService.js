import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/subjects";

class SubjectService {
  getSubjects() {
    return axios.get(API_URL);
  }

  saveSubject(subject) {
    return axios.post(API_URL.concat("/create"), subject);
  }

  getSubjectById(id) {
    return axios.get(API_URL.concat(`/${id}/find`));
  }

  updateSubject(subject, id) {
    return axios.put(API_URL.concat(`/${id}/update`), subject);
  }

  deleteSubject(id) {
    return axios.delete(API_URL.concat(`/${id}/delete`));
  }
}

export default new SubjectService();
