import data from "../data.js";

let tweetsTable = [...data.tweets.reverse()];

export function tweetsControler(req, res) {
  res.send(tweetsTable);
}

export function postTweetsControler(req, res) {
  let newTweet = [req.body, ...tweetsTable];
  tweetsTable = newTweet;
  res.send(req.body);
}
