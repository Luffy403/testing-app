import { useNavigate } from "react-router-dom";

export function StudentPage() {
  const navigate = useNavigate();

  function handleOpenTest(){
    navigate('/student/tests')
  }
  return (
    <div>
      <button onClick={ () => handleOpenTest()}> go test</button>
      <button onClick={ () => navigate(-1)}> go back</button>
    </div>
  );
}
