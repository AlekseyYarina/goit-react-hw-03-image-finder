import { Component } from 'react';
import { requestImgsByQuery } from '../servises/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { STATUSES } from 'utils/constants';
import { ErrorMessage } from './error/error';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: null,
    status: STATUSES.idle,
    error: null,
    searchTerm: '',
  };

  fetchImgsByQuery = async searchTerm => {
    try {
      this.setState({ status: STATUSES.pending });
      const images = await requestImgsByQuery(searchTerm);
      this.setState({ images, status: STATUSES.success });
    } catch (error) {
      this.setState({ status: STATUSES.error, error: error.message });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.fetchImgsByQuery(this.state.searchTerm);
    }
  }

  handleSearch = searchTerm => {
    console.log('searchTerm:', searchTerm);
    this.setState({ searchTerm }, this.fetchImgs);
  };

  render() {
    const showImages =
      this.state.status === STATUSES.success &&
      Array.isArray(this.state.images);

    return (
      <div>
        <Searchbar onSearch={this.handleSearch} />
        {this.state.status === STATUSES.pending && <Loader />}
        {this.state.status === STATUSES.error && (
          <ErrorMessage error={this.state.error} />
        )}
        {showImages && <ImageGallery images={this.state.images} />}
      </div>
    );
  }
}
