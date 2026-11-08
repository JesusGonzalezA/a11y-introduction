import { course } from '../course'
import { CourseSlides } from './CourseSlides'
import '../styles.css'

document.title = `Diapositivas · ${course.title}`

export function SlidesApp() {
  return <CourseSlides />
}
