const share = e => {
    if (navigator.share) {
      navigator
        .share({
          title: "Quespap",
          text: "Hello, are you looking for an exam paper or quiz creator, if yes then take a go through on this url:",
          url: window.location.href
        })
        .then(() => console.log("thanks for share"))
        .catch(error => console.log("error", error));
    }
  };
  if(!navigator.share) {
    document.getElementById('tip').className = 'show'
  }
  document.getElementById("share").addEventListener("click", share);
  