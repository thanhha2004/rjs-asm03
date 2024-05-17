import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import ListCarts from "./memo/ListCarts";

function HomePage() {
  const [posts, setPots] = useState([]);
  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((json) => {
        setPots(json);
      });
  }, []);
  // console.log(posts);
  const navigate = useNavigate();

  return (
    <div className={"root"}>
      <header>
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="row">
            <div className="col-lg-6 px-0 right-header ">
              <p>New Inspiration 2020</p>
              <h1>20% off on new season </h1>
              <button onClick={() => navigate("/shop", { replace: true })}>
                Browse collections
              </button>
            </div>
            <div className="col-lg-6 px-0">
              <img
                src="https://i.pinimg.com/564x/bc/61/9b/bc619b8f350f2edcd0facf61f37d96e9.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <section className={"top_list"}>
        <div>
          <p>Crefully Created colletions</p>
          <h2>browse our categories</h2>
        </div>

        <div className={"container"}>
          <div className="row">
            <div className="col square  column clearfix category">
              <img
                src="https://cdn.tgdd.vn/Files/2021/09/16/1383233/appleiphone13_1280x719-800-resize.png"
                alt=""
                onClick={() => navigate("/shop", { replace: true })}
              />
            </div>
            <div className="col square  column clearfix category">
              <img
                src="https://cdn.tgdd.vn/Files/2021/10/24/1393096/line-up-m1_1280x720-800-resize.jpg"
                alt=""
                onClick={() => navigate("/shop", { replace: true })}
              />
            </div>
          </div>
          <div className={"row"}>
            <div className="col-4 square2 column clearfix category">
              <img
                src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/150997/Originals/cellular-ipad-1.jpeg"
                alt=""
                onClick={() => navigate("/shop", { replace: true })}
              />
            </div>
            <div className="col-4 square2 column clearfix category">
              <img
                src="https://cdn.xtmobile.vn/vnt_upload/news/12_2021/08/apple-watch-se-2-co-cong-nghe-moi-xtmobile.jpg"
                alt=""
                onClick={() => navigate("/shop", { replace: true })}
              />
            </div>
            <div className="col-4 square2 column clearfix category">
              <img
                src="https://news.khangz.com/wp-content/uploads/2021/10/so-sanh-AirPods-3-va-AirPods-2-1.jpg"
                alt=""
                onClick={() => navigate("/shop", { replace: true })}
              />
            </div>
          </div>
          <div className="top_list text-start">
            <p>Made The hard way</p>
            <h1>Top trend product</h1>
          </div>
          <div>
            <ListCarts listCarts={posts} />
          </div>
        </div>
        <div className="row footer-content">
          <div className="col-4">
            <h6 className="display-5">Free Shipping</h6>
            <p className="blockquote">Free shipping worlwide</p>
          </div>
          <div className="col-4">
            <h6 className="display-5">Free Shipping</h6>
            <p className="blockquote">Free shipping worlwide</p>
          </div>
          <div className="col-4">
            <h6 className="display-5">Free Shipping</h6>
            <p className="blockquote">Free shipping worlwide</p>
          </div>
        </div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          {/* <p className="">© 2022 Company, Inc</p> */}
          <div className="col-md-4 mb-0 text-muted">
            <h6 className="display-5">Let's be frend's!</h6>
            <p className="blockquote">Nisi nisi tempor consequat laboris nisi</p>
          </div>
          <form>
            <div className="d-flex flex-column flex-sm-row w-200 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Enter your email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </footer>
      </section>
    </div>
  );
}

export default HomePage;
