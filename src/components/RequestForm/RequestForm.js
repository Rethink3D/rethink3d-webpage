import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./RequestForm.css";
import sendRequest from "./sendRequest";

const RequestForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setCharCount(text.length);
      setValue("description", text);
    }
  };

  const formatPhoneNumber = (value) => {
    value = value.replace(/\D/g, "");

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length <= 10) {
      return value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      return value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setValue("phone", formattedPhone);
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setValue("name", name);
  };

  const onSubmit = async (data) => {
    const success = await sendRequest(data);
    if (success) {
      reset();
      setCharCount(0);
    }
  };

  return (
    <section className="request-form">
      <p className="request-title">“Eu quero...”</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="textarea-container">
          <textarea
            {...register("description", {
              required: "Este campo é obrigatório",
              maxLength: {
                value: maxChars,
                message: "Número de caracteres superior ao limite!",
              },
            })}
            placeholder="Descreva as características do que você imagina e precisa."
            onChange={handleDescriptionChange}
          />
          <span className="char-count">
            {charCount}/{maxChars}
          </span>
        </div>
        {errors.description && (
          <span className="error-message">{errors.description.message}</span>
        )}

        <label className="phone-label">Nome:</label>
        <input
          type="text"
          {...register("name", {
            required: "Este campo é obrigatório",
            maxLength: {
              value: 50,
              message: "Número de caracteres superior ao limite!",
            },
          })}
          placeholder="Apenas o primeiro nome"
          onChange={handleNameChange}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}

        <label className="phone-label">Telefone celular/WhatsApp:</label>
        <input
          type="tel"
          {...register("phone", {
            required: "Informe um telefone válido",
            pattern: {
              value: /^\(\d{2}\) \d{4,5}-\d{4}$/,
              message: "Formato inválido! Use (XX) XXXXX-XXXX",
            },
          })}
          placeholder="(98) 98765-4321"
          onChange={handlePhoneChange}
        />
        {errors.phone && (
          <span className="error-message">{errors.phone.message}</span>
        )}

        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default RequestForm;
