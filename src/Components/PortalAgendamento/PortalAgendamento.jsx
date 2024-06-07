import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth.jsx";


   

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
}

  function PortalAgendamento() {

  return (
     <>

      <button text="Consultas agendadas" onClick={() => [signout(), navigate("/")]}>
      Consultas agendadas
      </button>

      <button text="Consultas canceladas" onClick={() => [signout(), navigate("/")]}>
      Consultas canceladas
      </button>

      </>
  );
};

      



export default PortalAgendamento;