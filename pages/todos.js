import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import unfetch from 'isomorphic-unfetch'

const Todos = ({ todos }) => {
  return (
    <div>
      <Head>
        <title>Todos</title>
      </Head>
      <h1>Welcome to Todos</h1>
    </div>
  );
};

export async function getStaticProps() {
  // data fetch
  const data = await unfetch(
    "https://602159aaae8f8700177de3f1.mockapi.io/api/todos"
  );
  const todos = await data.json();
  return {
    props: {
      todos,
    },
  };
}

export default Todos;