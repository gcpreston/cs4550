import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TweetListItem from "./TweetListItem";
import { fetchAllTweets } from "../../../../services/twitterService";

const selectAllTweets = (state) => {
  return state.tweets;
}

const TweetList = () => {
  const tweets = useSelector(selectAllTweets);
  const dispatch = useDispatch();
  useEffect(() => fetchAllTweets(dispatch), [dispatch])

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
