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

  const filterQuery = filters.map(item => {
    return `?${item.type}.value=${item.value}`;
  });

  const url = `https://structuredcontentdev.bcg.ad.bcgov.us${endPoint}${filterQuery}`;

  return url;
};

/**
 * Get News Data from SiteExecutive structured content
 */
const GetNews = (endPoint = "/api/news", filters = []) =>
  axios
    .get(BuildEndPoint({ endPoint, filters }))
    .then(({ status, data }) => (status === 200 ? data : []));

export { GetStatus, GetNews };
