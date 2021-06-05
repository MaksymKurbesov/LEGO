import React, { FC, useState } from "react";
import Poster from "../../../assets/img/fallback-video.png";
import StormtrooperThumbnail from "../../../assets/img/stormtrooper-thumbnail.png";
import StormtrooperBox from "../../../assets/img/stormtrooper-box.jpeg";
import StormtrooperThumbnail2 from "../../../assets/img/stormtrooper2-thumbnail.jpg";
import styled from "styled-components/macro";
import { VideoPlayButton } from "./VideoPlayButton";
import Modal from "../../../components/Modal";
import { DEVICE } from "../../../utils/const/DEVICE_SIZE";

const StormtrooperStyled = styled.div`
  margin-left: auto;
  text-align: center;
  h3 {
    display: inline-block;
    position: relative;
    margin-bottom: 70px;
    font-size: clamp(1.1rem, -0.0455rem + 5.7273vw, 2.5rem);
  }
  @media ${DEVICE.tablet} {
    h3 {
      margin-bottom: 40px;
    }
  }
  @media ${DEVICE.mobileL} {
    h3 {
      margin-bottom: 25px;
    }
  }
`;

const StormtrooperHeader = styled.div`
  display: flex;
  padding: 15px;
  margin-bottom: 25px;
  background-color: black;
  @media ${DEVICE.tablet} {
    padding: 9px;
    video {
      width: 23%;
    }
  }
`;

const StormtrooperDescription = styled.div`
  margin: auto;
  color: white;
  text-transform: none;
  p:first-child {
    font-size: clamp(1rem, 0.1rem + 3.5vw, 3rem);
    font-weight: 600;
    margin-bottom: 20px;
  }
  p:last-child {
    max-width: 60%;
    margin: 0 auto;
    font-size: clamp(0.6rem, 0rem + 1.3vw, 2.5rem);
  }
  @media ${DEVICE.tablet} {
    p:first-child {
      margin-bottom: 10px;
    }
    p:last-child {
      max-width: 87%;
    }
  }
  @media ${DEVICE.mobileL} {
    p:first-child {
      display: none;
    }
  }
`;

const StormtrooperImages = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  @media ${DEVICE.mobileL} {
    button {
      flex-basis: 66%;
    }
    .box {
      flex-grow: 1;
    }
    .helmet {
      display: none;
    }
  }
`;

const IframeWrapper = styled.div`
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  iframe {
    height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Stormtrooper: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModalHandler = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (e instanceof KeyboardEvent && e.key !== "Escape") {
      return;
    }
    setModalIsOpen(false);
  };

  return (
    <StormtrooperStyled>
      <h3>Stormtrooper™ helmet</h3>
      <StormtrooperHeader>
        <StormtrooperDescription>
          <p>The collectible you’re looking for</p>
          <p>
            Capture every Imperial detail with the collectible LEGO® Star Wars™
            Stormtrooper™ Helmet.
          </p>
        </StormtrooperDescription>

        <video autoPlay loop muted poster={Poster} width="29%">
          <source
            type="video/mp4"
            src="https://www.lego.com/cdn/cs/set/assets/blta04ade25d99f6678/75276-Trooper-800x600.mp4"
          ></source>
        </video>
        <Modal isOpen={modalIsOpen} close={closeModalHandler} isEmbededFrame>
          <IframeWrapper onClick={closeModalHandler}>
            <iframe
              width="80%"
              src="https://www.youtube.com/embed/8jp91HypCFg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Youtube Embeded"
            />
          </IframeWrapper>
        </Modal>
      </StormtrooperHeader>
      <StormtrooperImages>
        <VideoPlayButton onClick={() => setModalIsOpen(true)}>
          <img
            src={StormtrooperThumbnail}
            alt="Thumbnail from video about stormtrooper helmet"
            width="100%"
            height="100%"
          />
        </VideoPlayButton>
        <img
          src={StormtrooperBox}
          alt="stormtrooper box"
          width="13%"
          height="10%"
          className={"box"}
        />
        <img
          src={StormtrooperThumbnail2}
          alt="stormtrooper helmet"
          width="35%"
          height="100%"
          className={"helmet"}
        />
      </StormtrooperImages>
    </StormtrooperStyled>
  );
};

export default Stormtrooper;
