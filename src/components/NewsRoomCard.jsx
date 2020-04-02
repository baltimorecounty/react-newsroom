import {
  Button,
  Card,
  CardContent,
  CardFooter
} from "@baltimorecounty/dotgov-components";

import React from "react";

const NewsRoomCard = props => {
  const { publishDate, title, author, articleSummary, url } = props;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const published = new Date(publishDate).toLocaleDateString("en-US", options);

  return (
    <Card className="text-left">
      <h2>{title}</h2>
      <CardContent>
        <div className="row">
          <div className="col dg_news_date-author">
            <p>
              <span>{published}</span>
              <span>{author}</span>
            </p>
            <p>{articleSummary}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-right">
        <Button as="a" text="Details" href={url} />
      </CardFooter>
    </Card>
  );
};

export default NewsRoomCard;
