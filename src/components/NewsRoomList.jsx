import React, { useState } from "react";
import FilterList from "./FilterList";
import NewsRoomCard from "./NewsRoomCard";
import useNews from "../hooks/useNews";
import ListCounter from "./ListCounter";
import { Alert, Button } from "@baltimorecounty/dotgov-components";

const NewsRoomList = () => {
  const [moreNewsRoomItems, setMoreNewsRoomItems] = useState([]);
  const {
    hasError,
    newsRoomItems = [],
    isLoading,
    newsRoomLoadMoreEndPoint,
    newsRoomTotalRecords
  } = useNews({ endPoint: "/api/news" });

  const handlesLoadMoreNews = () => {
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
          <ListCounter
            count={
              moreNewsRoomItems.length === 0
                ? newsRoomItems.length
                : moreNewsRoomItems.length
            }
            total={newsRoomTotalRecords}
          />
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
            <div>
              <ListCounter
                count={
                  moreNewsRoomItems.length === 0
                    ? newsRoomItems.length
                    : moreNewsRoomItems.length
                }
                total={newsRoomTotalRecords}
              />
              <Button text="Load More" onClick={handlesLoadMoreNews} />
            </div>
          ) : null}
        </div>
      )}
    </React.Fragment>
  );
};

export default NewsRoomList;
