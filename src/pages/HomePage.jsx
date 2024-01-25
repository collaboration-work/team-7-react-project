import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../components/CardItem";
import { useContext } from "react";
import { BookContext } from "../context/Bookcontext";

const Homepage = () => {
  const { books } = useContext(BookContext);
  console.log(books);
  return books.map((e) => {
    return (
      <Link>
        <CardItem
          key={e.id}
          thumbnail={e.volumeInfo.imageLinks?.thumbnail}
          title={e.volumeInfo.title}
          price={
            e.saleInfo.retailPrice?.amount &&
            e.saleInfo.retailPrice?.currencyCode
              ? `${e.saleInfo.retailPrice.amount} ${e.saleInfo.retailPrice.currencyCode}`
              : "There is no price for this book"
          }
        />
      </Link>
    );
  });
};
export default Homepage;
