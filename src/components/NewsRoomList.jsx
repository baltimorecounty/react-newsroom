import { Alert, Button, Checkbox } from "@baltimorecounty/dotgov-components";
import FilterList from "./FilterList";
import ListCounter from "./ListCounter";
import NewsRoomCard from "./NewsRoomCard";
import React, { useState } from "react";
import useNews from "../hooks/useNews";
import CategoriesFilterCollapse from './CategoriesFilterCollapse';

const NewsRoomList = () => {
  const [
    {
      hasError,
      newsRoomItems = [],
      isLoading,
      loadMoreEndPoint,
      newsRoomTotalRecords
    },
    { setNewsRoomEndPoint, setnewsRoomFilters }
  ] = useNews("/api/news");
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const test = onCick => {
    const { value } = onCick.target;
    setnewsRoomFilters(`?category.value=${value}`);
  };

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
  const hasFilteredResults = !(isFiltering && filteredItems.length === 0);
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
            <Checkbox
              id="car-color-blue"
              name="car-color"
              label="Is your car blue?"
              value="stories"
              onClick={test}
            />
          </div>
          <div className="mb-5">
            <NewsCounter />

            {loadMoreEndPoint ? (
              <Button text="Load More" onClick={handlesLoadMoreNews} />
            ) : null}
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default NewsRoomList;
