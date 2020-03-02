import {
  Card,
  CardContent,
  CardFooter,
  Button
} from "@baltimorecounty/dotgov-components";
import NewsThumbnail from "./NewsThumbnail";
import React from "react";

const NewsRoomCard = props => {
  const {
    publishDate,
    title,
    author,
    articleSummary,
    thumbnail,
    thumbnailAltText,
    url
  } = props;

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
          <div className="col-md-3 col-xs-12">
            <NewsThumbnail
              thumbnail={thumbnail}
              thumbnailAltText={thumbnailAltText}
            />
          </div>
          <div className="col-md-9 col-xs-12 dg_news_date-author">
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
