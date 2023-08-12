export interface ScheduleLocation {
  daysOfWeek: string
  hours: string
  startDate: Date
  dates: Date[]
}

export interface Schedule {
  singleLessonDurationInMinutes: string
  singleLessonPrice: number
  allLessonsDurationInHours: number
  allLessonsPrice: number
  stationary: ScheduleLocation
  online: ScheduleLocation
}
