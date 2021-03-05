import React from "react";
import styled from "styled-components";

const Foot = styled.div`

  #lab_social_icon_footer {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.white};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    /* padding: 40px 0; */
    /* background-color: #dedede; */
  }

  #lab_social_icon_footer a {
    color: ${(props) => props.theme.secondaryColor};
  }

  #lab_social_icon_footer .social:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
  }

  #lab_social_icon_footer .social {
    -webkit-transform: scale(0.8);
    /* Browser Variations: */

    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
  }
  /*
    Multicoloured Hover Variations
*/

  #lab_social_icon_footer #social-fb:hover {
    color: #3b5998;
  }

  #lab_social_icon_footer #social-tw:hover {
    color: #4099ff;
  }

  #lab_social_icon_footer #social-gp:hover {
    color: #d34836;
  }

  #lab_social_icon_footer #social-em:hover {
    color: #f39c12;
  }
`;

const Footer = () => (
  <Foot>
    <div id="lab_social_icon_footer">
      <link
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="container">
        <div class="text-center center-block">
          <a href="https://linkedin.com/in/ahdari-scott-916225117">
            <i id="social-fb" class="fab fa-linkedin-square fa-3x social"></i>
          </a>
          <a href="https://github.com/koran23">
            <i id="social-tw" class="fa fa-github-square fa-3x social"></i>
          </a>
          {/* <a href="https://plus.google.com/+Bootsnipp-page">
            <i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i>
          </a>
          <a href="mailto:#">
            <i id="social-em" class="fa fa-envelope-square fa-3x social"></i>
          </a> */}
        </div>
      </div>
    </div>
  </Foot>
);

export default Footer;
