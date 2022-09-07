// 1.) Explaining the structure
// <head>
// <h1> Title </h1>
// </head>
// <body>
// <input type="text" name="Name" />
// <input type="button" value="Submit" />
// </body>

// Head and body are siblings in the structure, Head has a child H1 and H1 further has a text node 'Title', body has two child input tags and input tags has attributes text and button.

// 2.) Manipulate the title of the page and experiment with other things

// console.log(document.title);
// console.log(document.doctype);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.all);
// document.title = 'changed'

// 3.)answer the following (getElementbyID)

// Difference between innertext and textcontent.
// Make the title have a black border as the youtuber does
// Now make ADD ITEM bold and chage the font color to greeen
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle)
// headerTitle.innerText ='Hello';
// headerTitle.textContent ='Hello1';
// textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements.

// header.style.border = '1px solid black'

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].style.fontWeight = 'bold';
var tit = document.getElementById('AI')
  tit.style.color = 'green';

