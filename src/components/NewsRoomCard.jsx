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
         <div className="itemHeader"> <h3>{ArticleSummary}</h3></div>
          <div className="itemMiddle itemMiddleWidth">
           <div id="dg_main-content">
            <img
            className="dg_image left"
              src="//baltimorecountymd.gov/sebin/t/t/homepage-county-executive.jpg"
              alt="County Executive Olzsewski delivers a speech."
            />
             </div> 
          </div>
          <div className="itemMiddle "> <div className="itemLink"> <a href={Url}>{PublishDate} </a>  
            <a href={Url}>{Author}</a></div>
            <p>{ArticleSummary}</p>
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
