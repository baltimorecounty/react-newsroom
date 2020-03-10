import { useEffect, useState } from "react";
import { GetNews } from "../services/ApiService";

const useNews = initialEndPoint => {
  const [newsRoomItems, setNewsItems] = useState([]);
  const [newsRoomItemsFiltered, setNewsRoomItemsFiltered] = useState([]);
  const [loadMoreEndPoint, setLoadMoreEndPoint] = useState([]);
  const [newsRoomTotalRecords, setNewsRoomTotalRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [newsRoomEndPoint, setNewsRoomEndPoint] = useState(initialEndPoint);
  const [newsRoomFilters, setNewsRoomFilters] = useState();

  useEffect(() => {
    GetNews(newsRoomEndPoint, newsRoomFilters)
      .then(({ metaData, records }) => {
        setNewsItems(items => [...items, ...records]);
        setNewsRoomItemsFiltered(records);
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
      newsRoomItemsFiltered,
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
