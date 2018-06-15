import React from 'react';

import './styles/Slideshow.css';

class SlideshowNR extends React.Component {
  constructor() {
    super();
    this.state = {
      slides: ['https://i.imgur.com/6C03fg3.png', 'https://i.imgur.com/QloECMV.png', 'https://i.imgur.com/XWBkvCl.png', 'https://i.imgur.com/MliAr8Z.png'],
      currSlide: 0,
    };
    this.goToSelect = this.goToSelect.bind(this);
  }

  goToNext() {
    if (this.state.currSlide + 1 < this.state.slides.length) {
      this.setState({
        currSlide: this.state.currSlide + 1,
      });
    }
  }

  goToPrev() {
    if (this.state.currSlide - 1 >= 0) {
      this.setState({
        currSlide: this.state.currSlide - 1,
      });
    }
  }

  goToSelect(num) {
    this.setState({
      currSlide: num,
    });
  }

  render() {
    return (
      <div className="slideshow-container">
        {/* <div className="slide"> */}
        <img src={this.state.slides[this.state.currSlide]} style={{ width: '100%' }} />
        <a className="prev" onClick={this.goToPrev.bind(this)}>&#10094;</a>
        <a className="next" onClick={this.goToNext.bind(this)}>&#10095;</a>
        <br />
        <div style={{ 'text-align': 'center', padding: '20px' }}>
          <span className="dot" onClick={() => this.goToSelect(0)} />
          <span className="dot" onClick={() => this.goToSelect(1)} />
          <span className="dot" onClick={() => this.goToSelect(2)} />
          <span className="dot" onClick={() => this.goToSelect(3)} />
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default SlideshowNR;
