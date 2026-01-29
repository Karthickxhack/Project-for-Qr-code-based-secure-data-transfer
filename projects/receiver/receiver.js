const params = new URLSearchParams(window.location.search);
const encryptedData = params.get("data");

function decryptData() {
  const key = document.getElementById("key").value;

  if (!encryptedData || !key) {
    document.getElementById("output").innerText =
      "Invalid QR or missing key";
    return;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);

    if (!originalText) {
      document.getElementById("output").innerText = "Wrong secret key!";
    } else {
      document.getElementById("output").innerText = originalText;
    }
  } catch {
    document.getElementById("output").innerText = "Decryption failed!";
  }
}