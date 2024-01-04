import { Component } from 'react';
import { requestImgs } from '../servises/api';
import { ImageGallery } from './ImageGallery/ImageGallery';

requestImgs();
export class App extends Component {
  state = {
    images: null,
    status: 'idle',
    error: null,
  };

  componentDidMount() {
    const fetchImgs = async () => {
      try {
        const images = await requestImgs();
        this.setState({ images, status: 'success' });
      } catch (error) {
        this.setState({ status: 'error', error });
      }
    };

    fetchImgs();
  }

  render() {
    return (
      <div>
        {' '}
        <ImageGallery images={this.state.images} />{' '}
      </div>
    );
  }
}
