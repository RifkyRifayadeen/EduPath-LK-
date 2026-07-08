import { mockResources } from '../mockData'

export default function Resources() {
  return (
    <div className="card">
      <h2>Recommended Educational Resources</h2>
      <p className="muted">Personalized based on your identified weak topics.</p>
      <div className="resource-grid">
        {mockResources.map((r) => (
          <div className="resource-card" key={r.id}>
            <span className={`badge badge-type`}>{r.type}</span>
            <h4>{r.title}</h4>
            <p className="muted">{r.subject} · {r.topic}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
