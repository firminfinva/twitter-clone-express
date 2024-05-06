import data from "./../data.js";

export function userControler(req, res) {
  res.send("Get user profile");
}

export function getUserTweetsControler(req, res) {
  let userTweets = data.tweets.filter(
    (tweet) => tweet["tweet_body"]["tweet_authors"] == req.params.handle
  );

  res.send(userTweets);
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

export function getUserControler(req, res) {
  let theUser = req.params.handle;
  let user = data.users.find((user) => user.titleAuthor2 == theUser);
  console.log(user);
  res.send(data.currentUser);
}
