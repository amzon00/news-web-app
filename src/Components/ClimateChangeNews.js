import React, { useState, useEffect } from "react";
import Header from "./common/Header";

function ClimateChangeNews() {
  const baseUrl =
    "https://api.breakingapi.com/news?q=climate&type=headlines&locale=en-US&api_key=C75A4DEA445146D99A963F409F7B2DC2";

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setState(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <h2 className="text-center my-3">
        {" "}
        <u> Climate Change News </u>{" "}
      </h2>{" "}
      <br />{" "}
      {state.map((singleNews) => {
        return (
          <div className="container">
            <img
              style={{ height: "400px", width: "400px" }}
              className="card-img-top"
              src={singleNews.image_links}
              alt="article-img"
            />
            <div className="card-body">
              <h5 className="card-title">{singleNews.title}</h5>
              <p className="card-text">{singleNews.snippet}</p>
              <a className="btn btn-primary" href={singleNews.link}>
                Read more
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ClimateChangeNews;
