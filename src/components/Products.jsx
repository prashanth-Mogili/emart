import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (<>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
    </>);
  };

  const filterProduct =(category) =>{
    const updateList = data.filter((x) => x.category === category);
    setFilter(updateList);

  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-3">
          <button className="btn-outline-dark me-2" onClick={() =>
            setFilter(data)}>All</button>
          <button className="btn-outline-dark me-2" onClick={()=>
        filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn-outline-dark me-2" onClick={()=>
        filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn-outline-dark me-2" onClick={()=>
        filterProduct("jewelery")}>Jewelery</button>
          <button className="btn-outline-dark me-2" onClick={()=>
        filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((prod) => {
            console.log(prod);
          return (
            <>
              <div className="col-md-3 mb-3">
                <div className="card h-100 text-center" key={prod.id}>
                  <img className="card-img-top" src={prod.image} alt={prod.title} height="250px" />
                  <div className="card-body">
                    <h5 className="card-title">{prod.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">
                      {prod.price}$
                    </p>
                    <NavLink to={`/products/${prod.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
