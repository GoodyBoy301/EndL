import React from "react";
import "./styles.css";

function Officer({ name, office, department, email }) {
  return (
    <div className="politician">
      <div className="title">
        <h2> {name} </h2>
      </div>

      <p>
        <b>
          <i className="fas fa-map-marker-alt"></i>
        </b>{" "}
        <span>{office}</span>
      </p>

      {email ? (
        <React.Fragment>
          <a
            href={`mailto:${email}?subject=${subject}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>
              <i className="fas fa-envelope"></i>
            </b>
            <span>{email}</span>
          </a>
        </React.Fragment>
      ) : (
        <p>
          <b>
            <i className="fas fa-envelope"></i>
          </b>
          <span>Not available</span>
        </p>
      )}
    </div>
  );
}

export default Officer;
