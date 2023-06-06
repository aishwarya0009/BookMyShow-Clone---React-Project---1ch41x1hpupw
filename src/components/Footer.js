
import React from "react";
import styled from "styled-components";
import {mobile,tab} from "../responsive";
import BookMyShowSvg from '../images/BMSSvg';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 20px;
  background-color: rgb(248, 247, 247);;
  min-height: 300px;
`;
const FooterWrap = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  letter-spacing: 0.2px;
`;
const Aboutmesso = styled.div`
  font-size: 1.1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const DownloadApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px auto;
  ${mobile({display:"none"})}
  ${tab({display:"none"})}
`;
const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
`;
const P = styled.p`
  cursor: pointer;
  margin: 0 auto 10px;
  ${mobile({ fontSize: "10px" })}
`;
const Topic = styled.div`
  margin-left: 25px;
  margin-right: 19px;
`;
const H2=styled.h2`
 ${mobile({ fontSize: "20px" })}
`;
const Footer = () => {
  return (
    <>
      <Container>
        <FooterWrap>
          <Info>
            {" "}
            <H2 style={{ margin: "0 auto 30px" }}>BookMyShow</H2>
            <Aboutmesso>
              <Topic >
              <H2 style={{ magin: "0" }}>Reach out to us</H2>
                <SocialMedia >
                  <a href="https://www.facebook.com/BookMyShowIN">
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://meesho.com/assets/facebook.png"
                      alt="facebook"
                    />
                  </a>
                  <a href="https://www.instagram.com/bookmyshowin/">
                    {" "}
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://meesho.com/assets/instagram.png"
                      alt="instagram"
                    />
                  </a>
                  <a href="https://www.youtube.com/user/BookMyShow/featured">
                    {" "}
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://meesho.com/assets/youtube.png"
                      alt="youtube"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/bookmyshow/">
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://meesho.com/assets/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                  <a href="https://twitter.com/BookMyShow/">
                    <img
                      style={{ cursor: "pointer" }}
                      src="https://meesho.com/assets/twitter.png"
                      alt="twitter"
                    />
                  </a>
                </SocialMedia>
              </Topic>
              <P>
                Copyright 2023 @ Bigtree Entertainment Pvt. Ltd. All Rights Reserved. <br />
                
              </P>
            </Aboutmesso>
          </Info>
         
        </FooterWrap>
      </Container>
    </>
  );
};

export default Footer;