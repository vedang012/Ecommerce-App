import axios from "axios"

export const getRequest = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;

    } catch(error) {
        console.log(error);
        throw error;
    }
}

export const postRequest = async (url, postData) => {
    try {
      const response = await axios.post(
        url,
        postData,
        {
          headers: {
            Authorization: `Bearer ya29.a0ARW5m763w1-sVfoDDV9r-HwnVaF4PFoKQYCl3o1IoLVp0lKmO3qrPcQhQiSdfqnwmAW67t4Al3X2bTApsZCdBnv1YTL5y7uYKEYQl4On45CWlj6Bvr-nPxQI7Q3FsQo5thlTr5l5UCde2jTJDoStv2mIOq-7KIMbGXJzopyEaCgYKAfcSARASFQHGX2MiGlZyVqPsIteELoWaVGt0lA0175`, // Make sure the token is valid
            'Content-Type': 'application/json', // Ensure the content type is correct
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating post:", error.response || error);
      throw error;
    }
  };