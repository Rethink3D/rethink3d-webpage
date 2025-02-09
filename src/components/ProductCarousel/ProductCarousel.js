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
    name: "Caixa para Baralho",
    description:
      "Uma caixa para guardar seus jogos de baralho (UNO, Pokémon TCG, Yu-Gi-Oh!, Magic the Gathering, etc.)",
    image:
      "https://makerworld.bblmw.com/makerworld/model/US8624c87707b05f/design/2025-02-05_c3b9226918525.png?x-oss-process=image/resize,w_1000/format,webp",
  },
  {
    name: "Cubone (Pokémon)",
    description: "Pokémon Cubone em tamanho real, feito com filamentos bege, latte, jade e preto.",
    image:
      "https://makerworld.bblmw.com/makerworld/model/USc8f9500fb2c50a/design/2025-02-05_ba8b652c8cedf.jpg?x-oss-process=image/resize,w_1000/format,webp",
  },
  {
    name: "Produto C",
    description: "Descrição do Produto C",
    image:
      "https://makerworld.bblmw.com/makerworld/model/US8624c87707b05f/design/2025-02-05_c3b9226918525.png?x-oss-process=image/resize,w_1000/format,webp",
  },
];

const ProductCarousel = () => {
  return (
    <section className="product-carousel">
      <h2 className="center">Imagine o que quiser,</h2>
      <h2 className="center2">nós cuidamos do resto.</h2>
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
          <SwiperSlide key={product.name}>
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="print-text">E todos feitos através da</p>
      <p className="impressao3d">Impressão 3D</p>
    </section>
  );
};

export default ProductCarousel;
