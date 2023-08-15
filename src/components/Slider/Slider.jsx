import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";

export const Slider = () => {
  const images = [
    {
      original: process.env.PUBLIC_URL + "img/2023-06-0610.33.02.jpg",
      thumbnail: process.env.PUBLIC_URL + "img/2023-06-0610.33.02.jpg",
    },
    {
      original: process.env.PUBLIC_URL + "img/2023-06-0610.33.02.jpg",
      thumbnail: process.env.PUBLIC_URL + "img/2023-06-0610.33.02.jpg",
    },
    {
      original: process.env.PUBLIC_URL + "img/2023-06-0610.33.02.jpg",
      thumbnail: process.env.PUBLIC_URL + "img/2023-06-0610.33.02.jpg",
    },
  ];
  return (
    <ImageGallery items={images}
      showIndex={true}
      thumbnailPosition={'top'}
      showBullets={true}
      slideOnThumbnailOver={true}
    />
  )
}