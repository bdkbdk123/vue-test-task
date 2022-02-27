export class BaseApi {
  constructor(resource) {
    this.baseUrl = "https://swapi.dev/api";
    if (!resource) throw new Error("Resource not provided");
    this.resource = resource;
  }

  async fetchPage(pageNumber) {
    try {
      if (!pageNumber) throw Error("pageNumber is not provided");
      const response = await fetch(
        `${this.baseUrl}/${this.resource}?page=${pageNumber}`
      );
      return await response.json();
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async fetchById(id) {
    try {
      if (!id) throw Error("id is not provided");
      const response = await fetch(`${this.baseUrl}/${this.resource}/${id}`);
      return await response.json();
    } catch (err) {
      this.handleErrors(err);
    }
  }

  generateUrl({ id = "", pageNumber = "" }) {
    return `${this.baseUrl}/${this.resource}/${id}${
      pageNumber ? `?page=${pageNumber} ` : ""
    }`;
  }

  handleErrors(err) {
    alert("Error occured:", err);
  }
}
