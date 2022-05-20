import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;


async function GetPersonas() {
    try {
      const response = await axios({
        url: `${baseUrl}/personas`,
        method: "GET"
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
    return [];
  }

  async function PostPersonas() {
    try {
      const response = await axios({
        url: `${baseUrl}/personas`,
        method: "POST"
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
    return [];
  }

  const petitions = {GetPersonas, PostPersonas};

  export default petitions; 