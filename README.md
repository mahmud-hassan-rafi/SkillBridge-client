# SkillBridge Frontend - Professional React Application

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4?logo=tailwindcss&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-2.11.0-764ABC?logo=redux&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-green.svg)

**A professional React frontend for SkillBridge - an online course selling and management platform with dual role support (Student & Instructor).**

[Quick Start](#-quick-start) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure) • [Development Guide](#-development-guide) • [Best Practices](#-best-practices)

</div>

---

## 📋 Overview

**SkillBridge Frontend** is a modern, production-ready React application built with Vite and Tailwind CSS. It provides an intuitive user interface for both students and instructors on a comprehensive online learning platform. The application features role-based access control, real-time state management, and responsive design optimized for all devices.

### Core Responsibilities

- **Student Portal**: Browse, search, enroll in courses, and track learning progress
- **Instructor Dashboard**: Create, manage courses, and monitor student enrollments
- **Authentication**: Secure JWT-based authentication and session management
- **Performance**: Lightning-fast development and production builds with Vite

---

## ✨ Key Features

### For Students

- 🏠 **Personalized Dashboard**: Featured courses and recommendations
- 🔍 **Advanced Search**: Filter courses by category, price, and ratings
- 📚 **Course Details**: Comprehensive course information with instructor profiles
- 📝 **Enrollment Management**: One-click enrollment and progress tracking
- ▶️ **Video Player**: Integrated video player with lesson progress tracking
- ⭐ **Ratings & Reviews**: Rate and review completed courses
- 📊 **Learning Analytics**: Track completed lessons and course progress
- 🏪 **Course Library**: Browse and organize favorite courses

### For Instructors

- 📊 **Analytics Dashboard**: Real-time course analytics and student engagement metrics
- ➕ **Course Creation**: Rich course builder with multimedia support
- 📖 **Content Management**: Edit, publish, and manage course curriculum
- 👥 **Student Tracking**: Monitor enrollments and student progress
- 💰 **Performance Insights**: Detailed revenue and course performance metrics
- ✏️ **Rich Text Editor**: Built-in Quill editor for course content
- 📈 **Student Management**: View and manage enrolled students

### Universal Features

- 🔐 **JWT Authentication**: Secure token-based authentication
- 🛡️ **Role-Based Access**: Student and Instructor views
- 📱 **Responsive Design**: Mobile-first, works on all devices
- ⚡ **Lightning Performance**: HMR, code splitting, lazy loading
- 🎨 **Modern UI**: Tailwind CSS with smooth animations (GSAP)
- 🔔 **Notifications**: Toast notifications for user feedback

---

## 🛠 Tech Stack

| Layer                 | Technology               | Version | Purpose                               |
| --------------------- | ------------------------ | ------- | ------------------------------------- |
| **Framework**         | React                    | 19.2.0  | UI Library & Component Framework      |
| **Build Tool**        | Vite                     | 7.2.4   | Fast build tool & dev server with HMR |
| **Routing**           | React Router DOM         | 7.10.1  | Client-side routing & navigation      |
| **State Management**  | Redux Toolkit            | 2.11.0  | Centralized state management          |
| **Styling**           | Tailwind CSS             | 4.1.17  | Utility-first CSS framework           |
| **Rich Text**         | Quill                    | 2.0.3   | WYSIWYG editor for course content     |
| **Video Integration** | React YouTube            | 10.1.0  | YouTube video player component        |
| **Animations**        | GSAP                     | 3.14.2  | Advanced animations & transitions     |
| **Notifications**     | React Toastify           | 11.0.5  | Toast notification system             |
| **Icons**             | React Icons              | 5.5.0   | SVG icon library                      |
| **Progress Bars**     | RC Progress              | 4.0.0   | Animated progress components          |
| **Ratings**           | React Simple Star Rating | 5.1.7   | Star rating component                 |
| **Utilities**         | Humanize Duration        | 3.33.2  | Duration formatting                   |
| **ID Generation**     | Uniqid                   | 5.4.0   | Unique ID generation                  |

---

## 📁 Project Structure

```
SkillBridge-client/
├── public/                             # Static assets
│
├── src/
│   ├── components/                     # Reusable React components
│   │   ├── Instructor/
│   │   │   ├── Navbar.jsx              # Instructor navigation bar
│   │   │   ├── Sidebar.jsx             # Instructor sidebar menu
│   │   │   └── Footer.jsx              # Instructor footer
│   │   │
│   │   └── Student/
│   │       ├── Navbar.jsx              # Student navigation bar
│   │       ├── Hero.jsx                # Landing page hero section
│   │       ├── CourseCard.jsx          # Individual course card component
│   │       ├── CoursesSection.jsx      # Course grid/list section
│   │       ├── Searchbar.jsx           # Search functionality component
│   │       ├── Companies.jsx           # Partner companies showcase
│   │       ├── TestimonialsSection.jsx # Student testimonials section
│   │       ├── Rating.jsx              # Course rating display
│   │       ├── CallToActions.jsx       # CTA buttons and sections
│   │       ├── Loading.jsx             # Loading spinner component
│   │       └── Footer.jsx              # Student footer
│   │
│   ├── pages/                          # Page-level components
│   │   ├── common/
│   │   │   └── PageNotFound.jsx        # 404 error page
│   │   │
│   │   ├── Instructor/
│   │   │   ├── Instructor.jsx          # Instructor layout wrapper
│   │   │   ├── Dashboard.jsx           # Instructor main dashboard
│   │   │   ├── AddCourse.jsx           # Course creation/editing page
│   │   │   ├── MyCourses.jsx           # Instructor's courses list
│   │   │   └── StudentsEnrolled.jsx    # Student enrollment tracking page
│   │   │
│   │   └── Student/
│   │       ├── Home.jsx                # Student home/landing page
│   │       ├── CoursesList.jsx         # Courses browsing page
│   │       ├── CourseDetails.jsx       # Single course detail page
│   │       ├── MyEnrollments.jsx       # Student's enrolled courses
│   │       └── Player.jsx              # Video player page
│   │
│   ├── layouts/
│   │   └── MainLayoutStudent.jsx       # Main layout wrapper for student pages
│   │
│   ├── context/
│   │   └── AppContext.jsx              # Global app context (theme, user prefs)
│   │
│   ├── assets/
│   │   ├── assets.js                   # Asset exports (images, icons)
│   │   └── rich-text-css.txt           # Rich text editor custom styles
│   │
│   ├── App.jsx                         # Root component with routes
│   ├── main.jsx                        # Vite entry point
│   └── index.css                       # Global styles & Tailwind imports
│
├── index.html                          # HTML entry point
├── vite.config.js                      # Vite configuration
├── jsconfig.json                       # JavaScript path aliases
├── eslint.config.js                    # ESLint rules
├── package.json                        # Dependencies & scripts
├── .gitignore                          # Git ignore rules
└── README.md                           # This file
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+ (check with `node -v`)
- **npm** 9+ (check with `npm -v`)
- **Git**

### Installation

1. **Clone or navigate to the project**

   ```bash
   cd SkillBridge-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment configuration**

   ```bash
   cat > .env << EOF
   VITE_API_URL=http://localhost:5000/api
   VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
   EOF
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Application runs on: **http://localhost:5173**

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start Vite dev server with HMR (Fast Refresh)
npm run preview      # Preview production build locally

# Production
npm run build        # Build optimized production bundle
                     # Output: dist/ directory

# Code Quality
npm run lint         # Run ESLint to check code quality
                     # Fix: npm run lint -- --fix
```

### Development Workflow

**Terminal 1 - Frontend**

```bash
cd SkillBridge-client
npm run dev
```

**Terminal 2 - Backend** (in separate terminal)

```bash
cd SkillBridge-server
npm run dev
```

Both servers will run concurrently for full-stack development.

---

## 🏗 Architecture & Design Patterns

### Component Hierarchy

```
App (Root)
├── Routes
│   ├── MainLayoutStudent
│   │   ├── Student/Navbar
│   │   ├── Student Pages
│   │   │   ├── Home
│   │   │   ├── CoursesList
│   │   │   ├── CourseDetails
│   │   │   ├── MyEnrollments
│   │   │   └── Player
│   │   └── Student/Footer
│   │
│   ├── Instructor (Layout)
│   │   ├── Instructor/Navbar
│   │   ├── Instructor/Sidebar
│   │   ├── Instructor Pages
│   │   │   ├── Dashboard
│   │   │   ├── AddCourse
│   │   │   ├── MyCourses
│   │   │   └── StudentsEnrolled
│   │   └── Instructor/Footer
│   │
│   └── PageNotFound
│
└── AppContext (Global State)
    ├── User Data
    ├── Theme
    └── Preferences
```

### State Management Strategy

- **Redux Toolkit**: Global app state (user, courses, enrollments)
- **Context API**: Theme and application preferences
- **Local State**: Component-specific state (forms, UI toggles)
- **Local Storage**: Persistent session & user preferences
- **Cookie**: HttpOnly cookies for secure token storage

### Routing Structure

```
/ (MainLayoutStudent)
  ├── / (Home)
  ├── /course-list (CoursesList)
  ├── /course-list/:input (Search Results)
  ├── /course/:id (CourseDetails)
  ├── /my-enrollments (MyEnrollments)
  ├── /player/:courseId (Player)
  └── /loading/:path (LoadingPage)

/instructor (Instructor Layout)
  ├── /instructor/dashboard (Dashboard)
  ├── /instructor/add-course (AddCourse)
  ├── /instructor/my-courses (MyCourses)
  └── /instructor/student-enrolled (StudentsEnrolled)

/* (PageNotFound)
```

---

## 🎨 Styling & Design System

### Tailwind CSS Configuration

- **Version**: 4.1.17 (Latest with Vite plugin)
- **Approach**: Utility-first, mobile-first
- **Customization**: Via `tailwind.config.js`
- **Dark Mode**: Supported

### Design Principles

- **Responsive**: Mobile → Tablet → Desktop
- **Accessibility**: WCAG 2.1 AA compliant
- **Consistency**: Component-based UI patterns
- **Performance**: Minimal CSS generation

### Key Styling Utilities

- Flexbox & Grid layouts
- Custom color palette
- Responsive spacing
- Dark mode support
- Animation utilities

---

## 🔐 Authentication & Authorization

### Auth Flow

```
User Registration/Login
        ↓
JWT Token Received
        ↓
Token Stored (Redux + Local Storage)
        ↓
API Requests Include Token
        ↓
Protected Routes Check Token
        ↓
Redirect if Unauthorized
```

### Protected Routes Implementation

- Components check user role before rendering
- Redirect to login if token missing/invalid
- Role-based view rendering (Student vs Instructor)

### Session Management

- JWT tokens stored in Redux
- Automatic token refresh (7-day expiry)
- Logout clears token and user data
- HttpOnly cookies for additional security

---

## ⚡ Performance Optimizations

### Build Optimization

- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components loaded on demand
- **Tree Shaking**: Unused code removed in production
- **Minification**: Full minification of JS/CSS

### Runtime Optimization

- **Memoization**: React.memo for expensive components
- **Redux**: Selectors to prevent unnecessary re-renders
- **Image Optimization**: Lazy loading images
- **CSS Purging**: Tailwind removes unused classes

### Vite-Specific

- **Lightning HMR**: Instant module hot replacement
- **Pre-bundling**: Dependency optimization
- **ES Module**: Native ES modules in dev/prod
- **Source Maps**: Development debugging

---

## 🔌 API Integration

### Endpoints Used

**Authentication**

```
POST   /api/auth/register    # User registration
POST   /api/auth/login       # User login
GET    /api/auth/me          # Get current user profile
GET    /api/auth/logout      # Logout & blacklist token
```

**Courses** (Planned)

```
GET    /api/courses          # Get all courses
GET    /api/courses/:id      # Get course details
POST   /api/courses          # Create course (Instructor)
PUT    /api/courses/:id      # Update course
DELETE /api/courses/:id      # Delete course
```

**Enrollments** (Planned)

```
POST   /api/courses/:id/enroll      # Enroll in course
GET    /api/enrollments             # Get student enrollments
GET    /api/courses/:id/students    # Get course students (Instructor)
```

### API Base URL

```
Development: http://localhost:4000/api
Production:  [Your API endpoint]
```

Configure in `.env` file:

```env
VITE_API_URL=http://localhost:4000/api
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind)

- `sm`: 640px - Small devices
- `md`: 768px - Tablets
- `lg`: 1024px - Large screens
- `xl`: 1280px - Extra large
- `2xl`: 1536px - TV/Ultra-wide

### Mobile-First Approach

- Base styles for mobile
- Override with `md:`, `lg:`, `xl:` prefixes
- Touch-friendly interactions
- Optimized viewport

---

## 🎬 Animation & Interactions

### GSAP Animations

- Page transitions
- Component entrance/exit effects
- Scroll-triggered animations
- Timeline-based sequences

### CSS Animations

- Tailwind animation utilities
- Hover & active states
- Loading spinners
- Progress indicators

### User Feedback

- Toast notifications (React Toastify)
- Loading states
- Success/Error messages
- Form validation feedback

---

## 🧪 Development Best Practices

### Code Organization

- Functional components with hooks
- Custom hooks for reusable logic
- Container vs Presentational components
- Atomic component design

### Naming Conventions

- Components: `PascalCase` (e.g., `CourseCard.jsx`)
- Utilities: `camelCase` (e.g., `formatDate.js`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `API_URL`)
- Variables: `camelCase` (e.g., `isLoading`)

### File Structure

- One component per file
- Co-locate related files
- Group by feature/domain
- Clear separation of concerns

### ESLint Rules

- React best practices enforced
- Hook dependency arrays checked
- Unused variable detection
- Import sorting

---

## 🚨 Troubleshooting

### Port Already in Use

```bash
# Change Vite port
npm run dev -- --port 3000
```

### Slow Performance

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

### Build Issues

```bash
# Clear dist directory
rm -rf dist

# Full rebuild
npm run build
```

### Environment Variables Not Loading

```bash
# Ensure .env file exists in root
# Restart dev server after changes
# Variables must start with VITE_
```

---

## 📚 Learning Resources

### React Documentation

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Redux Toolkit](https://redux-toolkit.js.org)

### Frontend Technologies

- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Docs](https://greensock.com/gsap)

### Best Practices

- [React Patterns](https://reactpatterns.com)
- [CSS Tricks](https://css-tricks.com)
- [Web.dev Performance](https://web.dev/performance)

---

## 🤝 Contributing Guidelines

### Development Setup

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m "feat: Add amazing feature"`
4. Push branch: `git push origin feature/amazing-feature`
5. Create Pull Request

### Code Standards

- Run ESLint: `npm run lint`
- Test components locally
- Document complex logic
- Follow existing patterns

### Commit Messages

```
feat:  Add new feature
fix:   Bug fix
docs:  Documentation changes
style: Code style (no logic change)
refactor: Code reorganization
perf: Performance improvements
test: Test additions
```

---

## 📝 Future Enhancements

### Planned Features

- [ ] Progressive Web App (PWA) support
- [ ] Offline course access
- [ ] Real-time notifications
- [ ] Advanced search with filters
- [ ] Course recommendations engine
- [ ] Discussion forums
- [ ] Live streaming support
- [ ] Mobile app (React Native)
- [ ] Dark mode toggle
- [ ] Multi-language support

### Performance Goals

- [ ] Lighthouse score: 90+
- [ ] First Contentful Paint: < 1.5s
- [ ] Bundle size: < 200KB (gzipped)
- [ ] Core Web Vitals optimization

---

## 📄 License

This project is licensed under the **MIT License** - see LICENSE file for details.

---

## 👨‍💼 Professional Context

**SkillBridge Frontend** represents a production-grade React application following industry best practices and modern web development standards. Built with performance, scalability, and maintainability in mind for enterprise-level requirements.

---

## 📞 Support

For issues, questions, or suggestions:

- 📧 Email: support@skillbridge.dev
- 🐛 Report Issues: Use GitHub Issues
- 💬 Discussions: Use GitHub Discussions

---

<div align="center">

### Built with ❤️ using React & Vite

**Last Updated**: December 2025

</div>
