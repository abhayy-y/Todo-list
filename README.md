# 📋 Productivity Todo List Web App

A smart Todo List web application built using **HTML, CSS, and Vanilla JavaScript** that helps users manage daily tasks, track productivity scores, and preserve previous task records using a date-locking system.

---

# 🚀 Features

## ✅ Task Management

* Add daily tasks
* Delete tasks
* Mark tasks as completed
* Instant UI updates

---

## 📊 Productivity Score System

The application automatically tracks task completion progress and updates the productivity score dynamically.

### Example:

```text id="flw5b9"
Score: 3/5
```

This means:

* 3 completed tasks
* out of 5 total tasks

---

## 📅 Date-Based Task System

Each date maintains its own independent todo list.

### Users can:

* Create tasks for the current date
* Switch between dates
* View previous todo records

---

## 🔒 Read-Only Past Records

Past todo lists are automatically locked.

Users cannot:

* Add tasks to previous dates
* Edit previous records
* Delete old tasks
* Change completion states

This feature helps preserve productivity history and prevents accidental modifications.

---

## 💾 Local Storage Support

All tasks are stored using the browser's Local Storage API.

This allows:

* Persistent task storage
* Data retention after refresh
* Offline functionality

---

## 📱 Responsive Design

The UI is optimized for:

* Desktop screens
* Tablets
* Mobile devices

The layout automatically adjusts using CSS media queries.

---

# 🛠️ Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

## Browser APIs

* Local Storage API
* Date Object API
* DOM Manipulation

## External Libraries

* Font Awesome Icons

---

# 🧠 Core JavaScript Concepts Used

* DOM Manipulation
* Event Listeners
* Array Filtering
* Object-Based State Management
* Dynamic Element Creation
* Conditional Rendering
* Local Storage Handling
* Date Comparison Logic
* Responsive UI Rendering

---

# ⚙️ How the Application Works

## 1. Task Creation

Users can:

* Select a date
* Enter a task
* Add it using:

  * Add button
  * Enter key shortcut

Each task is stored as an object:

```javascript id="9l7n0t"
{
   text: "Complete assignment",
   date: "2026-05-21",
   completed: false
}
```

---

## 2. Task Rendering

Tasks are dynamically rendered using:

```javascript id="pqgmh7"
createElement()
appendChild()
```

The UI automatically refreshes using a reusable `renderTask()` function.

---

## 3. Score Calculation

The score system filters tasks by selected date and calculates:

```text id="0c95qz"
Completed Tasks / Total Tasks
```

The score updates automatically whenever:

* A task is completed
* A task is deleted
* A new task is added

---

## 4. Date Locking System

The application checks whether the selected date is older than today.

If true:

* Task input gets disabled
* Add button becomes inactive
* Checkboxes become locked
* Delete functionality is disabled

This is handled using the `isPastDate()` function.

---

# 📂 Project Structure

```text id="hl17jp"
📁 Todo-List-App
│
├── index.html      # Main structure
├── style.css       # Styling and responsive design
├── script.js       # Application logic
└── README.md       # Documentation
```

---

# 🎨 UI Design

## Color Palette

| Purpose        | Color     |
| -------------- | --------- |
| Background     | `#0F172A` |
| Container      | `#1E293B` |
| Input Fields   | `#334155` |
| Primary Button | `#3B82F6` |
| Delete Icon    | `#EF4444` |
| Reset Button   | `#F59E0B` |

---

# 🔄 Future Improvements

Planned features:

* Dark/Light Theme Toggle
* Drag & Drop Tasks
* Task Categories
* Weekly Analytics
* Monthly Productivity Charts
* Cloud Storage
* User Authentication
* Reminder Notifications

---

# 🌐 Deployment

This project can be deployed using:

* GitHub Pages
* Netlify
* Vercel

---

# 👨‍💻 Author

## Abhay Shrivas

Frontend development enthusiast focused on building practical JavaScript projects and improving problem-solving skills.

---
