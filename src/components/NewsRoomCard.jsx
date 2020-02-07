import {
  Card,
  CardContent,
  CardFooter
} from "@baltimorecounty/dotgov-components";
import React from "react";

const NewsRoomCard = ({
  header,
  content,
  url,
  urlText,
  icon,
  image,
  imageText
}) => (
  <Card>
    <CardContent>
      <h3>{header}</h3>
      <div className="dg_icon-container">
        {icon ? (
          <i className={icon} aria-hidden="true"></i>
        ) : (
          <img src={image} alt={imageText} />
        )}
        <p>{content}</p>
      </div>

      <a href={url}>{urlText}</a>
    </CardContent>
    <CardFooter>
      <button type="button" className="dg_button">
        Learn More
      </button>
    </CardFooter>
  </Card>
);

export default NewsRoomCard;
