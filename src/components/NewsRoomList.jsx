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
    {
      type: "category",
      value: "releases",
      name: "News-Release",
      checked: false
    },
    { type: "category", value: "stories", name: "Stories", checked: false }
  ]);
  const filterServiceList = itemUpdated => {
    let finalItems = [];
    const checkedItem = itemUpdated.filter(item => item.checked);
    //console.log(checkedItem);
    setIsFiltering(true);
    const items = [...newsRoomItems];
    var concatString = "?";
    var prevType;
    for (var key in checkedItem) {
      //console.log('prevType:' + prevType);
      const { type, value, name } = checkedItem[key];
      //  console.log("name:" + key);
      concatString =
        prevType === undefined
          ? concatString.concat(`${type}.value=${value}`)
          : prevType === type.toLocaleLowerCase()
          ? concatString.concat(`,${value}`)
          : concatString.concat(`& ${type}=${value}`);

      prevType = checkedItem[key].type.toLocaleLowerCase();
    }
    // console.log(concatString);
    // setFilteredItems(finalItems);
    setnewsRoomFilters(`${concatString}`);
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
  //  const hasFilteredResults = !(isFiltering && filteredItems.length === 0);
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
              <div className="row">
                <FilterList
                  items={newsRoomItems}
                  renderItem={props => (
                    <div key={props.id}>
                      <NewsRoomCard {...props} />
                    </div>
                  )}
                />
              </div>
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
