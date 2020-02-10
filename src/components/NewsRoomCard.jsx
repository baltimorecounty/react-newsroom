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
        <div class="row justify-content-start">
          <h3>{ArticleSummary}</h3>
        </div>
        <div className="d-flex col-lg-12 col-md-12 col-sm-12">
          <div class="row">
            <div id="dg_main-content">
              <img
                className="dg_image left"
                src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
                alt="County Executive Olzsewski delivers a speech."
              />
            </div>
            <div class="row">
              <div className="d-flex col-lg-12 col-md-12 col-sm-12">
                <a href={Url}>{PublishDate}</a>
                <a href={Url}>{Author}</a>
              </div>
              <div class="row">
                <p>{ArticleSummary}</p>
              </div>
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
