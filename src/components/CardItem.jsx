const CardItem = ({ thumbnail, title, price }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={thumbnail}
              alt="There is no book cover for this product!"
            />
            <div className="card-body">
              <span className="card-title">{title}</span>{" "}
              <span className="card-title">{price}</span>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
