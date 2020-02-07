import { DateNewsCard } from "@baltimorecounty/dotgov-components";
import React from "react";

const NewsLink = ({ ArticleSummary, Article, url }) => {
  return (
    <React.Fragment>
      <DateNewsCard
        date="07/29/2019"
        headline={ArticleSummary}
        description="testing"
        href={url}
      ></DateNewsCard>
    </React.Fragment>
  );
};

export default NewsLink;
