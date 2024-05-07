import data from "../data.js";

export function userControler(req, res) {
  res.send("Get user profile");
}

export function getUserTweetsControler(req, res) {
  let userTweets = data.tweets.filter(
    (tweet) => tweet["tweet_body"]["tweet_authors"] == req.params.handle
  );
  let userInfo = {
    titleAuthor: userTweets[0].tweet_body.tweet_author_title,
    titleAuthor2: userTweets[0].tweet_body.tweet_authors,
    tweet_avatar: userTweets[0].tweet_avatar,
    followers: "234k",
    following: "4k",
    date: "mars 2022",
  };

  res.send({ userInfo: userInfo, tweets: userTweets });
}

export function getTweetsWithMediaControler(req, res) {
  let userTweets = data.tweets.filter(
    (tweet) => tweet["tweet_body"]["tweet_authors"] == req.params.handle
  );

  let tweetsWithMedia = userTweets.filter(function (tweet) {
    if (tweet["tweet_body"]["tweet_image"]) return tweet;
  });
  res.send(tweetsWithMedia);
}

export function getCurrentUserControler(req, res) {
  try {
    res.status(200).json(data.currentUser);
  } catch (error) {
    res.status(404).send("User not found");
  }
}
