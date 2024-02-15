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

const base64toBlob = (base64Data) => {
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
