// styles
import {
  Button,
  Container,
  Content,
  SubTitle,
  Title,
  BackgroundVideo,
  EffectMobile,
  EffectTabletLeft,
  EffectTabletRight,
  EffectDesktop,
} from "./styles";

const Hero = () => {
  return (
    <Container>
      <Content>
        <Title>UTOPIA</Title>
        <SubTitle>Grupo de vtubers masculino brasileiros</SubTitle>
        <Button>Aprenda mais sobre nós</Button>
      </Content>

      <BackgroundVideo autoPlay muted loop>
        <source src="/videos/trailer.mp4" type="video/mp4" />
      </BackgroundVideo>
      <EffectMobile />
      <EffectTabletLeft />
      <EffectTabletRight />
      <EffectDesktop />
    </Container>
  );
};

export default Hero;
