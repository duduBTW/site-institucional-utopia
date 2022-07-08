// styles
import { Container, Member, MemberContainer } from "./styles";

// data
import membes_list from "constants/members";
import Link from "next/link";

const Members = () => {
  return (
    <Container>
      {membes_list.map(({ img, name }) => {
        const id = name.toLowerCase();

        return (
          <Link passHref href={`/membro/${id}`} key={id}>
            <MemberContainer>
              <Member layoutId={`image-${name}`} src={img} alt={name} />
            </MemberContainer>
          </Link>
        );
      })}
    </Container>
  );
};

export default Members;
