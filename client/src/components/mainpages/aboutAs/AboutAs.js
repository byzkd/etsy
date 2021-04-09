import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";

function AboutAs() {
  return (
    <>
      <div className="detail">
        <img src={"../../images/about-as.jpg"} alt="" />
        <div className="box-detail">
          <div className="row">
            <h2>De Luxe Flowers</h2>
          </div>
          <p>
            Solmayan gül, özel bir işlemden geçirilerek ömrü 2 ila 4 yıla kadar
            uzatılan güllerdir. Güllere bir anlamda şoklama yöntemi uygulanıyor
            ve bu sayede hem formlarını hem de renklerini korumaları sağlanıyor.
            <br />
            Sevdiklerinize gönül rahatlığıyla geniş bir renk skalası sunan bu
            özel gülleri gönderebilirsiniz.
          </p>
          <h3>Adres :</h3>
          <p>
            {" "}
            Esentepe mahallesi Öğretim sokak <br />
            Kervancı Rezidans Kat: 7
            <br />
            Çorlu/ Tekirdağ
          </p>
          <p>Tüm siparişlerimiz Whatsapp üzerinden yapılmaktadır.</p>
          <h3>İletişim :</h3>
          <div className="row_btn">
            <a
              id="btn_buy"
              href="https://wa.me/905415456780"
              target="_blank"
              rel="noopener noreferrer"
              to="#!"
              //onClick={() => addCart(detailProduct)}
            >
              Whatsapp
              <i
                style={{ marginLeft: "10px" }}
                class="fa fa-whatsapp whatsapp-icon"
              ></i>
            </a>
            <a
              id="btn_buy"
              href="https://www.instagram.com/deluxeflowers.tr/?hl=tr"
              target="_blank"
              rel="noopener noreferrer"
              to="#!"
              //onClick={() => addCart(detailProduct)}
            >
              Instagram
              <i style={{ marginLeft: "10px" }} class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* <div>
        <h2>Önerilen Ürünler</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div> */}
    </>
  );
}

export default AboutAs;
