my_book = {
  title: "Rich Dad Poor Dad",
  author: "Robert",
  year: "1997",
  print: function () {
    console.log(...this.title, " ", ...this.year);
  },
};

my_book.print();

//Output : R i c h   D a d   P o o r   D a d   1 9 9 7
