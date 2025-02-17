import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ProductCarousel.css";
import rawProducts from "./products.json";
import { useSearchParams } from "react-router-dom";

const ProductCarousel = () => {
  const [products, setProducts] = useState(rawProducts);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      const filteredProducts = rawProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setProducts(filteredProducts);
    }
  }, [category]);

  return (
    <section className="product-carousel">
      <div className="content">
        <h2 className="center">Imagine o que quiser,</h2>
        <h2 className="center2">nós cuidamos do resto.</h2>
        {category && (
          <span className="category">
            <h3>Categoria:</h3>
            <h2>
              {category.toLowerCase() === "action figures" // gambiarra pra corrigir erro de impressão
                ? "Video-game"
                : category}
            </h2>
          </span>
        )}
        <h2 className="userPhrase">"Eu quero..."</h2>
        <h2 className="catalog-title">Catálogo:*</h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        color="white"
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
      <div className="content bottom">
        <p className="print-text">E todos feitos através da</p>
        <p className="impressao3d">Impressão 3D</p>
        <span className="disclaimer">
          *: Os produtos apresentados são meramente ilustrativos e demonstram as
          possibilidades da tecnologia de manufatura aditiva/impressão 3D. Eles
          não estão disponíveis para venda nem fazem parte do portfólio ou
          acervo da Rethink3D. A possibilidade de concepção dos produtos
          apresentados e/ou similares depende das capacidades dos Makers em sua
          região.
        </span>
      </div>
    </section>
  );
};

export default ProductCarousel;
