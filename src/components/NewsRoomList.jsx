import React, { useState } from "react";
import FilterList from "./FilterList";
import NewsRoomCard from "./NewsRoomCard";
import { newsItems } from "../files/NewsItems";
import ListCounter from "./ListCounter";
import useNews from "../hooks/useNews";
import { Alert } from "@baltimorecounty/dotgov-components";

const NewsRoomList = () => {
  const { hasError, newsRoomItems = [], isLoading } = useNews();

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
              count={newsRoomItems.length}
              total={newsRoomItems.length}
            />
          </div>
          <FilterList
            items={newsRoomItems}
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
          count={newsRoomItems.length}
          total={newsRoomItems.length}
        />
        <button type="button" class="dg_button">
          Load More
        </button>
      </div>
    </React.Fragment>
  );
};

export default NewsRoomList;
