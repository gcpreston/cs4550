import posts from './data/tweets.json';

const tweets = (state = posts, action) => {
  switch (action.type) {
    case 'fetch-all-tweets':
      return action.tweets;

    case 'like-tweet':
      return state.map(tweet => {
        if (tweet._id === action.tweet._id) {
          if (tweet.liked === true) {
            tweet.liked = false;
            tweet.stats.likes--;
          } else {
            tweet.liked = true;
            tweet.stats.likes++;
          }
          return tweet;
        } else {
          return tweet;
        }
      });

    case 'delete-tweet':
      return state.filter(tweet => tweet._id !== action.tweet._id);

    case 'create-tweet':
      const ret = [
        action.tweet,
        ...state,
      ];
      return ret;

    default:
      return state;
  }

};

export default tweets;
