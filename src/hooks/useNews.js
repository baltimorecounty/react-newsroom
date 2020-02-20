import { useEffect, useState } from "react";
import { GetNews } from "../services/ApiService";

const useNews = initialEndPoint => {
  const [newsRoomItems, setNewsItems] = useState([]);
  const [loadMoreEndPoint, setLoadMoreEndPoint] = useState([]);
  const [newsRoomTotalRecords, setNewsRoomTotalRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [newsRoomEndPoint, setNewsRoomEndPoint] = useState(initialEndPoint);

  useEffect(() => {
    GetNews(newsRoomEndPoint)
      .then(({ metaData, records }) => {
        setNewsItems(items => [...items, ...records]);
        setLoadMoreEndPoint(metaData.links.next);
        setNewsRoomTotalRecords(metaData.totalRecords);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [newsRoomEndPoint]);

  return [
    {
      hasError,
      newsRoomItems,
      isLoading,
      loadMoreEndPoint,
      newsRoomTotalRecords
    },
    {
      setNewsRoomEndPoint
    }
  ];
};

export default useNews;
