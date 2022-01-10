import {useRef } from "react";
import Rick from "../../assets/images/rick.png";
import {Wrapper,ContentWrapper,MainContent,ImageWrapper,Image,DetailWrapper,Name,Details,Body1,Body2,Button} from './CardElements'

const Card = () => {
 
  const card = useRef(0);
  const image = useRef(0);
  const name = useRef(0);
  const body1 = useRef(0);
  const body2 = useRef(0);
  const btn = useRef(0);

  const handleMouse = (e) => {
  const x_axis = (window.innerWidth/2 - e.pageX) / 50; 
  const y_axis = (window.innerHeight/2 - e.pageY) / 50;
    
  card.current.style.transform = `rotateY(${x_axis}deg) rotateX(${y_axis}deg)`

  }

  const handleEnter = (e) => {
    card.current.style.transition = `none`;
    image.current.style.transform = `translateZ(200px)`;
    name.current.style.transform = `translateZ(200px)`;
    body1.current.style.transform = `translateZ(200px)`;
    body2.current.style.transform = `translateZ(200px)`;
    btn.current.style.transform = `translateZ(200px)`;

    e.target.style.transform = `translateZ(200px)`
    
  } 

  const handleLeave = (e) => {
    card.current.style.transition = `all 0.25s ease`
    card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    image.current.style.transform = `tranlateZ(0px)`;
    name.current.style.transform = `translateZ(0px)`;
    body1.current.style.transform = `translateZ(0px)`;
    body2.current.style.transform = `translateZ(0px)`;
    btn.current.style.transform = `translateZ(0px)`;
  }

  return (
    <Wrapper>
      <ContentWrapper
        className="content"
        onMouseMove={handleMouse}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <MainContent className="card" ref={card}>
          <ImageWrapper>
            <Image src={Rick} alt="rick" ref={image}></Image>
          </ImageWrapper>

          <DetailWrapper>
            <Name ref={name}>Rick Sanchaze</Name>

            <Details>
              <Body1 ref={body1}>Series - Rick and Morty</Body1>
              <Body2 ref={body2}>
                Rick Sanchez, also known as Rick (C-137), is one of the titular
                two main protagonists (alongside Morty Smith) and one of the
                five main characters of the science fiction adult animated
                comedy series Rick and Morty.
              </Body2>

              <Button ref={btn}>Get This Card</Button>
            </Details>
          </DetailWrapper>
        </MainContent>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Card;

