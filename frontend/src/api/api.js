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

  updateStudent(payload) {
    return new Promise((resolve, reject) => {
      const student_id = payload.student_id;
      let url = `/api/student/${student_id}`;
      const data = this.makeMultipartRequest('PUT', url, payload);
      resolve(data)
    })
  }

  getCourses() {
    return new Promise((resolve, reject) => {
      let url = `/api/courses`;
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
