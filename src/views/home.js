import React, { Component } from 'react';
import { Link } from 'react-router';
import { spring, Motion } from 'react-motion';
import Helmet from 'react-helmet';
import Dom from 'utils/dom';

import Masthead from 'components/masthead';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false,
    };
  }

  componentDidMount = () => {
    this.setState({ scrollTo: Dom.getElement('masthead--home').clientHeight });
  };

  onClickScroll = (e) => {
    e.preventDefault();
    this.setState({ scroll: true });
    setTimeout(() => {
      this.setState({ scroll: false });
    }, 1000);
  };

  scrollHandler = (scrollPos) => {
    if (__CLIENT__) {//eslint-disable-line
      const windowStart = Math.floor(window.scrollY);
      const scrollMove = Math.floor(scrollPos);
      if (scrollMove > windowStart && windowStart < this.state.scrollTo) {
        window.scrollTo(0, scrollMove);
      }
    }
  };

  render() {
    const { scroll, scrollTo } = this.state;
    return (
      <Motion style={{ x: spring(scroll ? scrollTo : 0, [125, 20]) }}>
        {(style) => {
          this.scrollHandler(style.x);
          return (
            <div className="content">
              <Helmet title="Front-end Developer"/>
              <div className="masthead__container masthead__container--animate">
                <Masthead className="masthead--home"/>
                <div className="center-absolute text-center">
                  <div className="masthead__title-wrapper">
                    <strong className="masthead__title masthead__title--animate block">
                      Front-end
                    </strong>
                    <strong className="masthead__subtitle masthead__title--animate block">
                      Developer
                    </strong>
                  </div>
                  <Link className="button button--transparent" to="/resume">
                    Resume
                  </Link>
                  <Link className="button button--transparent" to="/contact">
                    Contact
                  </Link>
                </div>
                <i className="icon icon--angle-down" onClick={this.onClickScroll}/>
              </div>
              <div className="content__subsection text-center">
                <div className="content__title-wrapper">
                  <h2 className="content__title content__hr">
                    Alex Buchanan
                  </h2>
                  <h3 className="content__subtitle">
                    A Little Bit About Me
                  </h3>
                </div>
                <div className="image--headshot"/>
                <p className="content__description">
                  I graduated from Boston College in 2011 with a degree in accounting in information systems. After working at PwC for 2 and 1/2 years, I decided to change things up and learn how to code. So, I applied and was accepted into Fullstack Academy and learned the fundamentals of web development. I then accepted a job from Cogo Labs, a tech incubator, as a web engineer. There, I've further refined my front-end skills with a focus on React.
                </p>
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
