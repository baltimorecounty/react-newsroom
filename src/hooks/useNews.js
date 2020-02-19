import { useEffect, useState } from "react";

import { GetNews } from "../services/ApiService";

const useNews = props => {
  const [newsRoomItems, setNewsItems] = useState([]);
  const [newsRoomLoadMoreEndPoint, setNewsRoomLoadMoreEndPoint] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { endPoint } = props;

  useEffect(() => {
    GetNews(endPoint)
      .then(({ metaData, records }) => {
        setNewsItems(records);
        setNewsRoomLoadMoreEndPoint(metaData.links.next);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [endPoint]);

  return { hasError, newsRoomItems, isLoading, newsRoomLoadMoreEndPoint };
};

export default useNews;
