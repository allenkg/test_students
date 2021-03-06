export default class Api {

  getStudents() {
    return new Promise((resolve, reject) => {
      let url = `/api/students`;
      const data = this.makeRequest('GET', url);
      resolve(data)
    })
  }

  getStudent(student_id) {
    return new Promise((resolve, reject) => {
      let url = `/api/student/${student_id}`;
      const data = this.makeRequest('GET', url);
      resolve(data)
    })
  }

  getCourseStudents(course_id) {
    return new Promise((resolve, reject) => {
      let url = `/api/courses?course_id=${course_id}`;
      const data = this.makeRequest('GET', url);
      resolve(data)
    })
  }

  removeStudent(course_id, student_id) {
    return new Promise((resolve, reject) => {
      let url = `/api/student/${student_id}?course_id=${course_id}`;
      const data = this.makeRequest('DELETE', url);
      resolve(data)
    })
  }

  searchStudent(search_query) {
    return new Promise((resolve, reject) => {
      let url = `/api/students?search_query=${search_query}`;
      const data = this.makeRequest('GET', url);
      resolve(data)
    })
  }

  getCourse(course_id) {
    return new Promise((resolve, reject) => {
      let url = `/api/course/${course_id}`;
      const data = this.makeRequest('GET', url);
      resolve(data)
    })
  }

  searchCourse(search_query) {
    return new Promise((resolve, reject) => {
      let url = `/api/courses?search_query=${search_query}`;
      const data = this.makeRequest('GET', url);
      resolve(data)
    })
  }

  updateStudent(payload) {
    return new Promise((resolve, reject) => {
      const student_id = payload.student_id;
      let url = `/api/student/${student_id}`;
      const data = this.makeMultipartRequest('PUT', url, payload);
      resolve(data)
    })
  }

  updateCourse(payload) {
    return new Promise((resolve, reject) => {
      const course_id = payload.course_id;
      let url = `/api/course/${course_id}`;
      const data = this.makeMultipartRequest('PUT', url, payload);
      resolve(data)
    })
  }

  createStudent(payload) {
    return new Promise((resolve, reject) => {
      let url = `/api/add-student`;
      const data = this.makeMultipartRequest('POST', url, payload);
      resolve(data)
    })
  }
  createCourse(payload) {
    return new Promise((resolve, reject) => {
      let url = `/api/add-course`;
      const data = this.makeMultipartRequest('POST', url, payload);
      resolve(data)
    })
  }

  getCourses(offset, page_number) {
    return new Promise((resolve, reject) => {
      let url = `/api/courses${offset ? `?offset=${offset}&page_number=${page_number}`: ''}`;
      const data = this.makeRequest('GET', url);
      resolve(data)
    })
  }

  makeMultipartRequest(method, url, data = null) {
    const formData = Object.keys(data).reduce((acc, dataKey) => {
      let value = data[dataKey];
      const formDataKey = value instanceof Array ? `${dataKey}[]` : dataKey;
      acc.append(formDataKey, value);
      return acc;
    }, new FormData());
    let fetchParams = {
      method,
      headers: {
        'Accept': 'multipart/form-data'
      },
      body: JSON.stringify(data),
      // body: formData,
    };
    return fetch(url, fetchParams)
      .then(this.validateStatusCode)
      .catch(this.onResponseInvalid)
  }

  makeRequest(method, url) {
    let fetchParams = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    return fetch(url, fetchParams)
      .then(this.validateStatusCode)
      .catch(this.onResponseInvalid)
  }

  validateStatusCode(response) {
    return new Promise((resolve, reject) => {
      const status = response.status;
      const next = status < 400 ? resolve : reject;
      response.text().then(next);
    });
  }

  onResponseInvalid(payload) {
    return new Promise((resolve, reject) => reject(this.parsePayload(payload)))
  }

  parsePayload(payload) {
    try {
      return JSON.parse(payload);
    } catch (err) {
      return payload;
    }
  }

}
