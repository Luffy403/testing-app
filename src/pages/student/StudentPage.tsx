import { useNavigate } from "react-router-dom";

export function StudentPage() {
  const navigate = useNavigate();

  function handleOpenTest(){
    navigate('/student/tests')
  }
  return (
    // <
    <div>здесь ничё нет пока что</div>
  );
}
