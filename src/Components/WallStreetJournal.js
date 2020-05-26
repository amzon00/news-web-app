import React, { useState, useEffect } from "react";
import Header from "./common/Header";

function WallStreetJournal() {
  const baseUrl =
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9a983ecbaaf04168bcf4376b3d8e729a";

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
        <u> Wall Street Journal News </u>{" "}
      </h2>{" "}
      <br />{" "}
      {state.map((singleNews) => {
        return (
          <div className="container">
            <img
              style={{ height: "400px", width: "400px" }}
              className="card-img-top"
              src={singleNews.urlToImage}
              alt="article-img"
            />
            <div className="card-body">
              <h5 className="card-title">{singleNews.title}</h5>
              <p className="card-text">{singleNews.description}</p>
              <a className="btn btn-primary" href={singleNews.url}>
                Read more
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WallStreetJournal;
