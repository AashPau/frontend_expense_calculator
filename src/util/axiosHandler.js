import axios from "axios";
const apiEP = import.meta.env.VITE_APP_EP;
const userEP = apiEP + "/users";

export const postNewUser = async (userObj) => {
  try {
    const { data } = await axios.post(userEP, userObj);

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (userObj) => {
  try {
    const { data } = await axios.post(userEP, userObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
