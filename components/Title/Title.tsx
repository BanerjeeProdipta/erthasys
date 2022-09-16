import Head from 'next/head';

type PropTypes = {
  title: string;
};

const Title = ({ title }: PropTypes) => {
  return (
    <Head>
      <title>Bitoron | {title}</title>
    </Head>
  );
};

export default Title;
