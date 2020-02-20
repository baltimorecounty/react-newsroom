import React from "react";
import FilterList from "./FilterList";
import NewsRoomCard from "./NewsRoomCard";
import useNews from "../hooks/useNews";
import ListCounter from "./ListCounter";
import { Alert, Button } from "@baltimorecounty/dotgov-components";

const NewsRoomList = () => {
  const [
    {
      hasError,
      newsRoomItems = [],
      isLoading,
      newsRoomLoadMoreEndPoint,
      newsRoomTotalRecords
    },
    { setNewsRoomEndPoint }
  ] = useNews("/api/news");

  const handlesLoadMoreNews = () => {
    setNewsRoomEndPoint(newsRoomLoadMoreEndPoint);
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
        <div className="row">
          <NewsCounter />
          <FilterList
            items={newsRoomItems}
            renderItem={props => (
              <div className="d-flex col-12" key={props.id}>
                <NewsRoomCard {...props} />
              </div>
            )}
          />
          <div className="col-12">
            <NewsCounter />
          </div>

          {newsRoomLoadMoreEndPoint ? (
            <Button text="Load More" onClick={handlesLoadMoreNews} />
          ) : null}
        </div>
      )}
    </React.Fragment>
  );
};

export default NewsRoomList;
