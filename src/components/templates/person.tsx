import { SocialType } from "constants/members";
import { mq } from "constants/theme";
import styled from "@emotion/styled";

// components
import PersonImage from "components/personImage";
import PersonInfo from "components/personInfo";
import Socials from "components/socials";

interface Props {
  person: {
    name: string;
    img: string;
    socials?: Partial<Record<SocialType, string>>;
  };
}

const Person = ({ person }: Props) => {
  return (
    <Container>
      <PersonImage src={person.img} />
      <InfoContainer>
        <PersonInfo name={person.name} />
        <Socials socials={person.socials} />
      </InfoContainer>
    </Container>
  );
};

// styles
const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.fromDesktopSm} {
    padding-left: 10%;
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  box-sizing: border-box;
  padding: 8.6rem 4rem;

  ${mq.fromDesktopSm} {
    flex-direction: row;
    padding: 19.2rem 6rem;
  }

  ${mq.fromDesktopLg} {
    padding: 22rem 12rem;
  }
`;

export default Person;
