import posts from './data/tweets.json';

const tweets = (state = posts, action) => {
  switch (action.type) {
    case 'create-tweet':
      console.log(action);
      const tweet = {
        _id: (new Date()).getTime() + '',
        "topic": "Web Development",
        "userName": "ReactJS",
        "verified": false,
        "handle": "ReactJS",
        "time": "2h",
        "tweet": action.tweet,
        "avatar-image": "../../../images/react.png",
        "logo-image": "../../../images/react.png",
        "stats": {
          "comments": 123,
          "retweets": 234,
          "likes": 345
        },
      };
      console.log(tweet);
      return [
        tweet,
        ...state,
      ];
    default:
      return state;
  }

};

export default tweets;
