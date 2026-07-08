import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { mockAchievements } from '../mockData'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const progressHistory = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
  datasets: [
    {
      label: 'Overall Progress %',
      data: [30, 42, 48, 55, 63],
      borderColor: '#3d5a80',
      backgroundColor: '#3d5a80',
      tension: 0.3,
    },
  ],
}

export default function Progress() {
  return (
    <div>
      <div className="card">
        <h2>Progress Over Time</h2>
        <Line data={progressHistory} />
      </div>

      <div className="card">
        <h3>Achievements</h3>
        <div className="achievement-grid">
          {mockAchievements.map((a) => (
            <div className={`achievement-card ${a.earned ? 'earned' : 'locked'}`} key={a.id}>
              <div className="achievement-icon">{a.earned ? '🏆' : '🔒'}</div>
              <div>{a.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
