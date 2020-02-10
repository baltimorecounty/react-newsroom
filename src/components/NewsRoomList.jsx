import React from "react";
import FilterList from "./FilterList";
import { newsItems } from "../files/NewsItems";
import NewsRoomCard from "./NewsRoomCard";

const NewsRoomList = () => {
  return (
    <React.Fragment>
      <div className="row">
        <FilterList
          items={newsItems}
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
    </React.Fragment>
  );
};

export default NewsRoomList;
