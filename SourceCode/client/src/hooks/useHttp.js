import { useState } from "react";

function useHttp() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAborted, setIsAborted] = useState(false);
  const controller = new AbortController();

  const sendRequest = async (config, onSuccessed, onFailed) => {
    try {
      setIsLoading(true);
      setError(null);
      const respone = await fetch(config.url, {
        signal: controller.signal,
        method: config.method ? config.method : "GET",
        headers: config.headers
          ? config.headers
          : {
              "Content-Type": "application/json",
              Accept: "application/json, image/*",
            },
        body: config.body ? JSON.stringify(config.body) : null,
        credentials: "include",
      });
      const data = await respone.json();

      if (respone.status >= 200 && respone.status < 300) {
        if (onSuccessed) {
          if (data.message) {
            setSuccess(data.message);
          }
          onSuccessed(data);
        }
      } else {
        if (data.message) {
          setError(data.message);
        }
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      onFailed?.();
      if (!isAborted) setError(err.message);
      setIsLoading(false);
      setIsAborted(false);
    }
  };

  const cancelRequest = () => {
    controller.abort();
    setIsLoading(false);
    setError(null);
    setSuccess(null);
    setIsAborted(true);
  };

  return {
    error,
    setError,
    success,
    setSuccess,
    isLoading,
    sendRequest,
    cancelRequest,
  };
}

export default useHttp;
