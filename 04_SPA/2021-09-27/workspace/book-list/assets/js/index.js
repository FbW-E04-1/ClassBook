const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

let booksClone = [...books];
booksClone.sort((a, b) => {
  // 
  // a 
  //{
  //   title: "The Design of EveryDay Things",
  //   author: "Don Norman",
  //   alreadyRead: false,
  //   img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  // },
  // 
  // authorName = a.author; // "Don Norman" => "Norman Don"
  // authorA = reverseAuthorName(a.author) // "Norman Don"
  let authorA = reverseAuthorName(a.author);
  let authorB = reverseAuthorName(b.author);

  // let authorA = a.author;
  // let authorB = b.author;
  // if (reverseAuthorName(a.author) < reverseAuthorName(b.author)) {
  //   return -1;
  // } else {
  //   return 1;
  // }
  return authorA.localeCompare(authorB);
})

let bookListElement = document.querySelector(".book-list");

function reverseAuthorName(name) {
  let splitName = name.split(" ");
  splitName.reverse();

  let reversedName = splitName.join(", ");
  return reversedName;
}

booksClone.forEach((book) => {
  // console.log(book)
  // console.log(book.title)
  // console.log(book.author)
  // console.log(book.alreadyRead)
  // console.log(book.img)
  let liElement = document.createElement("li");
  // TODO: try to add a single string with space
  liElement.classList.add("card", "book");

  let pictureWrap = document.createElement("div");
  pictureWrap.classList.add("card-picture");

  let picture = document.createElement("img");
  picture.classList.add("book-cover", "card-img-top", "img-fluid");
  picture.src = book.img;

  pictureWrap.appendChild(picture);
  liElement.appendChild(pictureWrap);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let bookTitle = document.createElement("h3");
  let bookAuthor = document.createElement("h4");

  bookTitle.classList.add("card-title");
  bookAuthor.classList.add("card-subtitle");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = reverseAuthorName(book.author);

  reverseAuthorName(book.author);
  cardBody.appendChild(bookTitle);
  cardBody.appendChild(bookAuthor);

  liElement.appendChild(cardBody);

  let cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer", "text-right");
  let badge = document.createElement("div");

  badge.classList.add("badge", "rounded-pill", "text-light");

  badge.textContent = book.alreadyRead ? "read" : "to read";

  if (book.alreadyRead) {
    badge.classList.add("bg-success");
  } else {
    badge.classList.add("bg-secondary");
  }

  cardFooter.appendChild(badge);
  liElement.appendChild(cardFooter);

  bookListElement.appendChild(liElement);
});
