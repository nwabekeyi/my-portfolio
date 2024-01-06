import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);

    try {
      // Simulate a successful submission
      await wait(2000);
      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      // Simulate an error during submission
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
