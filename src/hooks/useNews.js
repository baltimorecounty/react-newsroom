import { useEffect, useState } from "react";
import { GetNews } from "../services/ApiService";

const useNews = initialEndPoint => {
  const [newsRoomItems, setNewsItems] = useState([]);
  const [loadMoreEndPoint, setLoadMoreEndPoint] = useState([]);
  const [newsRoomTotalRecords, setNewsRoomTotalRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [newsRoomEndPoint, setNewsRoomEndPoint] = useState(initialEndPoint);
  const [newsRoomFilters, setNewsRoomFilters] = useState();

  useEffect(() => {
    GetNews(newsRoomEndPoint, newsRoomFilters)
      .then(({ metaData, records }) => {
        console.log(records);
        console.log(newsRoomFilters);
        newsRoomFilters===undefined? setNewsItems(items => [...records]): setNewsItems(items => [...records]);
        setLoadMoreEndPoint(metaData.links.next);
        setNewsRoomTotalRecords(metaData.totalRecords);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [newsRoomEndPoint, newsRoomFilters]);

  return [
    {
      hasError,
      newsRoomItems,
      isLoading,
      loadMoreEndPoint,
      newsRoomTotalRecords
    },
    {
      setNewsRoomEndPoint,
      setNewsRoomFilters
    }
  ];
};

export default useNews;
