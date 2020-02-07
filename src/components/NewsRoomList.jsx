import React from "react";

import { Alert } from "@baltimorecounty/dotgov-components";
import FilterList from "./FilterList";
import ListCounter from "./ListCounter";
import NewsRoomCard from "./NewsRoomCard";
import useNewsRoom from "../hooks/useNewsRoom";

const NewsRoomList = () => {
  const { hasError, newsItems = [], isLoading } = useNewsRoom();

  if (hasError) {
    return (
      <Alert className="status" type="error">
        <p>
          Unable to retrieve the list of Baltimore County services. Please try
          again in a couple of minutes.
        </p>
      </Alert>
    );
  }

  return (
    <React.Fragment>
      <div className="row">
        <FilterList
          items={newsItems}
          renderItem={props => (
            <div
              key={props.name.replace(/\s/, "-")}
              className="d-flex col-lg-4 col-md-6 col-sm-6"
            >
              <NewsRoomCard {...props} />
            </div>
          )}
        />
      </div>
    </React.Fragment>
  );
};

export default NewsRoomList;
