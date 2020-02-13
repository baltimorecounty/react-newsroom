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
  console.log(thumbnail);
  const imageSection = thumbnail ? (
    <img className="dg_image left" src={thumbnail} alt={category.label} />
  ) : (
    <i className="far fa-newspaper fa-5x dg_news_icon"></i>
  );

  const dateSection = (
    <div className="dg_card_date-author_separator">
      <p>{published}</p>
    </div>
  );

  const authorSection = (
    <div>
      <p>{author}</p>
    </div>
  );

  const newsSummary = <p>{articleSummary}</p>;

  return (
    <Card className="text-left">
      <CardContent>
        <div className="contanier">
          <div className="row">
            <h3>{title}</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-9 col-xs-12">
              {imageSection}
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-lg-2 col-md-4 col-xs-2">{dateSection}</div>
                <div className="col-lg-10 col-md-8 col-xs-2">
                  {authorSection}
                </div>
              </div>
              <div className="row">
                <div className="col-12">{newsSummary}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="row offset-lg-10 offset-md-8 offset-xs-6">
          <div className="col-2">
            <Button text="Details" href={url} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsRoomCard;
