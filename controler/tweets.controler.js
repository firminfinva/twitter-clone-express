import data from "../data.js";

export function tweetsControler(req, res) {
  res.send(data.tweets);
}
