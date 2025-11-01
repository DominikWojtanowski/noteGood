import AppBar from "../components/AppBar/AppBar/AppBar";
import styles from "./App.module.css";
export default function App() {
  return (
    <div className={styles.app}>
      <AppBar activationLabel="test" />
    </div>
  );
}
