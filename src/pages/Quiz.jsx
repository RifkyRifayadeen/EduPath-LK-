import { useState } from 'react'
import { mockSubjects } from '../mockData'

const sampleQuestions = [
  {
    id: 'q1',
    question: 'What is the chemical formula for water?',
    options: ['CO2', 'H2O', 'O2', 'NaCl'],
    answer: 'H2O',
  },
  {
    id: 'q2',
    question: 'Which gas is released during photosynthesis?',
    options: ['Nitrogen', 'Oxygen', 'Hydrogen', 'Carbon Monoxide'],
    answer: 'Oxygen',
  },
  {
    id: 'q3',
    question: 'What is the value of x in 2x + 4 = 10?',
    options: ['2', '3', '4', '6'],
    answer: '3',
  },
]

export default function Quiz() {
  const [subject, setSubject] = useState(mockSubjects[0].name)
  const [started, setStarted] = useState(false)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleAnswer(qid, option) {
    setAnswers((prev) => ({ ...prev, [qid]: option }))
  }

  function handleSubmit() {
    setSubmitted(true)
  }

  const score = sampleQuestions.filter((q) => answers[q.id] === q.answer).length

  if (!started) {
    return (
      <div className="card">
        <h2>Take a Quiz</h2>
        <label>Select Subject</label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          {mockSubjects.map((s) => (
            <option key={s.id} value={s.name}>{s.name}</option>
          ))}
        </select>
        <button style={{ marginTop: '1rem' }} onClick={() => setStarted(true)}>
          Start Quiz
        </button>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="card">
        <h2>Quiz Results — {subject}</h2>
        <p className="result-score">Score: {score} / {sampleQuestions.length}</p>
        <button onClick={() => { setStarted(false); setSubmitted(false); setAnswers({}) }}>
          Try Another Quiz
        </button>
      </div>
    )
  }

  return (
    <div className="card">
      <h2>{subject} Quiz</h2>
      {sampleQuestions.map((q, idx) => (
        <div className="quiz-question" key={q.id}>
          <p><strong>{idx + 1}. {q.question}</strong></p>
          <div className="quiz-options">
            {q.options.map((opt) => (
              <label key={opt} className="quiz-option">
                <input
                  type="radio"
                  name={q.id}
                  checked={answers[q.id] === opt}
                  onChange={() => handleAnswer(q.id, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  )
}
