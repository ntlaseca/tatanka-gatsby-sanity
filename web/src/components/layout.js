import React from "react";

import Header from "./header";
import Logo from './icons/logo'
import Instagram from './icons/instagram'

import '../styles/layout.css'
import styles from './layout.module.css'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (this.state.scrolled && window.scrollY <= 10) {
      this.setState({ scrolled: false });
    } else if (!this.state.scrolled && window.scrollY > 10) {
      this.setState({ scrolled: true });
    }
  };

  render() {
    const {
      children,
      onHideNav,
      onShowNav,
      showNav,
      siteTitle,
      navMenuItems,
      textWhite = true,
    } = this.props;
    const { scrolled } = this.state;
    return (
      <>
        <Header
          navMenuItems={navMenuItems}
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
          scrolled={scrolled}
          textWhite={textWhite}
        />
        <>{children}</>
        <footer className={styles.footer}>
          <div className={styles.footerWrapper}>
            <div className={styles.companyLogo}>
              <Logo />
            </div>
            <div className={styles.social}>
              <Instagram />
            </div>
            <div className={styles.siteInfo}>
              Tatanka Travel © {new Date().getFullYear()}. All rights reserved.
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Layout;
