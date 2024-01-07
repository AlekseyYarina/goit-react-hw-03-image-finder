import { Component } from 'react';
import { requestImgsByQuery } from '../servises/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { STATUSES } from 'utils/constants';
import { ErrorMessage } from './error/error';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: null,
    status: STATUSES.idle,
    error: null,
    searchTerm: '',
    page: 1,
    isOpenModal: false,
    modalData: null,
  };

  fetchImgsByQuery = async (searchTerm, page) => {
    try {
      this.setState({ status: STATUSES.pending });

      const images = await requestImgsByQuery(searchTerm, page);

      if (images.length === 0) {
        this.setState({
          status: STATUSES.error,
          error: (
            <>
              There are no images matching your request.
              <br />
              Please change your request.
            </>
          ),
        });
      } else {
        this.setState({ images, status: STATUSES.success });
      }
    } catch (error) {
      this.setState({ status: STATUSES.error, error: error.message });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchTerm !== this.state.searchTerm ||
      prevState.page !== this.state.page
    ) {
      this.fetchImgsByQuery(this.state.searchTerm, this.state.page);
    }
  }

  handleSearch = (searchTerm, page) => {
    this.setState({ searchTerm, page: 1 }, () => {
      this.fetchImgsByQuery(this.state.searchTerm, this.state.page);
    });
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchImgsByQuery(this.state.searchTerm, this.state.page);
      }
    );
  };

  handleTakeLargeImage = (largeImageUrl) =>
  {this.setState({ isOpenModal: true,
    modalData: largeImageUrl,
  })}

handleCloceModal=() => {this.setState({ isOpenModal: false,
})}

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
        {showImages && (
          <div>
            <ImageGallery images={this.state.images} handleTakeLargeImage={this.handleTakeLargeImage}/>
            <Button onClick={this.handleLoadMore} />
            {this.state.isOpenModal && (<Modal modalData={this.state.modalData} handleCloceModal={this.handleCloceModal}/>)}
          </div>
        )}
      </div>
    );
  }
}
