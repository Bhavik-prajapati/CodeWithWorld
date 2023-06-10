import axios from "axios";

// import dotenv from "dotenv";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "b17f8d13d7msh5af25edc69348c6p1df049jsn6e4052cbc1fe",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// id  UCiP_JoAO2aNwFXVX-nrTc-w

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  // console.log(data);

  return data;
};
