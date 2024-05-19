import axios from "axios";
const apiEP = import.meta.env.VITE_APP_EP;
const userEP = apiEP + "/users";
const transEP = apiEP + "/transactions";

const getUserId = () => {
  const userStr = localStorage.getItem("user");
  const userObj = userStr ? JSON.parse(userStr) : null;

  // ?? returns expression before itself
  return userObj?._id ?? null;
};

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

export const loginUser = async (loginInfo) => {
  try {
    const { data } = await axios.post(userEP + "/login", loginInfo);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

// transactions api
export const postNewTransaction = async (transObj) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return { status: "500", message: "User id not found" };
    }

    const { data } = await axios.post(transEP, transObj, {
      headers: {
        Authorization: userId,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchTransaction = async () => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error("User doesnot exist");
    }
    //may be get
    const { data } = await axios.get(transEP, {
      headers: {
        Authorization: userId,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteTrans = async (idsToDelete) => {
  try {
    const userId = getUserId();

    if (!userId) {
      throw new Error("User id doesn't exist! Login and try again");
    }
    const { data } = await axios.delete(transEP, {
      data: idsToDelete,
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};
