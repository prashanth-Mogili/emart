import React from "react";

const Home = () => {
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          height={"600px"}
          src="https://img.freepik.com/free-photo/woman-shopping-bags-copy-space_23-2148674356.jpg?w=1060&t=st=1665156409~exp=1665157009~hmac=5a9259dea1b43bb3edfb29a2ced528e136c06c9ee7fd636161d7530e0d348238"
          alt="Card"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container textAlign">
            <h5 className="card-title display-4 fw-bolder me-auto text-white">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs text-white">
              CHECK OUT ALL THE TRENDS
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
