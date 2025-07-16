
import { useCallback, useEffect, useState, useRef } from 'react';

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || 'Something went wrong, failed to send request.'
    );
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const abortControllerRef = useRef();

  const clearData = useCallback(() => {
    setData(initialData);
  }, [initialData]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const sendRequest = useCallback(
    async function sendRequest(requestData) {
      setIsLoading(true);
      setError(null);

      // Cancel previous request if still pending
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new abort controller
      abortControllerRef.current = new AbortController();

      try {
        const requestConfig = {
          ...config,
          signal: abortControllerRef.current.signal,
        };

        if (requestData) {
          requestConfig.body = requestData;
        }

        const resData = await sendHttpRequest(url, requestConfig);
        setData(resData);
        return resData;
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message || 'Something went wrong!');
        }
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }

    // Cleanup function to abort request on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
    clearError,
  };
}