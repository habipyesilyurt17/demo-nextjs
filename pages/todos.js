import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../components/Slider";

const Todos = ({ todos }) => {
  const {results = []} = todos
  return (
    <div>
      <Head>
        <title>Todos</title>
      </Head>
      <Slider sliderProps={results} />
      <h1 style={{textAlign: 'center'}}>Welcome to Todos</h1>
    </div>
  );
};

export async function getStaticProps() {
  // data fetch
  const data = await fetch(
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
