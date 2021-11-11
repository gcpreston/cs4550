import React from "react";
import { useSelector } from "react-redux";
import TweetListItem from "./TweetListItem";

const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
  const tweets = useSelector(selectAllTweets);

  return (
    <ul className="list-group">
      {
        tweets.map((tweet, i) =>
          <TweetListItem key={i} tweet={tweet} />
        )
      }
    </ul>
  )
};
export default TweetList;
