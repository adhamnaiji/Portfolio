import React from 'react';
import styled from 'styled-components';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Adham Naiji</span>
              </p>
              <h2 className="about__heading">A Computer Science Student</h2>
              <a
                href="https://drive.google.com/file/d/1jsHh15L1dSCu3nglqdN2WGu9dTUm9Mqy/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <h1>Resume</h1>
              </a>
              <a
                href="https://drive.google.com/file/d/1PKbklzieZcrjgenIk4XrL59kFA0xJlER/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                <h1>video Resume</h1>
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['SAID-BOU-BAKER MOKNINE']}
              />
              <AboutInfoItem
                title="Varsity"
                items={['ISITCOM HAMMAM SOUSSE']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Web dev"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'php',
                  'REACT',
                  'Angular',
                  'SQL',
                  'Firebase',
                ]}
              />
              <AboutInfoItem
                title="Mobile dev"
                items={['Android Studio(java)']}
              />
              <AboutInfoItem
                title="Game dev"
                items={['Unity ( C# )', 'Vuforia', 'Photon', 'Blender']}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
