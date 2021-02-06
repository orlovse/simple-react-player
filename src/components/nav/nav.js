import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styles from "./nav.module.scss";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  const handleClick = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <div className={styles.nav}>
      <h1>Waves</h1>
      <button onClick={handleClick}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </div>
  );
};

export default Nav;
