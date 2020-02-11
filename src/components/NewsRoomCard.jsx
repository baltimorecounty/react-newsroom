import {
  Card,
  CardContent,
  CardFooter,
  Button
} from "@baltimorecounty/dotgov-components";
import React from "react";

const NewsRoomCard = props => {
  const { publishDate, title, author, articleSummary, thumbnail, url } = props;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const published = new Date(publishDate).toLocaleDateString("en-US", options);

  return (
    <Card>
      <CardContent>
        <div class="row justify-content-start">
          <h3>{title}</h3>
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
                <div
                  style={{
                    borderRight: " 2px solid gray",
                    paddingRight: "20px",
                    marginRight: "20px"
                  }}
                >
                  <a href={url}>{published}</a>
                </div>
                <div>
                  <a href={url}>{author}</a>
                </div>
              </div>
              <div class="row">
                <p>{articleSummary}</p>
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
