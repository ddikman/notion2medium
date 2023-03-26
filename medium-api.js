const axios = require('axios');

class MediumAPI {
  constructor(token) {
    this.token = token;
    this.apiUrl = 'https://api.medium.com/v1';
    this.headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  async getAuthorId() {
    const endpoint = `${this.apiUrl}/me`;
    const response = await axios.get(endpoint, { headers: this.headers });
    return response.data.data.id;
  }

  async updatePost(title, content) {
    const authorId = await this.getAuthorId();
    const endpoint = `${this.apiUrl}/users/${authorId}/posts`;
    const data = {
      title,
      content,
      contentFormat: 'html',
      publishStatus: 'draft',
    };

    try {
        const response = await axios.post(endpoint, data, { headers: this.headers });
        console.log(response)
        return response.data.data;
    } catch  (error) {
        console.log(error.response.data.errors[0].message)
    }
  }
}

module.exports = MediumAPI;