// Part One - Querying DOM Elements

// These functions won't `return` anything, just make changes to the current DOM.

// 1. Write a function that puts a line through the text of the first `<li>` in the unordered
// "Arguments" list (`<ul`). Since this function always does the same thing, it requires no parameters!

function lineThrough() {
  const firstList = document.querySelector("li");

  firstList.style.textDecoration = "line-through";
}

// 2. Now call it! The first list item (`<li>`) should get what's known as a "strikethrough" style.

lineThrough();

// 3. Write a function that takes in a string representing an DOM element's `id` and a string
// representing a url. The function should set the image with that `id` to have that url as its image source.

function setImageSrc(id, url) {
  //   console.log(id);
  //   console.log(url);
  const image = document.querySelector("#" + id);
  image.src = url;
}

// 4. Now use that function to set the three images in the Image Area section to show three images
//  of your choice. You'll need three separate calls to your function!

setImageSrc(
  "image-1",
  "https://i.pinimg.com/originals/b8/7e/38/b87e38354b9c29641aa7f45af71c0518.jpg"
);
setImageSrc(
  "image-2",
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07143636/Dachshund-litter-of-puppies-sitting-outdoors.jpg"
);
setImageSrc(
  "image-3",
  "https://resources.stuff.co.nz/content/dam/images/1/p/c/n/0/t/image.related.StuffLandscapeSixteenByNine.1420x800.1pcnci.png/1523490970281.jpg?format=pjpg&optimize=medium"
);

// 5. This next function also doesn't require any parameters: write a function that always removes the
// last `<li>` from the Arguments `<ul>`  (try looking up "last child" and the `.remove` method).
// This is a bit tricky, but doable!

function removeLastArgument() {
  const argumentList = document.querySelector("#arguments");
  argumentList.lastElementChild.remove();
}

// 6. Now use it to remove the last two items from that list. You'll need to call it twice!

removeLastArgument();
removeLastArgument();

// 7. Write a function that takes in two strings, one representing a font size and one representing
// an id, and sets the thing with that id to have that size for its text.

function fontSizeSetter(fontSize, id) {
  const item = document.querySelector(`#${id}`);
  item.style.fontSize = `${fontSize}px`;
}

// 8. Try using it to change the size of any text on the page.

fontSizeSetter(64, "thing-1");

// Part Two - DOM Elements as Function Parameters

// These functions will take in a DOM element, complete with all the properties and sub-properties
// that come with it. They then manipulate that element according to the specifications below.
// They still don't `return` anything.

// Whether you create them with `document.createElement` or query an already-existing element with
// `document.querySelector`, these particular functions will be working with elements. **While
// testing each of these, you'll need to pass them a DOM element.** Keep in mind as you write the
// function that its parameter WILL be an element, and when you go to use/test each one, be sure
// you're passing what that function expects: a DOM Element!

// Okay, here are those challenges:

// 1. Write a function that takes in a DOM element and appends it to the Arguments `<ul>`.

function argumentAppender(domElement) {
  const argsUl = document.querySelector("#arguments");
  argsUl.appendChild(domElement);
}

const newElement = document.createElement("li");

newElement.innerText = "New list item.";

argumentAppender(newElement);

// 2. Let's use it! Create an image element and pass it into your function. (Note that a `<ul>`
// doesn't HAVE to have an `<li>` as its only children! Though ideally it should...) You'll know
// you've succeeded when the image shows up at the end of the Arguments list. Note that the image
// doesn't HAVE to have a `src` attribute... though it does if you want to see an actual IMAGE;
// otherwise the way to check would be to use your dev tools to check the DOM and see if the `img`
// tag got appended.

const newImageElement = document.createElement("IMG");

newImageElement.src =
  "https://i.pinimg.com/474x/e0/30/1d/e0301dc9362c8112c25a0f1d13a4cc7f.jpg";

argumentAppender(newImageElement);

// 3. Write a function that takes in an image element and makes its height 30 pixels.

function imageHeightSetter(imageElement) {
  const image = document.querySelector("IMG");
  imageElement.style.height = "30px";
}

// 4. Let's use it. Query and then pass in to the function one of the images in the Image Area.
// It should become a small 30-pixel image.

const makeImageSmall = document.querySelector("#image-2");

imageHeightSetter(makeImageSmall);

// 5. Write a function that takes in an element and gives it the class `invisible`.

function makeInvisible(domElement) {
  domElement.classList.add("invisible");
}

// 6. Now query an element on the page and pass it into that function. You should see it disappear!
// (Feel free to check the CSS file to see how this class works.)

const header = document.querySelector("h1");
makeInvisible(header);

// Part Three - Creating DOM Elements

// These functions will all take in parameters and use them to make and return new DOM elements.
// They don't do _anything_ to the DOM. So to test them, we'll have to use our earlier functions.

// 1. Write a function that takes in text and returns a new `<li>` with that text as its `innerText`.

function createListItem(textString) {
  const listItem = document.createElement("li");
  listItem.innerText = textString;
  return listItem;
}

// 2. Test it by calling it with some text, placing the return value in a variable, and passing it to
// your append function from Step 1 of Part 2.

const newListItem = createListItem(
  "this is the text on the new list item after the pic."
);

argumentAppender(newListItem);

// 3. Write a function that takes in two strings, one representing a header size and one some text,
// and returns a new header of that size (e.g., a '3' for the first parameter should result in an
// `<h3>`) with that text in it.

function createHeader(size, text) {
  const header = document.createElement(`h${size}`);
  header.innerText = text;
  return header;
}

// 4. Test it by calling it with a header size and some text, placing the return value in a variable,
// and passing it to your append function from Step 1 of Part 2.

const NewHeader = createHeader(3, "Created Header.");

argumentAppender(NewHeader);
