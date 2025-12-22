import { Link } from 'react-router-dom';

export function StudentTests() {
  const tests = [
    { id: 1, title: 'JavaScript' },
    { id: 2, title: 'Pascal' },
  ];

  return (
    <div>
      <h2>Список тестов</h2>
      <ul>
        {tests.map(t => (
          <li key={t.id}>
            <Link to={`/student/test/${t.id}`}>{t.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}