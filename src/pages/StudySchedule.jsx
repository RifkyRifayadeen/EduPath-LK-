import { mockStudySchedule } from '../mockData'

export default function StudySchedule() {
  return (
    <div className="card">
      <h2>Weekly Study Schedule</h2>
      <p className="muted">Automatically generated to prioritize your weak subjects.</p>
      <table className="data-table">
        <thead>
          <tr><th>Day</th><th>Subject</th><th>Topic</th><th>Hours</th></tr>
        </thead>
        <tbody>
          {mockStudySchedule.map((s, idx) => (
            <tr key={idx}>
              <td>{s.day}</td>
              <td>{s.subject}</td>
              <td>{s.topic}</td>
              <td>{s.hours}h</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
