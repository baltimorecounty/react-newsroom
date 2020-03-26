import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import "./App.css";

import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import NewsRoomCard from "./components/NewsRoomCard";
import React from "react";

const { setConfig, getValue } = Config;

const testApiRoot = "https://testservices.baltimorecountymd.gov/hub/api/news";
const prodApiRoot = "https://services.baltimorecountymd.gov/hub/api/news";

// HACK - the Config utiltiy does not account for beta.
// TODO: This will need to be addressed when we get closer to launch
const localApiRoot =
  window.location.hostname.indexOf("beta") > -1
    ? testApiRoot
    : "https://localhost:44393/api/news";

const configValues = {
  local: {
    apiRoot: localApiRoot
  },
  development: {
    apiRoot: testApiRoot
  },
  staging: {
    apiRoot: testApiRoot
  },
  production: {
    apiRoot: prodApiRoot
  }
};

setConfig(configValues);

const filters = [
  {
    targetApiField: "category.value",
    displayName: "Category",
    options: [
      { value: "releases", label: "News Releases" },
      { value: "stories", label: "Stories" }
    ]
  }
];

function App() {
  return (
    <FilterList
      title="Baltimore County Newsroom"
      filters={filters}
      apiEndpoint={getValue("apiRoot")}
      renderItem={props => <NewsRoomCard {...props} />}
    />
  );
}

export default App;
