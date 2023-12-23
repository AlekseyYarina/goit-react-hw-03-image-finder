import { Component } from 'react';
import { requestImg } from '../servises/api';

requestImg();
export class App extends Component {
  state = {
    images: null,
    status: 'idle',
    error: null,
  };

  componentDidMount() {
    this.fetchImgs();
  }

  fetchImgs = async () => {
    try {
      const images = await requestImg();
      this.setState({ images, status: 'success' });
      console.log(this.state);
    } catch (error) {
      this.setState({ status: 'error', error });
    }
  };

  render() {
    return <div>test</div>;
  }
}
