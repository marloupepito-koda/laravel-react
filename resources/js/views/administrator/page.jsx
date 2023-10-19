import { useNavigate } from "react-router-dom";

export default function AdministratorPage() {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/')}>Next</button>
      AdministratorPage</>
  );
}
