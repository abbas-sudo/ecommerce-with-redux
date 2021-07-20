import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div class="container-fluid">
      <div class="row">
        {products.map((product) => {

          return (
            <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-5">
                <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                  <div className="card" style={{ height: "600px" }}>
                    <img className="card-img" style={{ height: "300px" }} src={product.image} alt="Vans" />
                    <div className="card-img-overlay d-flex justify-content-end">
                      <a href="#" className="card-link text-danger like">
                        <i className="fas fa-heart" />
                      </a>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{product.title}</h4>
                      <h6 className="card-subtitle mb-2 text-muted">Style: {product.category}</h6>
                      <p className="card-text">
                        The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool.           </p>
                      <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success"><h5 className="mt-4">${product.price}</h5></div>
                        <button class="btn btn-primary">Details</button>
                      </div>
                    </div>
                  </div>
                </Link>
             
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductComponents
