import { Config } from "@baltimorecounty/javascript-utilities";
import axios from "axios";

const { getValue } = Config;

/**
 * Determines if api is up or not
 * @returns true if the api is available
 */
const GetStatus = () =>
  axios
    .get(`${getValue("apiRoot")}/status`)
    .then(({ status }) => status === 200);

/**
 * Builds the url dependant on parameters sent.
 */
const BuildEndPoint = props => {
  const { endPoint, filters } = props;
  var prevType;

  const url = `https://structuredcontentdev.bcg.ad.bcgov.us${endPoint}${
    filters.length > 0 ? "?" : ""
  }${filters
    .map(item => {
      const { type, value } = item;
      var filterParameters = "";
      const filterItems = !prevType
        ? filterParameters.concat(`${type}.value=${value}`)
        : prevType === type.toLocaleLowerCase()
        ? filterParameters.concat(`,${value}`)
        : filterParameters.concat(`&${type}=${value}`);
      prevType = type.toLocaleLowerCase();
      return filterItems;
    })
    .join("")}`;

  return url;
};

/**
 * Get News Data from SiteExecutive structured content
 */
const GetNews = (endPoint = "hub/news/news", filters = []) =>
  axios
    .get(BuildEndPoint({ endPoint, filters }))
    .then(({ status, data }) => (status === 200 ? data : []));

export { GetStatus, GetNews };
