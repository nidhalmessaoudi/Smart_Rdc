import { useCallback, useState } from "react";
import axios from "axios";

function useHttp() {
  const [status, setStatus] = useState({ isLoading: false, error: null });
  const [data, setData] = useState(null);

  const send = useCallback(
    async function (options) {
      try {
        const res = await axios({
          url: `${process.env.REACT_APP_API_URL}${options.path}`,
          method: options.method,
          data: options.body,
        });

        setStatus({ isLoading: false, error: null });
        setData(res.data.data);
      } catch (err) {
        console.error(err);
        setStatus({ isLoading: false, error: err.message });
      }
    },
    [setData, setStatus]
  );

  return [send, status, data];
}

export default useHttp;
