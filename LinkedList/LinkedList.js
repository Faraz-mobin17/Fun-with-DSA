class Tweet {
  constructor(avatar, title, content) {
    this.avatar = avatar;
    this.title = title;
    this.content = content;
    this.next = null; // Add the next property for linked list
  }
}

export class TwitterFeed {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addTweet(avatar, title, content) {
    const newTweet = new Tweet(avatar, title, content);
    if (!this.head) {
      this.head = newTweet;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newTweet;
    }
  }

  deleteLastTweet() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  insertTweetAt(avatar, title, content, position) {
    const newTweet = new Tweet(avatar, title, content);
    if (position === 0) {
      newTweet.next = this.head;
      this.head = newTweet;
      return;
    }

    let current = this.head;
    let index = 0;

    while (current && index < position - 1) {
      current = current.next;
      index++;
    }

    if (current) {
      newTweet.next = current.next;
      current.next = newTweet;
    } else {
      console.log("Position out of bounds");
    }
  }

  findTweetByContent(content) {
    let current = this.head;
    while (current) {
      if (current.content.includes(content)) {
        console.log(`${current.avatar} ${current.title} ${current.content}\n`);
      }
      current = current.next;
    }
  }

  reverseFeed() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  countTweets() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  getMiddleTweet() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  displayFeed() {
    let current = this.head;
    const tweetFeed = document.getElementById("tweetFeed");
    tweetFeed.innerHTML = ""; // Clear previous tweets

    while (current) {
      const tweetElement = document.createElement("div");
      tweetElement.className = "tweet";
      tweetElement.innerHTML = `
            <img src="${current.avatar}" class="avatar" alt="Avatar">
            <div class="title">${current.title}</div>
            <div class="content">${current.content}</div>
            
          `;
      tweetFeed.appendChild(tweetElement);
      current = current.next;
    }
  }

  displayMiddleTweet(middleTweet) {
    const tweetFeed = document.getElementById("tweetFeed");
    tweetFeed.innerHTML = ""; // Clear previous tweets
    const tweetElement = document.createElement("div");
    tweetElement.className = "tweet middle";
    tweetElement.innerHTML = `
          <img src="${middleTweet.avatar}" class="avatar" alt="Avatar">
          <div class="title">${middleTweet.title}</div>
          <div class="content">${middleTweet.content}</div>
        `;
    tweetFeed.appendChild(tweetElement);
  }

  clearFeed() {
    this.head = null;
    this.tail = null;
  }
}
