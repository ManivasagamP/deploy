"use client"

import * as React from "react"
import { DayPicker, type DayPickerProps } from "react-day-picker"
import "react-day-picker/dist/style.css" // optional styling

export type CalendarProps = DayPickerProps

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      classNames={classNames}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
