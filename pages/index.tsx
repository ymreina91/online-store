import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Header, Button, Menu } from 'grommet';
import { Dashboard } from 'grommet-icons';
import { Layout } from "@components/Layout";
import { articleActions } from "@redux/actions";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(articleActions.retrieveArticles());
  }, []);

  return (
    <Layout>
      children Layout
    </Layout>
  );
};

export default Home;
