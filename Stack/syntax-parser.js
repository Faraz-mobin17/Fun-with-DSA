import { Stack } from "./Stack.js";

function isMatchingPair(openingTag, closingTag) {
  return closingTag === `</${openingTag.slice(1)}`;
}

function parseHTML(htmlString) {
  const stack = new Stack();
  const tagPattern = /<\/?[^>]+>/g;
  const tags = htmlString.match(tagPattern);

  if (!tags) {
    return true; // No tags, considered as balanced
  }
  console.log(tags);
  for (const tag of tags) {
    if (tag[1] !== "/") {
      // Opening tag
      stack.push(tag);
    } else {
      // Closing tag
      if (stack.isEmpty()) {
        return false; // No matching opening tag
      }
      const lastOpenedTag = stack.pop();
      if (!isMatchingPair(lastOpenedTag, tag)) {
        return false; // Mismatched tags
      }
    }
  }

  return stack.isEmpty(); // All tags matched
}

// Example Usage
const htmlString1 = "<div><p>Hello, <em>world</em>!</p></div>";
const htmlString2 = "<div><p>Hello, <em>world!</p></div>";
const htmlString3 = "<div><p>Hello, <em>world</em></div>";

console.log(parseHTML(htmlString1)); // true (properly nested)
console.log(parseHTML(htmlString2)); // false (improperly nested)
console.log(parseHTML(htmlString3)); // false (improperly nested)
