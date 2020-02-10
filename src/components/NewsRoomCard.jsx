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
        <div className="row justify-content-start">
          <h3>{ArticleSummary}</h3>
        </div>
        <div className="d-flex col-lg-12 col-md-2 col-sm-2">
          <div className="row justify-content-start">
            <div id="dg_main-content">
              <img
                className="dg_image left"
                src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
                alt="County Executive Olzsewski delivers a speech."
              />
            </div>
            <div className="row justify-content-start">
              <div className="d-flex col-lg-12 col-md-2 col-sm-2">
                <a href={Url}>{PublishDate}</a>
                <a href={Url}>{Author}</a>
              </div>
              <div className="row">
                <p>{ArticleSummary}</p>
              </div>
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
