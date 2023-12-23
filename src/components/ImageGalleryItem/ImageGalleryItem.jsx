import css from './ImageGalleryItem.module.css';

// {
//     "id": 736877,
//     "pageURL": "https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/",
//     "type": "photo",
//     "tags": "tree, cat, silhouette",
//     "previewURL": "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg",
//     "previewWidth": 150,
//     "previewHeight": 100,
//     "webformatURL": "https://pixabay.com/get/g97e962291957cbae4517c25b332911edcae0f724cad1c4fcfdd835cb64bdde0f776499e6aeef6c701ce790aa4b7497dd_640.jpg",
//     "webformatWidth": 640,
//     "webformatHeight": 427,
//     "largeImageURL": "https://pixabay.com/get/gac6bdda78faa2b17931c22247e8ab1c11a4767c3480787622cc33408cd699ea2fe769c5da0d4158b20eade492fb8dce8fd4df3235f4dd96df1daa250a7a0c32f_1280.jpg",
//     "imageWidth": 1920,
//     "imageHeight": 1282,
//     "imageSize": 97150,
//     "views": 1473397,
//     "downloads": 793691,
//     "collections": 2734,
//     "likes": 3233,
//     "comments": 614,
//     "user_id": 909086,
//     "user": "Bessi",
//     "userImageURL": "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg"
// },

const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li className={ImageGalleryItem}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
