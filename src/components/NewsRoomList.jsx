import React, { useState } from "react";
import FilterList from "./FilterList";
import { newsItems } from "../files/NewsItems";
import NewsRoomCard from "./NewsRoomCard";

const NewsRoomList = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  const initialLoad = () => {
    const items = [...newsItems].sort(item => {
      return item.PublishDate;
    });

    console.log(items);
    return items.slice(0, 10);
  };

  return (
    <React.Fragment>
      <div className="row">
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
    </React.Fragment>
  );
};

export default NewsRoomList;
