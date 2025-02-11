import { toast } from "react-toastify";

export default async function sendRequest(data) {
  try {
    const response = await fetch("api/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: data.phone,
        request: data.description,
        name: data.name,
      }),
    });

    let responseData;
    try {
      responseData = await response.json();
    } catch {
      throw new Error("Erro ao processar a resposta do servidor.");
    }

    if (!response.ok) {
      throw new Error(responseData.message || "Erro desconhecido no servidor.");
    }

    toast.success("Solicitação enviada com sucesso! 😁", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    return true;
  } catch (error) {
    toast.error(error.message || "Solicitação falhou!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    return false;
  }
}
