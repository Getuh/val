function showMessage(response) {
    if (response === "Ei") {
      const noButton = document.getElementById("no-button");
      const container = document.querySelector(".container");
      const maxWidth = window.innerWidth - noButton.offsetWidth;
      const maxHeight = window.innerHeight - noButton.offsetHeight;
  
      noButton.style.position = "absolute";
  
      document.getElementsByClassName("image")[0].src = "images/mad.jpg";
  
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
  
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
  
      document.getElementById("question").textContent =
        "lolololololololololololololololololololololololololololololololololololololololololololololololololol";
      document.getElementById("name").style.display = "none";
  
    }
  
    if (response === "Jahhh") {

        document.getElementById("name").remove();
      document.getElementById("no-button").remove();
  
      const yesMessage = document.getElementById("question");
      yesMessage.textContent = "Appi!! Ootan 14ndal sõrmust!!!!!";
      yesMessage.style.display = "block";
      yesMessage.style.fontStyle = "normal";
      document.getElementsByClassName("image")[0].src = "images/dance.gif";
  
      document.getElementById("yesButton").remove();
    }
  }