import type { NextPage, GetStaticProps } from "next";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { articleActions } from "@redux/actions";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleActions.retrieveArticles());
  }, []);

  return (
    <>
      Home
    </>
  );
};

export default Home;

/*export const getStaticProps: GetStaticProps = async (context) => {

  return {
    props: { data }, // will be passed to the page component as props
  }
}*/

/*export async function getStaticProps(context) {
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}*/
