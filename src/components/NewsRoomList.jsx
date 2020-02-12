import React, { useState } from "react";
import FilterList from "./FilterList";
import NewsRoomCard from "./NewsRoomCard";
import { newsItems } from "../files/NewsItems";
import ListCounter from "./ListCounter";
import useNews from "../hooks/useNews";
import { Alert } from "@baltimorecounty/dotgov-components";

const NewsRoomList = () => {
  const { hasError, newsRoomItems = [], isLoading } = useNews();
  const [filteredItems, setFilteredItems] = useState([]);

  const handleLoadMoreNewsItems = clickEvent => {
    setFilteredItems([]);
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
    </React.Fragment>
  );
};

export default NewsRoomList;
