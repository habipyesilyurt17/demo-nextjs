import Nav from "./Nav";
import Slider from "./Slider";
import styles from "../styles/Layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Slider
            sliderProps={
              children.type.name === "Home"
                ? children.props.users
                : children.props.todos
            }
          />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;