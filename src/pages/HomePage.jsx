// Now that our loop is functioning smoothly, it's time to craft a component for each iteration.
// Our desired component is the "CardItem". We'll import the "CardItem" and pass the books keys as props to it

import { useContext } from "react";
import { BookContext } from "../context/Bookcontext";
import CardItem from "../components/CardItem";

const HomePage = () => {
  const { books } = useContext(BookContext);
  return books.map((e) => {
    return <CardItem key={e.id} title={e.volumeInfo.title} />;
  });
};

export default HomePage;
