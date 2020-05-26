import React, { useState, useEffect } from "react";
import Header from "./common/Header";

function TheGuardianNews() {
  const baseUrl =
    "https://content.guardianapis.com/search?api-key=829bb6fa-29b5-4557-8816-e8c68e28dc51";
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setState(data.response.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(state);

  return (
    <div>
      <Header />
      <h2 className="text-center my-3">
        {" "}
        <u> The Guardian News </u>{" "}
      </h2>{" "}
      <br />{" "}
      {state.map((singleNews) => {
        return (
          <div className="container">
            <img
              style={{ height: "400px", width: "400px" }}
              className="card-img-top"
              src="https://osis.bg/wp-content/uploads/2020/01/theguardian.jpg"
              alt="article-img"
            />
            <div className="card-body">
              <h5 className="card-title">{singleNews.webTitle}</h5>
              {/* <p className="card-text">{singleNews.description}</p> */}
              <a className="btn btn-primary" href={singleNews.webUrl}>
                Read more
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TheGuardianNews;
