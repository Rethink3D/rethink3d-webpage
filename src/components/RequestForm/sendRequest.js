export default async function sendRequest(data) {
  try {
    const response = await fetch("/api/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: data.phone,
        request: data.description,
      }),
    });

    const responseData = await response.json();
    return responseData.message;
  } catch (error) {
    return error.message;
  }
}
