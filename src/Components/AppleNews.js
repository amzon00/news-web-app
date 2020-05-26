import React, { useEffect, useState } from "react";
import Header from "./common/Header";

function AppleNews() {
  const baseUrl =
    "http://newsapi.org/v2/everything?q=apple&from=2020-05-08&to=2020-05-08&sortBy=popularity&apiKey=9a983ecbaaf04168bcf4376b3d8e729a";

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setState(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {state.map((x) => {
            return (
              <div
                className="col-sm-3 "
                style={{
                  border: "groove",
                  borderRadius: "25px",
                }}
              >
                <h5 className="card-title">{x.title}</h5>
                <p
                  style={{
                    float: "right",
                    width: "200px",
                    display: "inline",
                  }}
                  className="card-text"
                >
                  <i>{x.description}</i>
                </p>
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "25px",
                  }}
                  src={x.urlToImage}
                  alt="article-img"
                />
                <br />
                <br />
                <a className="btn btn-outline-info" href={x.url}>
                  Read more
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AppleNews;
