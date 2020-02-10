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
    
    <div className="newsRoomCard">
        <div className="itemHeader"> <h3>{Title}</h3></div>
      
          <div className="itemMiddle itemMiddleWidth">
            <i className={Thumbnail} />
          </div>
          <div className="itemMiddle">
            <div className="itemLink">
              <a href={Url}>{PublishDate} </a>
              <a href={Url}>{Author}</a>
              <p>{ArticleSummary}</p>
            </div>
          
          </div>
        
        <div className="itemFooter">
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
