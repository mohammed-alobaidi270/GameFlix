import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
//   baseURL: "http://localhost",
  params: {
    key: "30e3ac1591174685b98e31b77773a158",
  },
});
