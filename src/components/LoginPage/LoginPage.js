import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

import Header from "../../BasicComponents/Header/Header";
import HeaderLinks from "../../BasicComponents/Header/HeaderLinks";
import Footer from "../../BasicComponents/Footer/Footer";
import GridContainer from "../../BasicComponents/Grid/GridContainer";
import GridItem from "../../BasicComponents/Grid/GridItem";
import Button from "../../BasicComponents/CustomButtons/Button";
import Card from "../../BasicComponents/Card/Card";
import CardBody from "../../BasicComponents/Card/CardBody";
import CardHeader from "../../BasicComponents/Card/CardHeader";
import CardFooter from "../../BasicComponents/Card/CardFooter";
import CustomInput from "../../BasicComponents/CustomInput/CustomInput";

import loginPageStyle from "../../assets/styles/loginPage";
import image from "../../assets/img/bg7.jpg";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cardAnimaton: "cardHidden"
        };
      }
      componentDidMount() {
        setTimeout(
          function() {
            this.setState({ cardAnimaton: "" });
          }.bind(this),
          700
        );
      }
      render() {
        const { classes, ...rest } = this.props;
        return (
          <div>
            <Header
              absolute
              color="transparent"
              brand="Material Kit React"
              rightLinks={<HeaderLinks />}
              {...rest}
            />
            <div
              className={classes.pageHeader}
              style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center"
              }}
            >
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes[this.state.cardAnimaton]}>
                      <form className={classes.form}>
                        <CardHeader color="primary" className={classes.cardHeader}>
                          <h4>Login</h4>
                          <div className={classes.socialLine}>
                            <Button
                              justIcon
                              href="#pablo"
                              target="_blank"
                              color="transparent"
                              onClick={e => e.preventDefault()}
                            >
                              <i className={"fab fa-twitter"} />
                            </Button>
                            <Button
                              justIcon
                              href="#pablo"
                              target="_blank"
                              color="transparent"
                              onClick={e => e.preventDefault()}
                            >
                              <i className={"fab fa-facebook"} />
                            </Button>
                            <Button
                              justIcon
                              href="#pablo"
                              target="_blank"
                              color="transparent"
                              onClick={e => e.preventDefault()}
                            >
                              <i className={"fab fa-google-plus-g"} />
                            </Button>
                          </div>
                        </CardHeader>
                        <p className={classes.divider}>Or Be Classical</p>
                        <CardBody>
                          <CustomInput
                            labelText="First Name..."
                            id="first"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "text",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <People className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Email..."
                            id="email"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "email",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Password"
                            id="pass"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "password",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Icon className={classes.inputIconsColor}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              )
                            }}
                          />
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                          <Button simple color="primary" size="lg">
                            Get started
                          </Button>
                        </CardFooter>
                      </form>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
              <Footer whiteFont />
            </div>
          </div>
        );
      }
}


export default withStyles(loginPageStyle)(LoginPage);