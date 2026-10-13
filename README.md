<img width="1343" height="631" alt="image" src="https://github.com/user-attachments/assets/f62a7259-9637-49db-8b74-1bfb919609d9" />
# TaskFlow

TaskFlow is a modern Angular-based task management application designed for managing daily tasks with role-based access. It includes task tracking, status updates, search/filter tools, and an admin dashboard.

## Project Highlights

- User registration and login
- Role-based access for admin and regular users
- Create, update, delete, and view tasks
- Search and filter tasks by title and status
- Dashboard summaries for total, pending, in-progress, and completed tasks
- Clean responsive UI inspired by modern dashboard layouts

## Tech Stack

- Angular 19
- TypeScript
- RxJS
- HTML/CSS
- LocalStorage for persistence

## Demo Credentials

This project includes seeded users for quick testing:

- Admin: `admin` / `admin123`
- User: `user` / `user123`

## Features

### Task Management

- Add new tasks with title, description, priority, and status
- Update task status between Pending, In Progress, and Completed
- Delete tasks from the dashboard
- View detailed task information

### Search and Filtering

- Search by task title or description
- Filter tasks by all statuses or a specific status

### Admin Panel

- View task summaries
- Monitor user count and task progress
- Access user management information

## Local Setup

1. Clone the repository
2. Open the project folder
3. Install dependencies:

```bash
npm install
```

4. Start the Angular app:

```bash
npm start
```

5. Open the app in the browser at:

```text
http://localhost:4200/
```

## Production Build

```bash
npm run build
```

## Testing

```bash
npx ng test --watch=false --browsers=ChromeHeadless
```

## Project Structure

```text
src/
├── app/
│   ├── admin/
│   ├── auth/
│   ├── core/
│   ├── tasks/
│   ├── navbar/
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
├── styles.css
└── index.html
```

## Notes

This project uses browser localStorage for data persistence, making it easy to run without an external backend. It is ideal for learning Angular routing, services, state management, and UI design patterns.

