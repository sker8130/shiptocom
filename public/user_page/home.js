let currentDate = new Date(2025, 1); // Feb 2025
let selectedDay = 21;

const calendar = document.getElementById("calendar");
const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const dateInput = document.getElementById("dateInput");

function toggleCalendar() {
  calendar.style.display =
    calendar.style.display === "block" ? "none" : "block";
}

function renderCalendar() {
  calendarDays.innerHTML = "";
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  monthYear.textContent =
    currentDate.toLocaleString("en-US", { month: "long" }) + " " + year;

  const firstDay = new Date(year, month, 1).getDay() || 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i < firstDay; i++) {
    calendarDays.appendChild(document.createElement("span"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const span = document.createElement("span");
    span.textContent = day;

    if (day === selectedDay) span.classList.add("selected");

    span.onclick = () => selectDate(day);
    calendarDays.appendChild(span);
  }
}

function selectDate(day) {
  selectedDay = day;
  dateInput.value = `${currentDate.toLocaleString("en-US", {
    month: "long",
  })} ${day}, ${currentDate.getFullYear()}`;
  renderCalendar();
  calendar.style.display = "none";
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

renderCalendar();
