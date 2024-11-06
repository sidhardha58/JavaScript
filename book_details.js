let bookDetails = {
  name: "Atomic Habits",
  author: "James Clear",
  publishedYear: 2018,
};

for (const attribute in bookDetails) {
  console.log(`${attribute} --> ${bookDetails[attribute]}`);
}
