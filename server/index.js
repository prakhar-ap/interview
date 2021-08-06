const express = require('express');
const app = express();

const port = 3001;

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server started at port ${port}`));


const book = {
    "error": "0",
    "total": "1206",
    "page": "1",
    "books": [
      {
        "title": "Effective JavaScript",
        "subtitle": "68 Specific Ways to Harness the Power of JavaScript",
        "isbn13": "9780321812186",
        "price": "$21.99",
        "image": "https://itbook.store/img/books/9780321812186.png",
        "url": "https://itbook.store/books/9780321812186"
      },
      {
        "title": "Learning JavaScript",
        "subtitle": "A Hands-On Guide to the Fundamentals of Modern JavaScript",
        "isbn13": "9780321832740",
        "price": "$8.99",
        "image": "https://itbook.store/img/books/9780321832740.png",
        "url": "https://itbook.store/books/9780321832740"
      },
      {
        "title": "Java Cookbook, 2nd Edition",
        "subtitle": "Solutions and Examples for Java Developers",
        "isbn13": "9780596007010",
        "price": "$3.89",
        "image": "https://itbook.store/img/books/9780596007010.png",
        "url": "https://itbook.store/books/9780596007010"
      },
      {
        "title": "JavaScript: The Good Parts",
        "subtitle": "Unearthing the Excellence in JavaScript",
        "isbn13": "9780596517748",
        "price": "$15.99",
        "image": "https://itbook.store/img/books/9780596517748.png",
        "url": "https://itbook.store/books/9780596517748"
      },
      {
        "title": "Head First JavaScript",
        "subtitle": "A Learner's Companion to JavaScript",
        "isbn13": "9780596527747",
        "price": "$7.72",
        "image": "https://itbook.store/img/books/9780596527747.png",
        "url": "https://itbook.store/books/9780596527747"
      },
      {
        "title": "Sams Teach Yourself Java in 24 Hours, 6th Edition",
        "subtitle": "Covering Java 7 and Android",
        "isbn13": "9780672335754",
        "price": "$5.71",
        "image": "https://itbook.store/img/books/9780672335754.png",
        "url": "https://itbook.store/books/9780672335754"
      },
      {
        "title": "Sams Teach Yourself Java in 24 Hours, 8th Edition",
        "subtitle": "Covering Java 9",
        "isbn13": "9780672337949",
        "price": "$17.79",
        "image": "https://itbook.store/img/books/9780672337949.png",
        "url": "https://itbook.store/books/9780672337949"
      },
      {
        "title": "Pro Java ME Apps",
        "subtitle": "Building Commercial Quality Java ME Apps",
        "isbn13": "9781430233275",
        "price": "$36.22",
        "image": "https://itbook.store/img/books/9781430233275.png",
        "url": "https://itbook.store/books/9781430233275"
      },
      {
        "title": "Expert Oracle and Java Security",
        "subtitle": "Programming Secure Oracle Database Applications With Java",
        "isbn13": "9781430238317",
        "price": "$46.78",
        "image": "https://itbook.store/img/books/9781430238317.png",
        "url": "https://itbook.store/books/9781430238317"
      },
      {
        "title": "JavaScript Creativity",
        "subtitle": "Exploring the Modern Capabilities of JavaScript and HTML5",
        "isbn13": "9781430259442",
        "price": "$30.64",
        "image": "https://itbook.store/img/books/9781430259442.png",
        "url": "https://itbook.store/books/9781430259442"
      }
    ]
  };

  const isbn13 = {
    "error": "0",
    "title": "Securing DevOps",
    "subtitle": "Security in the Cloud",
    "authors": "Julien Vehent",
    "publisher": "Manning",
    "language": "English",
    "isbn10": "1617294136",
    "isbn13": "9781617294136",
    "pages": "384",
    "year": "2018",
    "rating": "5",
    "desc": "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
    "price": "$39.65",
    "image": "https://itbook.store/img/books/9781617294136.png",
    "url": "https://itbook.store/books/9781617294136",
    "pdf": {
      "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
      "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf"
    }
  };

app.get('/book/:name', (req, res) => {
    try {
        res.send(book);
    } catch (e) {
        res.send(e);
    }
});

app.get('/books/:isbn13', (req, res) => {
    try {
        res.send(isbn13);
    } catch (e) {
        res.send(e);
    }
});
