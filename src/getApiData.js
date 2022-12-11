import axios from "axios";

const getApiData = async (parameters='') => {
  const apiUrl = "https://gamemonetize.com/feed.php?format=0";
  // console.log(`${apiUrl}&num=20&${parameters}`)
  try {
    const response = await axios.get(`${apiUrl}&num=20&${parameters}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getApiData;