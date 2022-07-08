import {
  Container,
  MemberList,
  Member,
  MemberContainer,
  Title,
} from "./styles";

const staff_list = [
  {
    name: "Kaorin",
    img: "/images/Kaorin.png",
  },
  {
    name: "Dudu",
    img: "/images/Dudu.png",
  },
  {
    name: "Lunarwolf",
    img: "/images/Lunarwolf.png",
  },
] as const;

const Staff = () => {
  return (
    <Container>
      <Title>Staff</Title>
      <MemberList>
        {staff_list.map((member) => (
          <MemberContainer key={member.name}>
            <Member src={member.img} alt={member.name} />
          </MemberContainer>
        ))}
      </MemberList>
    </Container>
  );
};

export default Staff;
