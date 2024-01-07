import axios from 'axios';

export const requestImgsByQuery = async (searchTerm, page) => {
  const perPage = 9 * page;
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${searchTerm}&page=1&key=12446809-e6b893a82bb8773aa8d1d047e&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );

  return data.hits;
};
