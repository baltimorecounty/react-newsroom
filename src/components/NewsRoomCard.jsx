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
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h3>{ArticleSummary}</h3>
          <div id="dg_main-content">
            <img
              className="dg_image left"
              src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
              alt="County Executive Olzsewski delivers a speech."
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <a href={Url}>{PublishDate}</a>
            <a href={Url}>{Author}</a>
          </div>
          <p>{ArticleSummary}</p>
        </div>
      </CardContent>
      <CardFooter>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Button text="Details" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsRoomCard;
