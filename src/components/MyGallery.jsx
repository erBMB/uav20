import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import images from './data';



// link exemplu aici https://codesandbox.io/s/8k2kvlnly0?file=/src/index.js:88-146




class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default MyGallery;