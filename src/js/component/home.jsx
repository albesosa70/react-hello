import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        //{" "}
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3 p-3">
        <div className="jumbotron jumbotron-fluid bg-light p-3">
          <div className="p-3 text-white"></div>
          <h1>A warm Welcome!</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            laudantium neque dolore culpa similique cupiditate impedit quos
            possimus esse non!
          </p>
          <p>
            <a
              href="https://www.webnots.com/free-ebooks-for-bloggers-and-webmasters/"
              target="_blank"
              className="btn
btn-primary btn-lg"
            >
              Call to action!
            </a>
          </p>
        </div>

        <div className="row">
          <div className="col-md-3 p-3">
            <div className="card" style={{ width: 300 }}>
              <img src="rigo-baby.jpg" alt="" style={{ width: 300, height: 125 }} />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  delectus nam minus accusamus fugiat consectetur ad rerum at a
                  alias!
                </p>
                <a href="#" className="btn btn-primary text-center">
                  Find out more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card" style={{ width: 300 }}>
              <img src="rigo-baby.jpg" alt="" style={{ width: 300, height: 125 }} />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  delectus nam minus accusamus fugiat consectetur ad rerum at a
                  alias!
                </p>
                <a href="#" className="btn btn-primary">
                  Find out more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card" style={{ width: 300 }}>
              <img src="rigo-baby.jpg" alt="" style={{ width: 300, height: 125 }} />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-tex">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  delectus nam minus accusamus fugiat consectetur ad rerum at a
                  alias!
                </p>
                <a href="#" className="btn btn-primary">
                  Find out more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card" style={{ width: 300 }}>
              <img src="rigo-baby.jpg" alt="" style={{ width: 300, height: 125 }} />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  delectus nam minus accusamus fugiat consectetur ad rerum at a
                  alias!
                </p>
                <a href="#" className="btn btn-primary">
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-dark text-center text-white">
        <div class="container p-5 pb-0">
          <p>Copyright © Your Website</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
