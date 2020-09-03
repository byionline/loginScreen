import React from "react"
import { Link } from "gatsby"
import "./custom.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  // <Layout>
  //   <SEO title="Page two" />
  //   <h1>Hi from the second page</h1>
  //   <p>Welcome to page 2</p>
  //   <Link to="/">Go back to the homepage</Link>
  // </Layout>

  // Login Screen 1

  <div
    style={{
      backgroundImage: `url("https://rajnish.app/media/image-2.jpg")`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`,
      height: `100%`,
      fontFamily: `Montserrat`,
    }}
  >
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3>Sign In</h3>
          <div className="d-flex justify-content-end social_icon">
            <span>
              <i className="fab fa-google-plus-square"></i>
            </span>
            <span>
              <i className="fab fa-linkedin"></i>
            </span>
            <span>
              <i className="fab fa-github-square"></i>
            </span>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="username"
              />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="password"
              />
            </div>
            <div className="row align-items-center remember">
              <input type="checkbox" />
              Remember Me
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Login"
                className="btn float-right login_btn"
              />
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account?<a href="#">Sign Up</a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SecondPage
