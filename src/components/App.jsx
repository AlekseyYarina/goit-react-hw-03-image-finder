import { Component } from 'react';
import { requestImgs } from '../servises/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { STATUSES } from 'utils/constants';

requestImgs();
export class App extends Component {
  state = {
    images: null,
    status: STATUSES.idle,
    error: null,
  };

  componentDidMount() {
    const fetchImgs = async () => {
      try {
        this.setState({ status: STATUSES.pending });
        const images = await requestImgs();
        this.setState({ images, status: STATUSES.success });
      } catch (error) {
        this.setState({ status: STATUSES.error, error: error.massage });
      }
    };

    fetchImgs();
  }

  render() {
    const showImages =
      this.state.status === STATUSES.success &&
      Array.isArray(this.state.images);
    const noImages = showImages && this.state.images.lenght === 0;

    return (
      <div>
        {this.state.status === STATUSES.pending && <p>Loading...</p>}
        {this.state.status === STATUSES.error && (
          <p>Oops...{this.state.error}</p>
        )}
        {noImages && <p>Sorry, no images!</p>}
        {showImages && <ImageGallery images={this.state.images} />}
      </div>
    );
  }
}
