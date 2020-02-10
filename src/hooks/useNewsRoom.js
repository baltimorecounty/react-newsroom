import { useEffect, useState } from "react";

import { GetNews } from "../services/ApiService";

const useNewsRoom = () => {
  const [serviceItems, setServiceItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    GetNews()
      .then(response => {
        setServiceItems(response);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { hasError, serviceItems, isLoading };
};

export default useNewsRoom;
