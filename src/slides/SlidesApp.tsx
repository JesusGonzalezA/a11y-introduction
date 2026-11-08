import { course } from '../course'
import { CourseSlides } from './CourseSlides'
import '../styles.css'

document.title = `${course.title} · weaaare`

export function SlidesApp() {
  return <CourseSlides />
}
