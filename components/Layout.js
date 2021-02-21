import Nav from "./Nav";
import Slider from './Slider'
import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Slider sliderProps = { children.type.name === "Home" ? children.props.users : children.props.todos } />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
