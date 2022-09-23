const sendData = () => {
  const textToSend = document.getElementById("tempTextArea").value;
  const jsonObj = JSON.parse(textToSend);
  const jsonText = JSON.stringify(jsonObj);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", `http://localhost:8080/data`);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = () => {
    console.log(xhr.responseText);
  };
  xhr.onerror = () => {
    console.log("Something went wrong habibi");
  };
  xhr.send(jsonText);
};
