import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { imgUrl, title, myDesc, newsUrl, date, author, source } = this.props;
    let defaultImage =
      "https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I=";
    return (
      <>
        <div className="my-2 col-md-4">
          <div className="card">
              <div style={{display:"flex",justifyContent:"flex-end", position:"absolute", right:"0" }}>
                  
                    <span
                    className="badge rounded-pill bg-dark"
                    >
                    {!source ? "Unknown" : source}
                    </span>
                </div>
            <img
              src={!imgUrl ? defaultImage : imgUrl}
              className="card-img-top"
              alt="NewsImage"
            />
            <div className="card-body">
              <strong className="d-inline-block mb-2 text-primary">
                By {!author ? "Unknown" : author}
              </strong>
              <span className="mb-1 mx-2 text-muted">
                {new Date(date).toLocaleDateString()}
              </span>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{myDesc}</p>
              <a href={newsUrl} className="btn btn-dark btn-sm">
                Continue reading
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
