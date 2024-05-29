import { TwitterFeed } from "./LinkedList.js";

const feed = new TwitterFeed();

feed.addTweet(
  "https://www.w3schools.com/howto/img_avatar.png",
  "John Doe",
  "Hello World!"
);

feed.addTweet(
  "https://www.w3schools.com/howto/img_avatar.png",
  "Jane Doe",
  "Hello Javascript!"
);

feed.addTweet(
  "https://www.w3schools.com/howto/img_avatar.png",
  "Faraz Doe",
  "Hello Css!"
);

feed.addTweet(
  "https://www.w3schools.com/howto/img_avatar.png",
  "Ram bhardwaj",
  "Hello Html"
);

// feed.deleteLastTweet();
// feed.reverseFeed();
feed.displayFeed();

// const middleTweet = feed.getMiddleTweet();
// console.table(middleTweet);
// feed.displayMiddleTweet(middleTweet);
