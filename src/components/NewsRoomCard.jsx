import {
  Card,
  CardContent,
  CardFooter,
  Button
} from "@baltimorecounty/dotgov-components";
import React from "react";

const NewsRoomCard = props => {
  const { PublishDate, Title, Author, ArticleSummary, Thumbnail, Url } = props;

  return (
    <Card>
      <CardContent>
        <div className="row justify-content-start">
          <h3>{Title}</h3>
        </div>
        <div className="d-flex col-lg-12 col-md-2 col-sm-2">
          <div className="row">
            <i className={Thumbnail} />

            <div className="d-flex col-lg-12 col-md-2 col-sm-2">
              <a href={Url}>{PublishDate}</a>
              <a href={Url}>{Author}</a>
            </div>
            <div className="row">
              <p>{ArticleSummary}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="row justify-content-end">
          <div className="col-lg-2 col-md-2 col-sm-2">
            <Button text="Details" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsRoomCard;
