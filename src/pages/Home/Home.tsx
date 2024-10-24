import Button from "../../components/Button";
import Person from "../../assets/HomePerson.svg";
import styles from "./Home.module.css";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import HiveWhite from "../../assets/ColmeiaFlutterWhite.svg"
import HiveBlack from "../../assets/ColmeiaFlutterBlack.svg"
import DotText from "../../assets/DotIcon.svg"

const Login = () => {
  return (
    <div className={styles.body}>
      <Topbar />
      <div className={styles.HomePerson}><img className={styles.HiveWhite} src={HiveWhite}/><img src={Person} /></div>
      <img className={styles.HiveBlackOne} src={HiveBlack}/>
      <img className={styles.HiveBlackTwo} src={HiveBlack}/>
      <img className={styles.HiveBlackThree} src={HiveBlack}/>
      <img src={DotText} className={styles.DotText}/>
      <div className={styles.textTypes}>
        
        <div className={styles.title}><h1>transforme</h1> <h1>os processos</h1></div>
        
        <div className={styles.text}>
          <p>Bem-vindo ao novo <strong>Portal de Processos da VPTI!</strong> Este portal tem como objetivo centralizar a gestão da revisão e dos novos processos.</p>
          <p>É um repositório central para documentar, monitorar e melhorar os processos. </p>
          <p>Clique no botão abaixo para consultar todos os processos disponíveis.</p>
        </div>
        <div className={styles.containerBtn}><Button /></div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Login;
