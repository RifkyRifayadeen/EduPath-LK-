// Mock data standing in for Firebase/backend until the real API is wired up.

export const mockUser = {
  id: 'u1',
  fullName: 'Kavindu Perera',
  email: 'kavindu@example.com',
  grade: 'Grade 11',
  school: 'Ananda College',
  preferredLanguage: 'English',
}

export const mockSubjects = [
  { id: 's1', name: 'Mathematics', progress: 62, weak: false },
  { id: 's2', name: 'Science', progress: 41, weak: true },
  { id: 's3', name: 'History', progress: 78, weak: false },
  { id: 's4', name: 'English', progress: 55, weak: true },
  { id: 's5', name: 'Sinhala', progress: 70, weak: false },
]

export const mockWeaknesses = [
  { id: 'w1', subject: 'Science', topic: 'Chemical Reactions', severity: 'High' },
  { id: 'w2', subject: 'English', topic: 'Essay Writing', severity: 'Medium' },
  { id: 'w3', subject: 'Mathematics', topic: 'Algebra', severity: 'Low' },
]

export const mockLearningPath = [
  { id: 'p1', subject: 'Science', topic: 'Chemical Reactions', priority: 'High', studyHours: 4 },
  { id: 'p2', subject: 'English', topic: 'Essay Writing', priority: 'Medium', studyHours: 3 },
  { id: 'p3', subject: 'Mathematics', topic: 'Algebra', priority: 'Low', studyHours: 2 },
]

export const mockStudySchedule = [
  { day: 'Monday', subject: 'Science', topic: 'Chemical Reactions', hours: 2 },
  { day: 'Tuesday', subject: 'English', topic: 'Essay Writing', hours: 1.5 },
  { day: 'Wednesday', subject: 'Mathematics', topic: 'Algebra', hours: 1 },
  { day: 'Thursday', subject: 'Science', topic: 'Chemical Reactions', hours: 2 },
  { day: 'Friday', subject: 'History', topic: 'Revision', hours: 1 },
]

export const mockResources = [
  { id: 'r1', subject: 'Science', topic: 'Chemical Reactions', type: 'Video', title: 'Chemical Reactions Explained (Sinhala)' },
  { id: 'r2', subject: 'English', topic: 'Essay Writing', type: 'Notes', title: 'Essay Writing Techniques - Revision Notes' },
  { id: 'r3', subject: 'Mathematics', topic: 'Algebra', type: 'Past Paper', title: '2023 O/L Maths Past Paper - Algebra Section' },
]

export const mockAchievements = [
  { id: 'a1', title: 'First Quiz Completed', earned: true },
  { id: 'a2', title: '7-Day Study Streak', earned: true },
  { id: 'a3', title: 'Weak Subject Improved', earned: false },
]
