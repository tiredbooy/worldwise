import Map from "../components/Map";
import SideBar from "../components/SideBar";
import User from "../components/User";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.app}>
      <SideBar />
      {isAuthenticated && <User />}
      <Map />
    </div>
  );
}

export default AppLayout;
