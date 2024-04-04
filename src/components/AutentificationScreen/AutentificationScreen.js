import { useState } from "react";
import "./style.css";

import Login from "./Login/Login";
import Register from "./Register/Register";
import Button from "react-bootstrap/Button";

function AutentificationScreen() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="autentification">
      <h1>Lendify</h1>
      <p>Pre rozvoz / vyzdvihnutie balíkov sa prosím prihláste.</p>
      {isLogin ? (
        <>
          <Login />
          <p> Ešte u nás nemáte účet?</p>
          <Button
            variant="outline-primary"
            type="submit"
            onClick={() => setIsLogin(false)}
          >
            Zaregistrujte sa
          </Button>
        </>
      ) : (
        <>
          <Register />
          <p> Už u nás máte vytvorený účet?</p>
          <Button
            variant="outline-primary"
            type="submit"
            onClick={() => setIsLogin(true)}
          >
            Prihláste sa
          </Button>
        </>
      )}
    </div>
  );
}

export default AutentificationScreen;
