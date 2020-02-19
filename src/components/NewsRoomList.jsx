import React, { useState } from "react";
import FilterList from "./FilterList";
import NewsRoomCard from "./NewsRoomCard";
import useNews from "../hooks/useNews";
import { Alert, Button } from "@baltimorecounty/dotgov-components";

const NewsRoomList = () => {
  const [moreNewsRoomItems, setMoreNewsRoomItems] = useState([]);
  const {
    hasError,
    newsRoomItems = [],
    isLoading,
    newsRoomLoadMoreEndPoint
  } = useNews({ endPoint: "/api/news" });

  const handlesLoadMore = () => {
    setMoreNewsRoomItems([...newsRoomItems, newsRoomItems]);
  };

  if (hasError) {
    return (
      <Alert className="status" type="error">
        <p>
          Unable to retrieve the list of Baltimore County news room. Please try
          again in a couple of minutes.
        </p>
      </Alert>
    );
  }

  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading Baltimore County News...</p>
      ) : (
        <div className="row">
          <FilterList
            items={
              moreNewsRoomItems.length > 0 ? moreNewsRoomItems : newsRoomItems
            }
            renderItem={props => (
              <div className="d-flex col-12" key={props.id}>
                <NewsRoomCard {...props} />
              </div>
            )}
          />
          {newsRoomLoadMoreEndPoint ? (
            <Button text="Load More" onClick={handlesLoadMore} />
          ) : null}
        </div>
      )}
    </React.Fragment>
  );
};

export default NewsRoomList;
