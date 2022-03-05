import React from "react";
import "./styles.css";
import Type from "../../components/typewriter/index";
import Header from "../../components/header/index";

function Hero() {
  return (
    <React.Fragment>
      <div>
        <div className="hero">
          <Header transparent={true} />
          <div className="caption">
            <h2>
              END{" "}
              <span className="captionBold">
                <Type />
              </span>
              <br /> Let Our Voices be Heard! <br />{" "}
              <span className="captionBold">&#60;&#60;EndL;</span>
            </h2>
            <a
              className="about"
              href="https://stream-school-597.notion.site/endl-dc3d6261282a4f8eb37d721a92dff17b"
              rel="noopener noreferrer"
              target="_blank"
            >
              About This Movement
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
