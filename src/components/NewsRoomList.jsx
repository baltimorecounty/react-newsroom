import { Alert, Button } from "@baltimorecounty/dotgov-components";
import FilterList from "./FilterList";
import ListCounter from "./ListCounter";
import NewsRoomCard from "./NewsRoomCard";
import React, { useState } from "react";
import useNews from "../hooks/useNews";
import CategoriesFilterCollapse from "./CategoriesFilterCollapse";

const NewsRoomList = () => {
  const [
    {
      hasError,
      newsRoomItems = [],
      newsRoomItemsFiltered = [],
      isLoading,
      loadMoreEndPoint,
      newsRoomTotalRecords
    },
    { setNewsRoomEndPoint, setNewsRoomFilters }
  ] = useNews("/api/news");
  const [filterItems, setFilterItems] = useState([
    {
      type: "category",
      value: "releases",
      name: "News-Release",
      checked: false
    },
    { type: "category", value: "stories", name: "Stories", checked: false }
  ]);

  const handleNewsRoomFilterChange = changeEvent => {
    const { checked, name } = changeEvent.target;
    const itemUpdated = filterItems.map(item => {
      return item.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        ? { ...item, checked: checked }
        : item;
    });
    setFilterItems(itemUpdated);
    setNewsRoomFilters(itemUpdated.filter(item => item.checked === true));
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
  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading Baltimore County News...</p>
      ) : (
        <>
          <NewsCounter />
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <CategoriesFilterCollapse
                header="Categories"
                id="Popular-filter"
                onChange={handleNewsRoomFilterChange}
                items={filterItems}
              />
            </div>
            <div className="col-md-9 col-xs-12">
              {newsRoomItems ? (
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
              ) : (
                "Sorry, no news matches your search criteria. Please change your search term and try again"
              )}
            </div>
            <div className="mb-5">
              <NewsCounter />

              {loadMoreEndPoint ? (
                <Button text="Load More" onClick={handlesLoadMoreNews} />
              ) : null}
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default NewsRoomList;
