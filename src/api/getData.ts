import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/113777/row/list`
    );
    if (response !== undefined) {
      return response.data;
    } else return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
