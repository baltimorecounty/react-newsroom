import React, { useState } from "react";
import FilterList from "./FilterList";
import { newsItems } from "../files/NewsItems";
import NewsRoomCard from "./NewsRoomCard";
import ListCounter from "./ListCounter";
import useNewsRoom from "../hooks/useNewsRoom";
import { Alert, Button } from "@baltimorecounty/dotgov-components";

const NewsRoomList = () => {
  const { hasError, newsRoomItems = [], isLoading } = useNewsRoom();
  const [filteredItems, setFilteredItems] = useState([]);

  const initialLoad = () => {
    const items = [...newsItems].sort((a, b) => {
      a = new Date(a.PublishDate);
      b = new Date(b.PublishDate);
      return a > b ? -1 : a < b ? 1 : 0;
    });

    return items.slice(0, 10);
  };

  const handleLoadMore = clickEvent => {};

  //setFilteredItems(initialLoad());

  //This needs to be true but for now until the service is complete we leave as false to get past it
  if (hasError === false) {
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
          <div className="col-md-6 col-xs-12 order-xs-last order-md-first ">
            <ListCounter
              count={
                filteredItems.length === 0
                  ? newsItems.length
                  : filteredItems.length
              }
              total={newsItems.length}
            />
          </div>
          <FilterList
            items={initialLoad()}
            renderItem={props => (
              <div
                className="d-flex col-lg-12 col-md-12 col-sm-12"
                key={props.Id}
              >
                <NewsRoomCard {...props} />
              </div>
            )}
          />
        </div>
      )}
      <div>
        <ListCounter
          count={
            filteredItems.length === 0 ? newsItems.length : filteredItems.length
          }
          total={newsItems.length}
        />
        <Button text="Load More" onClick={handleLoadMore} />
      </div>
    </React.Fragment>
  );
};

export default NewsRoomList;
