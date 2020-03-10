import { Alert, Button, Checkbox } from "@baltimorecounty/dotgov-components";
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
      isLoading,
      loadMoreEndPoint,
      newsRoomTotalRecords
    },
    { setNewsRoomEndPoint, setnewsRoomFilters }
  ] = useNews("/api/news");
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterItems, setFilterItems] = useState([
    { type: "Category", value: "News-Release", name:"News-Release", checked: false },
    { type: "Category", value: "Stories", name:"Stories", checked: false },

  ]);
  const filterServiceList = itemUpdated => {
    let finalItems = [];
    const checkedItem = itemUpdated.filter(item => item.checked);
    console.log(checkedItem);
    setIsFiltering(true);
    const items = [...newsRoomItems];
    
    for (var key in checkedItem) {
      const { name } = checkedItem[key];
      finalItems.push.apply(
        finalItems,
        items.filter(
          i => i.category.value.toLocaleLowerCase() === name.toLocaleLowerCase()
        )
      );
    }
    setFilteredItems(finalItems);
   //console.log(finalItems)
  };

  const handleNewsRoomFilterChange = changeEvent => {
    setIsFiltering(false);
    const { checked, name } = changeEvent.target;
    const itemUpdated = filterItems.map(item => {
      if (item.name.toLocaleLowerCase() === name.toLocaleLowerCase())
        return { ...item, checked: checked };
      return item;
    });
    setFilterItems(itemUpdated);
    const checkedCount = itemUpdated.filter(item => item.checked).length;
    filterServiceList(itemUpdated);
    // const isTrue =
    //   checkedCount === 0 || checkedCount === itemUpdated.length ? false : true;
    // isTrue ? filterServiceList(itemUpdated) : setFilteredItems([]);
  };
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
            <div className="col-md-3 col-xs-12">
              <CategoriesFilterCollapse
                header="Categories"
                id="Popular-filter"
                onChange={handleNewsRoomFilterChange}
                items={filterItems}
              />
           
            </div>
            <div className="col-md-9 col-xs-12">
              {hasFilteredResults ? (
                <div className="row">
                  <FilterList
                    items={
                      filteredItems.length > 0 ? filteredItems : newsRoomItems
                    }
                    renderItem={props => (
                      <div key={props.id}>
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
