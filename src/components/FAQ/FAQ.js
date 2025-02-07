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
          Nossa equipe entrará em contato por telefone e/ou WhatsApp para
          atender à sua solicitação.
        </p>
      </div>
      <div className="faq-item">
        <h3>Eu serei cobrado após preencher esse formulário?</h3>
        <p>
          De maneira alguma, até que você feche negócio com um de nossos Makers,
          todo o processo é livre de custos.
        </p>
      </div>
      <div className="faq-item">
        <h3>
          O que são <span className="bold">Makers?</span>
        </h3>
        <p>
          'Makers' são as pessoas responsáveis pelos serviços de impressão e
          modelagem 3D. Assim como você, são clientes de nossa plataforma.
        </p>
      </div>
      <div className="faq-item">
        <h3>
          O que é a <span className="bold">Rethink3D?</span>
        </h3>
        <p>
          A Rethink3D é uma startup que visa revolucionar o mercado de impressão
          3D, conectando as necessidades das pessoas a quem possa resolvê-las.
        </p>
      </div>
      <div className="faq-item">
        <h3>Onde posso encontrar modelos 3D?</h3>
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
    </div>
  );
};

export default FAQ;
