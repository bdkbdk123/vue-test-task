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
      if (!response.ok) {
        this.handleHttpErrors(response.status);
        return;
      }
      return await response.json();
    } catch (err) {
      this.handleErrors(err);
    }
  }

  async fetchById(id) {
    try {
      if (!id) throw Error("id is not provided");
      const response = await fetch(`${this.baseUrl}/${this.resource}/${id}`);
      if (!response.ok) {
        this.handleHttpErrors(response.status);
        return;
      }
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
    console.log("err", err);
    alert(`Error occured: ${err}`);
  }

  handleHttpErrors(status) {
    let page;
    switch (status) {
      case 404:
        page = "/not-found";
        break;
      default:
        page = "/server-error";
        break;
    }
    window.location.assign(page);
  }
}
