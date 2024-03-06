import { JWT_TOKEN } from "./global";
const jwt = require("jsonwebtoken");

export const handleTmpUrl = async () => {
  const element = document.getElementById("print");

  if (element) {
    const canvas = await html2canvas(element);
    const imageUrl = canvas.toDataURL("image/jpg");
    return imageUrl;
  }
  return null;
};

export const handleDownload = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = "downloaded.ext";
  link.click();
};

export const base64toBlob = (base64Data) => {
  const byteString = atob(base64Data.split(",")[1]);
  const mimeString = base64Data.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};

export const downloadStringImage = (imageData, fileName) => {
  const blob = base64toBlob(imageData);
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName || "image.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

export const generateToken = async (email, code) => {
  const secret = JWT_TOKEN;
  const token = jwt.sign({ email, code }, secret, { expiresIn: "365d" });
  return token;
};

export function decodeToken(token) {
  const secret = JWT_TOKEN;
  const decoded = jwt.verify(token, secret);
  return decoded;
}

export const convertImageToBase64 = async (imageFile) => {
  if (imageFile instanceof File && imageFile.type.startsWith("image/")) {
    return new Promise((resolve, reject) => {
      if (!imageFile || !(imageFile instanceof File)) {
        reject("Invalid image file");
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        resolve(e.target.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(imageFile);
    });
  } else {
    return imageFile;
  }
};

export const clickSound = () => {
  const audio = new Audio(
    "https://cdn.pixabay.com/download/audio/2023/06/15/audio_a0e2c53290.mp3?filename=mouse-click-153941.mp3"
  );
  audio.preload = "auto";
  audio.load();
  audio.play();
};
