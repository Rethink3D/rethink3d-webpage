import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ProductCarousel.css";

import produtoA from "../../assets/images/produto.png";
import produtoB from "../../assets/images/produto.png";
import produtoC from "../../assets/images/produto.png";

const products = [
  {
    id: 1,
    name: "Produto A",
    description: "Descrição do Produto A",
    image: produtoA,
  },
  {
    id: 2,
    name: "Produto B",
    description: "Descrição do Produto B",
    image: produtoB,
  },
  {
    id: 3,
    name: "Produto C",
    description: "Descrição do Produto C",
    image: produtoC,
  },
];

const ProductCarousel = () => {
  return (
    <section className="product-carousel">
      <h2>
        Imagine o que quiser, <br />{" "}
        <span className="highlight">nós cuidamos do resto.</span>
      </h2>
      <h3 className="catalog-title">Catálogo</h3>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="print-text">
        E todos feitos com 
      </p>
      <p className="impressao3d">
       Impressão 3D
      </p>
    </section>
  );
};

export default ProductCarousel;
