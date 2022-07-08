import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

// data
import membes_list, { IMember } from "constants/members";

// components
import Person from "components/templates/person";

interface Props {
  member?: IMember;
}

const Membro: NextPage<Props> = ({ member }) => {
  if (!member) return <div></div>;

  return (
    <div>
      <Person person={member} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  if (typeof id !== "string")
    return {
      notFound: true,
    };

  const member = membes_list.find((member) => member.name.toLowerCase() === id);
  if (!member)
    return {
      notFound: true,
    };

  return {
    props: {
      member,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = membes_list.map((member) => ({
    params: {
      id: member.name.toLowerCase(),
    },
  }));

  console.log("paths", paths);

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
};

export default Membro;
