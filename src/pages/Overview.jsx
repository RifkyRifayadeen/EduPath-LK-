import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { mockSubjects, mockWeaknesses, mockAchievements } from '../mockData'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function Overview() {
  const chartData = {
    labels: mockSubjects.map((s) => s.name),
    datasets: [
      {
        label: 'Progress %',
        data: mockSubjects.map((s) => s.progress),
        backgroundColor: mockSubjects.map((s) => (s.weak ? '#e07a5f' : '#3d5a80')),
        borderRadius: 6,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, max: 100 } },
  }

  return (
    <div>
      <h2>Dashboard Overview</h2>

      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-value">{mockSubjects.length}</div>
          <div className="stat-label">Subjects Tracked</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{mockWeaknesses.length}</div>
          <div className="stat-label">Weak Areas Detected</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {mockAchievements.filter((a) => a.earned).length}/{mockAchievements.length}
          </div>
          <div className="stat-label">Achievements Earned</div>
        </div>
      </div>

      <div className="card">
        <h3>Subject Progress</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="card">
        <h3>Top Weak Areas</h3>
        <table className="data-table">
          <thead>
            <tr><th>Subject</th><th>Topic</th><th>Severity</th></tr>
          </thead>
          <tbody>
            {mockWeaknesses.map((w) => (
              <tr key={w.id}>
                <td>{w.subject}</td>
                <td>{w.topic}</td>
                <td><span className={`badge badge-${w.severity.toLowerCase()}`}>{w.severity}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
