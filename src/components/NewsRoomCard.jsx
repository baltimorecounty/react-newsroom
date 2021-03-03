import {
  Button,
  Card,
  CardContent,
  CardFooter,
} from "@baltimorecounty/dotgov-components";
import ReactHtmlParser from "react-html-parser";
import React from "react";

const NewsRoomCard = (props) => {
  const { contentDate, title, author, articleSummary, url } = props;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const articleDate = new Date(contentDate).toLocaleDateString(
    "en-US",
    options
  );

  return (
    <Card className="text-left">
      <h2>
        <a href={url}>{ReactHtmlParser(title)}</a>
      </h2>
      <CardContent>
        <div className="row">
          <div className="col dg_news_date-author">
            <p>
              <span>{articleDate}</span>
              <span>{author || "Baltimore County"}</span>
            </p>
            <p>{ReactHtmlParser(articleSummary)}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-right">
        <Button as="a" text="Details" href={url} />
      </CardFooter>
    </Card>
  );
};

export default NewsRoomCard;
