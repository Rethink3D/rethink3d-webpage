// src/pages/LandingPage.js
import React from 'react';
import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
  const products = [
    {
      title: 'Produto A',
      description: 'O Produto A é feito com materiais políméricos. Perfeito para decoração em seu quarto/casa.',
    },
    {
      title: 'Produto B',
      description: 'O Produto B é uma peça metálica e pode ser personalizado de acordo com...',
    },
    {
      title: 'Produto C',
      description: 'O Produto C é o que você precisa se está buscando uma solução prática para...',
    },
  ];

  return (
    <div>
      <Header />
      <section>
        {products.map((product, index) => (
          <ProductCard key={index} title={product.title} description={product.description} />
        ))}
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;