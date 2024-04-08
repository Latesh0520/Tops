import React, { useEffect, useState } from "react";

export default function LoginAlert() {
  let [login, setLogin] = useState(false);
  useEffect(() => {
    console.log("🚀 ~ LoginAlert ~ login:", login);
    if (!login) {
      const logininterval = setInterval(() => {
        let loginornot = confirm("Please Login");
        if (loginornot) {
          setLogin(true);
        }
      }, 5000);
      return () => {clearInterval(logininterval);
      console.log('dfh')
      }

    }
  }, [login]);
  return <div>
    {login ? "Logged in" : "Not logged in"}
  </div>;
}
