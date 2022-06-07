import axios from "axios";

class HttpService {
  config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  url = "http://localhost:5001/images";

  async post(image) {
    const formData = new FormData();
    formData.append("image", image);

    return await axios.post(this.url, formData, this.config);
  }
}
export default new HttpService();
