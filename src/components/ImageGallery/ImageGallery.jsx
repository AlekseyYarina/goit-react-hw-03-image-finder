import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images &&
        Array.isArray(images) &&
        images.map(image => <ImageGalleryItem key={image.id} image={image} />)}
    </ul>
  );
};
