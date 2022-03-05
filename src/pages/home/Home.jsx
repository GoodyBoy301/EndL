import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Hero from "../../components/hero/index";


function Home() {
  const hashtags = "EndL";
  const Broadcast = encodeURI(
    "Join the NASA movement; 'end 7 O'Clock Lectures' \n bhpwt.csb.app"
  );
  const whatsappTags = `%23EndL;`;

  return (
    <React.Fragment>
      <Hero />

      <div className="home">
        <section className="infoSection">
          <img src="/assets/img/fist.jpg" className="fistImage" alt="" />
          <h3>
            Ways you can support the <br /> <span>&#60;&#60;EndL;</span>{" "}
            movement
          </h3>

          <div className="boxesContainer">
            <a
              href="https://www.notion.so/endl-dc3d6261282a4f8eb37d721a92dff17b"
              target="_blank"
              rel="noreferrer noopener"
              className="infoBox"
            >
              <img src="/assets/svg/flag.svg" width={60} height={60} alt="" />
              <h4>Join The Movement </h4>
            </a>

            <a
              href={`http://twitter.com/intent/tweet?hashtags=${hashtags}`}
              target="_blank"
              rel="noreferrer noopener"
              className="infoBox"
            >
              <img
                src="/assets/svg/twitter.svg"
                width={60}
                height={60}
                alt=""
              />
              <h4>Tweet</h4>
            </a>

            <Link to="/sug-officers" className="infoBox">
              <img src="/assets/svg/quill.svg" width={60} height={60} alt="" />
              <h4>Remind SUG officers</h4>
            </Link>

            <p className="infoBox">
              <div className="iconGroup">
                <a
                  href={`https://api.whatsapp.com/send?phone&text=${Broadcast}${whatsappTags}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-whatsapp-square"></i>
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}&quote=${Broadcast}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>

                <a
                  href={`https://telegram.me/share/url?url=${window.location}&text=${Broadcast}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fab fa-telegram"></i>
                </a>
              </div>

              <h4>Broadcast</h4>
            </p>
          </div>
        </section>
        <footer className="footer">
          <section>
          <section>
            <h2>
              <i className='fas fa-user'></i> Curated with &#10084; by
            </h2>

            <ul>
              <li>
                <a
                  href='https://twitter.com/__urama'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  GoodyBoy301
                </a>
              </li>
            </ul>
          </section>
          <section className="styles.contributors">
            <h2>
              <i className='fas fa-laptop-code'></i>
              Forked and inpired by
            </h2>
            <ul >
              <li>
                <a
                  href='https://twitter.com/kadetXx'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  kadetXx  
                </a>
                <span>  => <a href="hrrps://endsars.vercel.app">  #EndSARS</a></span>
              </li>
            </ul>
          </section>
          </section></footer>
      </div>
    </React.Fragment>
  );
}

export default Home;
