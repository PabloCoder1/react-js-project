import styles from "./Topbar.module.css";
import VivoIcon from "../../assets/VivoIcon.svg"

const Topbar = () => {
    return (
        <div className={styles.container}>
            <img src={VivoIcon} alt="Esse é o logo da vivo" className={styles.VivoIcon} />
            <div className={styles.wrapper}>
                <a href="#">Home</a>
                <a href="#"> Framework</a>
                <a href="#">Lean Office</a>
                <a href="#">Contato</a>
            </div>
        </div>
        
    );
};

export default Topbar