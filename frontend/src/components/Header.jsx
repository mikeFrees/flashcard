import styles from "@/components/Header.module.css";
import LogoLarge from "@/assets/images/logo-large.svg";
import LogoSmall from "@/assets/images/logo-small.svg";
import IconUser from "@/assets/icons/icon-user.svg";
import PageSelector from "@/components/PageSelector";
import UserForm from "@/components/userForm";
import { useState } from "react";

function Header({ setStudy, study }) {

  const [userFormVisible, setUserFormVisible] = useState(false);
  return (
    <header className={`${styles.header}`}>
      <picture>
        <source
          media='(max-width: 480px)'
          srcSet={LogoSmall}
        />
        <img
          src={LogoLarge}
          alt='Flashcard Logo'
        />
      </picture>

      <PageSelector
        setStudy={setStudy}
        study={study}
      />

      <img
        className={styles.user}
        src={IconUser}
        alt='user icon'
        onClick={() => setUserFormVisible(!userFormVisible)}
      />

      {userFormVisible && <UserForm />}
    </header>
  );
}

export default Header;
