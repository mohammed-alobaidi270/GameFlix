import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "30e3ac1591174685b98e31b77773a158",
  },
});
