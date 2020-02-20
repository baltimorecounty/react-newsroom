import { useEffect, useState } from "react";

import { GetNews } from "../services/ApiService";

const useNews = props => {
  const [newsRoomItems, setNewsItems] = useState([]);
  const [newsRoomLoadMoreEndPoint, setNewsRoomLoadMoreEndPoint] = useState([]);
  const [newsRoomTotalRecords, setNewsRoomTotalRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { endPoint } = props;

  useEffect(() => {
    GetNews(endPoint)
      .then(({ metaData, records }) => {
        console.log(metaData.totalRecords);
        setNewsItems(records);
        setNewsRoomLoadMoreEndPoint(metaData.links.next);
        setNewsRoomTotalRecords(metaData.totalRecords);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [endPoint]);

  return {
    hasError,
    newsRoomItems,
    isLoading,
    newsRoomLoadMoreEndPoint,
    newsRoomTotalRecords
  };
};

export default useNews;
