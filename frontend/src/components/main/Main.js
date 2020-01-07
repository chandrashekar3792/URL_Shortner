import React, { Component } from "react";
// import "../../styles/Main.css";
import {Spinner,Alert} from 'reactstrap';
import { createShortUrl } from "../API/URLShortner";
import constants from "../../config/constants";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      showShortenUrl: false,
      shortenUrl: "",
      originalUrl: "",
      customPath: "",
      clickSubmit: true,
      showError: false,
      apiError: "",
      showApiError: false,
      showLoading: false,
      exUrl:
        "https://www.amazon.com/Apple-iPhone-GSM-Unlocked-5-8/dp/B075QMZH2L",
      exShortUrl: constants.customPath
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    this.setState({ showError: false });
  }
  handleSubmit() {
    this.setState({ clickSubmit: true, showApiError: false });
    if (this.state.clickSubmit && this.state.originalUrl) {
      this.setState({ showLoading: true, showShortenUrl: false });
      let reqObj = {
        originalUrl: this.state.originalUrl,
        shortid: this.state.customPath
      };
      createShortUrl(reqObj)
        .then(json => {
          console.log("json",json);
          setTimeout(() => {
            if(!json.data.data.shortUrl.includes("http://" || "https://")){
              json.data.data.shortUrl="http://"+json.data.data.shortUrl
            }
            this.setState({
              showLoading: false,
              showShortenUrl: true,
              shortenUrl: json.data.data.shortUrl
            });
          }, 0);
        })
        .catch(error => {
          this.setState({
            showLoading: false,
            showApiError: true,
            apiError: "Server Error"
          });
        });
    } else {
      this.setState({ showError: true });
    }
  }
  renderButton() {
    if (!this.state.showLoading) {
      return (
        <button 
            className="btn btn-primary"
            name="action"
            onClick={this.handleSubmit}
            >
            Submit</button>
      );
    } else {
      return (
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      );
    }
  }
  render() {
    return (
        <div>
            <div className="form-group">
                <label for="exampleInputEmail1">Actual URL</label>
                <input type="text" 
                    className="form-control"
                    id="originalUrl"
                    name="originalUrl"
                    placeholder="Paste Your URL to Shorten" 
                    value={this.state.originalUrl}
                    onChange={this.handleUserInput.bind(this)} />
            </div>
            {this.state.showError && (
            <div className="formError">Actual URL is required</div>
          )}

            <div className="form-group">
                <label for="exampleInputPassword1">Custom Path </label>
                <input type="text" 
                    className="form-control"
                    id="customPath"
                    name="customPath"
                    placeholder="Enter Custom Path (Optional)"
                    value={this.state.customPath}
                    onChange={this.handleUserInput.bind(this)}
                    />
            </div>
            {this.renderButton()}
            {this.state.showApiError && (
                <div className="shorten-error">{this.state.apiError}</div>
            )}
            {this.state.showShortenUrl && (
              
                <Alert color="success" style={{marginTop:'2rem'}}>
                  Shortened Url is — {` `}
                  <a target="_blank" href={this.state.shortenUrl}>
                    {this.state.shortenUrl}
                </a>
                </Alert>
            )}
</div>);
  }
}

export default Main;
