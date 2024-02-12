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
