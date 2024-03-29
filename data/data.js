export const users = [
    {
      name: "Sonja",
      email: "sonja@test.com",
      password: "12345",
      suerId: 123456789,
    },
    {
      name: "Oleksii",
      email: "oleksii@test.com",
      password: "12345",
      suerId: 123456788,
    },
    {
      name: "Falk",
      email: "falk@test.com",
      password: "12345",
      suerId: 123456787,
    },
    {
      name: "Test Name",
      email: "test",
      password: "12345",
      suerId: 123456785,
    },
  ];
  
  export const authors = [
    {
      name: "Artur Canon Doyle",
    },
    {
      name: "J.K. Rowling",
    },
    {
      name: "J.R.R. Tolkien",
    },
    {
      name: "Walter Moers",
    },
    {
      name: "Peter Mayle",
    },
    {
      name: "Agatha Christie",
    },
  ];
  
  export const books = [
    {
      title: "Sherlock Holmes",
      subtitle: "",
      author: "Arthur Conan Doyle", // Reference to authors table
      year: "1887",
      isbn: "9781420925532",
    },
    {
      title: "Sherlock Holmes",
      subtitle: "The Hound of the Baskerville",
      author: "Arthur Conan Doyle",
      year: "1902",
      isbn: "9780689835711",
    },
    {
      title: "Harry Potter",
      subtitle: "And the philosopher’s stone",
      author: "J.K. Rowling",
      year: "1997",
      isbn: "3551354014",
    },
  
    {
      title: "Harry Potter",
      subtitle: "And the chamber of secrets",
      author: "J.K. Rowling",
      year: "1998",
      isbn: "978-3-551-35402-0",
    },
    {
      title: "Harry Potter",
      subtitle: "And the prisoner of Ascaban",
      author: "J.K. Rowling",
      year: "1999",
      isbn: "978-3-551-55833-6",
    },
    {
      title: "Lord of the Rings",
      subtitle: "Fellowship of the Rings",
      author: "J.R.R. Tolkien",
      year: "1954",
      isbn: "978-3-608-93981-1",
    },
    {
      title: "Lord of the Rings",
      subtitle: "The Two Towers",
      author: "J.R.R. Tolkien",
      year: "1954",
      isbn: "978-3-608-93982-8",
    },
    {
      title: "Lord of the Rings",
      subtitle: "The Return of the King",
      author: "J.R.R. Tolkien",
      year: "1955",
      isbn: "978-3-608-93983-5",
    },
    {
      title: "Käpt’n Blaubär",
      subtitle: "Die 13 1/2 Leben des Käpt’n Blaubär",
      author: "Walter Moers",
      year: "1999",
      isbn: "978-3-328-10562-6",
    },
    {
      title: "Käpt’n Blaubär",
      subtitle: "Ensel und Krete: Ein Märchen aus Zamonien",
      author: "Walter Moers",
      year: "2000",
      isbn: "978-3-328-10764-4",
    },
    {
      title: "Käpt’n Blaubär",
      subtitle: "Rumo & Die Wunder im Dunkeln",
      author: "Walter Moers",
      year: "2003",
      isbn: "978-3-328-10752-1",
    },
    {
      title: "The Vintage Caper",
      subtitle: "",
      author: "Peter Mayle",
      year: "2009",
      isbn: "978-0-345-80456-2",
    },
    {
      title: "The Marseille Caper",
      subtitle: "",
      author: "Peter Mayle",
      year: "2010",
      isbn: "978-0-307-74095-3",
    },
    {
      title: "The Corsican Caper",
      subtitle: "",
      author: "Peter Mayle",
      year: "2014",
      isbn: "978-0-345-80456-3",
    },
    {
      title: "Agatha Christie",
      subtitle: "And then there were none",
      author: "Agatha Christie",
      year: "1939",
      isbn: "9780312330873",
    },
    {
      title: "Agatha Christie",
      subtitle: "Murder on the Orient Express",
      author: "Agatha Christie",
      year: "1934",
      isbn: "9780007119318",
    },
    {
      title: "Agatha Christie",
      subtitle: "Death on the Nile",
      author: "Agatha Christie",
      year: "1937",
      isbn: "978-0-00-752755-7",
    },
  ];
  
  export let user_books = {
    suerId: 123456789,
    books: [],
  };