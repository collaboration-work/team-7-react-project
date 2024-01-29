// After importing the context hook, we create a loop to iterate through the books! To ensure that the loop works, we use console log!

import { useContext } from "react";
import { BookContext } from "../context/Bookcontext";

const HomePage = () => {
  const { books } = useContext(BookContext);
  return books.map((e) => {
    console.log(e);
  });
};

export default HomePage;
