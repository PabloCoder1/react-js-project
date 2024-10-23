import Button from "../../components/Button";
import Person from "../../assets/HomePerson.svg";
import styles from "./Home.module.css";
import Topbar from "../../components/Topbar";

const Login = () => {
  return (
    <div className={styles.body}>
      <Topbar />
      <div className={styles.HomePerson}><img src={Person}/></div>

      <div className={styles.textTypes}>
        <div className={styles.title}></div>
        <div className={styles.text}></div>
        <div className={styles.containerBtn}><Button /></div>
      </div>
    </div>
  );
};

export default Login;
