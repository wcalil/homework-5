# Purpose of the application

This application was created for employees with a busy schedule that wants to manage essential events efficiently through a daily planner.


# How does it work

The application allows the user to write his ToDos in the blocks of times in green. The lighter green (rgb: 80, 255, 255) shows the present time, the light green (rgb: 109, 196, 196) shows the future time including the business hour of the day, while the dark green (rgb: 27, 104, 104) shows the past business hours of the day when the user could not schedule a ToDo anymore.

If the user writes a ToDo on the empty form and saves it, it will automatically be saved on local storage.

# HTML

The application was created using bootstrap column grids in the index of 1 col - 2 cols - 6 cols - 2 cols X 1 col. Each Todo was created in a different row, respecting this column index.

The top with H1 "Work Day Schedule" was created in one row with 12 columns with a centralized text.

# JavaScript / JQuery

The JQuery started capturing the date and time from the function new Date () and transforming its format using the moment library.

It was developed a loop to know if the time was past, present, or future and change the CSS background color of the text area.

The last block of Jquery code was created to store locally the text written in th
