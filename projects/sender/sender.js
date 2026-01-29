function generateQR() {
    document.getElementById("qrcode").innerHTML = "";
  
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;
  
    if (!message || !key) {
      alert("Message and Secret Key required!");
      return;
    }
  
    // AES Encryption
    const encrypted = CryptoJS.AES.encrypt(message, key).toString();
  
    // ⚠️ CHANGE THIS TO YOUR HOSTED RECEIVER URL
    const receiverURL =
  "https://qr-secure-data-transfer.vercel.app/receiver.html";
  
    const secureLink =
      receiverURL + "?data=" + encodeURIComponent(encrypted);
  
    new QRCode(document.getElementById("qrcode"), {
      text: secureLink,
      width: 200,
      height: 200
    });
  }