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
    <Card className="dg_card_alignment">
      <CardContent>
        <div class="row">
          <h3>{title}</h3>
        </div>
        <div className="d-flex col-12">
          <div class="row">
            <div id="dg_main-content">
              <img
                className="dg_image left"
                src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
                alt="County Executive Olzsewski delivers a speech."
              />
              <div className="d-flex ">
                <div className="dg_card_date-author">
                  <a href={url}>{published}</a>
                </div>
                <div>
                  <a href={url}>{author}</a>
                </div>
              </div>
              <p>{articleSummary}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div class="row justify-content-end">
          <div class="col-2">
            <Button text="Details" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsRoomCard;
