import {
  Card,
  CardContent,
  CardFooter,
  Button
} from "@baltimorecounty/dotgov-components";
import React from "react";

const NewsRoomCard = props => {
  const { publishDate, title, author, articleSummary, thumbnail, url } = props;

  const published = new Date(publishDate).toLocaleDateString();

  return (
    <Card>
      <CardContent>
        <div style={{ textAlign: "left" }}>
          <h3>{title}</h3>
          <div className="itemNewsRoom">
            <div className="itemMiddle itemMiddleWidth">
              <i className={thumbnail} />
            </div>
            <div className="itemMiddle">
              <div className="itemLink">
                <a href={url}>{published} </a>
                <a href={url}>{author}</a>
              </div>
              <p>{articleSummary}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div class="row justify-content-end">
          <div class="col-lg-2 col-md-2 col-sm-2">
            <Button text="Details" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsRoomCard;
