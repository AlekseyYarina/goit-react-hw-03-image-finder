import { Component } from 'react';
import { requestImgs } from '../servises/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { STATUSES } from 'utils/constants';
import { ErrorMessage } from './error/error';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

requestImgs();
export class App extends Component {
  state = {
    images: null,
    status: STATUSES.idle,
    error: null,
    seachTerm: '',
  };

  componentDidMount() {
    const fetchImgs = async () => {
      try {
        this.setState({ status: STATUSES.pending });
        const images = await requestImgs();
        this.setState({ images, status: STATUSES.success });
      } catch (error) {
        this.setState({ status: STATUSES.error, error: error.message });
      }
    };

    fetchImgs();
  }

  render() {
    const showImages =
      this.state.status === STATUSES.success &&
      Array.isArray(this.state.images);

    return (
      <div>
        <Searchbar />
        {this.state.status === STATUSES.pending && <Loader />}
        {this.state.status === STATUSES.error && (
          <ErrorMessage error={this.state.error} />
        )}
        {showImages && <ImageGallery images={this.state.images} />}
      </div>
    );
  }
}
