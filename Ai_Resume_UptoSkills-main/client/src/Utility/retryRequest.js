// client/src/Utility/retryRequest.js
import axios from "axios";

const retryRequest = async (url, options = {}, retries = 3, delay = 1000) => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await axios(url, options);
      return response;
    } catch (error) {
      if (attempt < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
};

export default retryRequest;
