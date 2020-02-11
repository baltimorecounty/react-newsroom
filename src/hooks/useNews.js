import { useEffect, useState } from "react";

import { GetNews } from "../services/ApiService";

const useNews = props => {
  const [newsRoomItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    GetNews()
      .then(response => {
        setNewsItems(response);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { hasError, newsRoomItems, isLoading };
};

export default useNews;