import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/auth')}>Back</button>
      AuthPage</>
  );
}
