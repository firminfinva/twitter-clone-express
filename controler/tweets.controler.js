import data from "../data.js";

let tweetsTable = [...data.tweets.reverse()];

export function tweetsControler(req, res) {
  try {
    res.status(200).json(tweetsTable);
  } catch (e) {
    res.status(500).json({ message: message.error });
  }
}

export function postTweetsControler(req, res) {
  try {
    let tweetText = req.body["tweet_body"]["tweet_text"];
    if (tweetText && tweetText.length < 181) {
      let newTweet = [req.body, ...tweetsTable];
      tweetsTable = newTweet;
      res.status(200).send(req.body);
    } else {
      res.status(400).json({ message: "Tweet text is too long" });
    }
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
}
