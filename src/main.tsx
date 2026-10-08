import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { course } from './course'
import { CourseSlides } from './slides/CourseSlides'
import './styles.css'

document.title = `${course.title} · weaaare`

const root = document.getElementById('root')

if (!root) {
  throw new Error('The application root was not found.')
}

createRoot(root).render(
  <StrictMode>
    <CourseSlides />
  </StrictMode>,
)
