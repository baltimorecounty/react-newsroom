import { useEffect, useState } from "react";

import { GetMoreNews } from "../services/ApiService";

const useNewsRoomPaging = props => {
  const [newsRoomAdditionalItems, setNewsRoomAdditionalItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasPageError, setHasError] = useState(false);

  const { limit, offset } = props;

  useEffect(() => {
    GetMoreNews(limit, offset)
      .then(response => {
        setNewsRoomAdditionalItems(response);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [limit, offset]);

  return { hasPageError, newsRoomAdditionalItems, isLoading };
};

export default useNewsRoomPaging;
