import { mockLearningPath } from '../mockData'

export default function LearningPath() {
  return (
    <div className="card">
      <h2>Your Personalized Learning Path</h2>
      <p className="muted">Generated based on your quiz performance and identified weak areas.</p>
      <table className="data-table">
        <thead>
          <tr><th>Subject</th><th>Topic</th><th>Priority</th><th>Recommended Study Hours</th></tr>
        </thead>
        <tbody>
          {mockLearningPath.map((p) => (
            <tr key={p.id}>
              <td>{p.subject}</td>
              <td>{p.topic}</td>
              <td><span className={`badge badge-${p.priority.toLowerCase()}`}>{p.priority}</span></td>
              <td>{p.studyHours}h / week</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
