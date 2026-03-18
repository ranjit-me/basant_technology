import "./MapProducts.css";
function MapProductes(props) {
  let { products } = props;
  return (
    <div className="container">
      {products.map((item, index) => {
        return (
          <div className="product" key={index}>
            <div className="image">
              <img
                src={item.image}
                alt="image"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="info">
              <h2>{item.name}</h2>
              <p className="rating">{item.rating}</p>
              <ul>
                {item.details.map((d, i) => {
                  return <li key={i}>{d}</li>;
                })}
              </ul>
            </div>
            <div className="price">
              <h2>{item.price}</h2>
              <p className="old">{item.oldPrice}</p>
              <p className="offer">{item.offer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default MapProductes;
