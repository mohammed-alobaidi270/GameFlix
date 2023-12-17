const getCroppedImageUrl = (url: string | null) => {
  const target = "media/";
  if(url != null){
      const index = url.indexOf(target) + target.length;
      return url.slice(0, index) + "crop/600/400/" + url.slice(index);
  }
  return '';
};
export default getCroppedImageUrl;
