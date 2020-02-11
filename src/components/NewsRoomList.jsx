import React, { useState } from "react";
import FilterList from "./FilterList";
import NewsRoomCard from "./NewsRoomCard";
import ListCounter from "./ListCounter";
import useNewsRoom from "../hooks/useNewsRoom";
import { Alert, Button } from "@baltimorecounty/dotgov-components";

const NewsRoomList = () => {
  const { hasError, newsRoomItems = [], isLoading } = useNewsRoom();
  const [filteredItems, setFilteredItems] = useState([]);

  const handleLoadMoreNewsItems = clickEvent => {
    setFilteredItems([]);
    console.log("Load More Results");
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
          <div className="col-md-6 col-xs-12 order-xs-last order-md-first ">
            <ListCounter
              count={
                filteredItems.length === 0
                  ? newsRoomItems.length
                  : filteredItems.length
              }
              total={newsRoomItems.length}
            />
          </div>
          <FilterList
            items={filteredItems.length > 0 ? filteredItems : newsRoomItems}
            renderItem={props => (
              <div
                className="d-flex col-lg-12 col-md-12 col-sm-12"
                key={props.id}
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
            filteredItems.length === 0
              ? newsRoomItems.length
              : filteredItems.length
          }
          total={newsRoomItems.length}
        />
        <Button
          type="submit"
          text="Load More"
          onClick={handleLoadMoreNewsItems}
        />
      </div>
    </React.Fragment>
  );
};

export default NewsRoomList;
