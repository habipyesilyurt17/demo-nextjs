import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../components/Slider";

const Home = ({ users }) => {
  const {results = []} = users

  return (
    <div>
      <Head>
        <title>Users</title>
        <meta name="keywords" content="web development, programing" />
      </Head>
      <Slider sliderProps={results} />

      <h1 style={{textAlign: 'center'}}>Welcome to Users</h1>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch(
    "https://602159aaae8f8700177de3f1.mockapi.io/api/users"
  );
  const users = await data.json();
  return {
    props: {
      users,
    },
  };
}

export default Home;
