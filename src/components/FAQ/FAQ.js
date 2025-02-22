import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq">
      <h2>FAQ</h2>
      <div className="faq-item">
        <h3>
          O que acontecerá quando eu clicar em{" "}
          <span className="bold">enviar?</span>
        </h3>
        <p>
          Um Maker será contactado e nossa equipe levantará um orçamento
          adequado ao seu pedido. Assim, um de nossos agentes entrará em contato
          por telefone e/ou WhatsApp para atender à sua solicitação e explicar
          todos os detalhes até a aquisição de seu novo produto.
        </p>
      </div>
      <div className="faq-item">
        <h3>
          O que são <span className="bold">Makers?</span>
        </h3>
        <p>
          <strong>'Makers'</strong> são as pessoas responsáveis pelos serviços
          de impressão e modelagem 3D. Assim como você, são clientes de nossa
          plataforma.
        </p>
      </div>
      <div className="faq-item">
        <h3>Eu serei cobrado após preencher esse formulário?</h3>
        <p>
          De maneira alguma: até que você feche negócio com um de nossos Makers,
          todo o processo é livre de custos.
        </p>
      </div>
      <div className="faq-item">
        <h3>
          O que é a <span className="bold">Rethink3D?</span>
        </h3>
        <p>
          A <strong>Rethink3D</strong> é uma startup que visa revolucionar o
          mercado de impressão 3D, conectando as necessidades das pessoas a quem
          possa suprí-las.
        </p>
      </div>
      <div className="faq-item">
        <h3>Onde posso encontrar mais modelos 3D?</h3>
        <p>
          Existem diversos sites especializados onde você pode baixar modelos 3D
          gratuitos.{" "}
          <a
            href="https://3dlab.com.br/24-sites-para-baixar-modelos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confira aqui!
          </a>
        </p>
      </div>
      <div className="faq-item">
        <h3>
          Sou um <span className="bold">Maker! Como posso participar?</span>
        </h3>
        <p>
          Que legal! Entre em contato conosco pelo Instagram e lhe
          daremos todas as informações necessárias para nossa parceria.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
