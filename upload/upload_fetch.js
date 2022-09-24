const sendDataFetch = () => {
  console.log("using fetch");
  const textToSend = document.getElementById("tempTextArea").value;
  const jsonObj = JSON.parse(textToSend);
  const jsonText = JSON.stringify(jsonObj);

  fetch("http://localhost:8080/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonText,
  })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => console.log(res.JSON))
    .catch((e) => console.log(e));
};
