import { TwitterTimelineEmbed } from "react-twitter-embed";

// styles
import { Container, Title } from "./styles";

const News = () => {
  return (
    <Container>
      <Title>Noticias</Title>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="UtopiaVtubing"
        options={{ height: 760, width: 450 }}
        theme="dark"
        noFooter
        noHeader
        noBorders
        noScrollbar
        lang="pt-BR"
        linkColor="#5aff74"
      />
    </Container>
  );
};

export default News;
