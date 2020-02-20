import { Alert, Button } from "@baltimorecounty/dotgov-components";

import FilterList from "./FilterList";
import ListCounter from "./ListCounter";
import NewsRoomCard from "./NewsRoomCard";
import React from "react";
import useNews from "../hooks/useNews";

const NewsRoomList = () => {
  const [
    {
      hasError,
      newsRoomItems = [],
      isLoading,
      loadMoreEndPoint,
      newsRoomTotalRecords
    },
    { setNewsRoomEndPoint }
  ] = useNews("/api/news");

  const handlesLoadMoreNews = () => {
    setNewsRoomEndPoint(loadMoreEndPoint);
  };

  const NewsCounter = props => {
    return (
      <ListCounter count={newsRoomItems.length} total={newsRoomTotalRecords} />
    );
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
        <>
          <NewsCounter />
          <div className="row">
            <FilterList
              items={newsRoomItems}
              renderItem={props => (
                <div className="d-flex col-12" key={props.id}>
                  <NewsRoomCard {...props} />
                </div>
              )}
            />
          </div>
          <div className="mb-5">
            <NewsCounter />

            {loadMoreEndPoint ? (
              <Button class="" text="Load More" onClick={handlesLoadMoreNews} />
            ) : null}
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default NewsRoomList;
