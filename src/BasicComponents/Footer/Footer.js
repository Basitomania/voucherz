import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
// import Favorite from "@material-ui/icons/Favorite";
import footerStyle from "../../assets/styles/FooterStyle";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  // const aClasses = classNames({
  //   [classes.a]: true,
  //   [classes.footerWhiteFont]: whiteFont
  // });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.voucherify.io/"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.voucherify.io/"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </ListItem>
          </List>
        </div>
        {/* <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.creative-tim.com"
            className={aClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Tim
          </a>{" "}
          for a better web.
        </div> */}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
