import { useNavigate } from "react-router-dom";
import { StudentHeader } from "../../components/student/StudentHeader";

export function StudentPage() {
  const navigate = useNavigate();

  function handleOpenTest(){
    navigate('/student/tests')
  }
  return <>
    <StudentHeader title="Главная"/>
    <h3>здесь ничё нет пока что</h3>
  </>;
}
