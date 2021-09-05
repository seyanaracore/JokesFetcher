class Api {
  __response(url, method) {
    return fetch(url, { method });
  }

  async get(url) {
    try {
      const response = await this.__response(url, "GET");
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async post(/*url*/) {
    //
  }
}

export default new Api();
