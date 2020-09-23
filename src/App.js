import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import "./App.css";

import { Config } from "@baltimorecounty/javascript-utilities";
import { FilterList } from "@baltimorecounty/react-filter-list";
import NewsRoomCard from "./components/NewsRoomCard";
import React from "react";

const { setConfig, getValue } = Config;

const testApiRoot =
  "https://testservices.baltimorecountymd.gov/api/hub/structuredContent/news";

const prodApiRoot =
  "https://services.baltimorecountymd.gov/api/hub/structuredContent/news";

// HACK - the Config utiltiy does not account for beta.
// TODO: This will need to be addressed when we get closer to launch
const localApiRoot =
  window.location.hostname.indexOf("beta") > -1
    ? testApiRoot
    : "http://localhost:54727/api/hub/structuredcontent/news";

const configValues = {
  local: {
    apiRoot: localApiRoot,
  },
  development: {
    apiRoot: testApiRoot,
  },
  staging: {
    apiRoot: testApiRoot,
  },
  production: {
    apiRoot: prodApiRoot,
  },
};

setConfig(configValues);

const filters = [
  {
    targetApiField: "category.value",
    displayName: "Category",
    options: [
      { value: "releases", label: "News Releases" },
      { value: "stories", label: "Stories" },
    ],
  },
  {
    targetApiField: "recordsperpage",
    value: 10,
  },
];

function App() {
  return (
    <FilterList
      title="Baltimore County Newsroom"
      filters={filters}
      apiEndpoint={getValue("apiRoot")}
      renderItem={(props) => <NewsRoomCard {...props} />}
      includeInputFilter={true}
      includeDateFilter={true}
      includeClearButton={true}
      searchCategory="NewsRoom"
      inputFilterPlaceholder="Begin typing to filter by title or summary..."
    />
  );
}

export default App;
