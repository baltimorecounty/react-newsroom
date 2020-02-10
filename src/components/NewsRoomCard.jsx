import {
  Card,
  CardContent,
  CardFooter,
  Button
} from "@baltimorecounty/dotgov-components";
import React from "react";

const NewsRoomCard = props => {
  const {
    Id,
    ContentDate,
    PublishDate,
    Title,
    Author,
    ArticleSummary,
    Article,
    Category,
    Thumbnail,
    Url
  } = props;

  const { Label, Value } = Category;

  return (
    <Card>
      <CardContent>
        <div style={{ textAlign: "left" }}>
          <h3>{Title}</h3>
          <div className="itemMiddle">
            <i className={Thumbnail} />

            <div className="itemLink">
              <a href={Url}>{PublishDate} </a>
              <a href={Url}>{Author}</a>
            </div>
            <p>{ArticleSummary}</p>
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
