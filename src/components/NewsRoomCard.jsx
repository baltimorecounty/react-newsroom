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

        <div className="box">
         <div className="itemOne"> <h3>{ArticleSummary}</h3></div>
          <div className="itemTwo defaultWidth">
            <img
              className="imageSize"
              src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
              alt="County Executive Olzsewski delivers a speech."
            />
            </div>
  
          <div className="itemTwo ">  <a href={Url}>{PublishDate}</a>
            <a href={Url}>{Author}</a><p>{ArticleSummary}</p>
            </div> 
            <div className="itemOne">
            <div class="row justify-content-end">
          <div class="col-lg-2 col-md-2 col-sm-2">
            <Button text="Details" />
          </div>
        </div>
            </div>
        </div>
 
  );
};

export default NewsRoomCard;
