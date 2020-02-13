import {
  Card,
  CardContent,
  CardFooter,
  Button
} from "@baltimorecounty/dotgov-components";
import React from "react";

const NewsRoomCard = props => {
  const {
    publishDate,
    title,
    author,
    articleSummary,
    thumbnail,
    url,
    category
  } = props;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const published = new Date(publishDate).toLocaleDateString("en-US", options);

  const imageSection = thumbnail ? (
    <img className="dg_image left" src={thumbnail} alt={category.label} />
  ) : (
    <i className="far fa-newspaper fa-3x dg_news_icon"></i>
  );

  return (
    <Card className="text-left">
      <h2>{title}</h2>
      <CardContent>
        <div className="row">
          <div className="col-md-3 col-xs-12">{imageSection}</div>
          <div className="col-md-9 col-xs-12">
            <p>
              <span>{published}</span> | <span>{author}</span>
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
