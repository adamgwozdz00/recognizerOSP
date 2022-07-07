import axios from "axios";
import { data } from "browserslist";

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

  get() {
    return new Promise((resolve, reject) => {
      var data = { success: false };
      var i = 0;
      var interval = setInterval(() => {
        i++;
        console.log("try: " + i);
        axios.get(this.url, this.config).then((res) => {
          data = res.data;
        });
        if (data.success == undefined) {
          console.log(data);
          clearInterval(interval);
          resolve({ data: data, time: (i * 0.2).toFixed(1) + "s" });
        }
        if (i == 100) {
          alert("Timeout");
          clearInterval(interval);
          resolve({ data: data, time: (i * 0.2).toFixed(1) + "s" });
        }
      }, 200);
    });
  }
}
export default new HttpService();
