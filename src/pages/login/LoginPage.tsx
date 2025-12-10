import type { FormEvent } from "react";
import {  useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/student")
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Добро пожаловать!</h2>
      <div>
        <label>
          Логин
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Пароль
          <input type="password" />
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Запомнить меня
        </label>
      </div>
      <button type="submit">Войти</button>
    </form>
  );
}
