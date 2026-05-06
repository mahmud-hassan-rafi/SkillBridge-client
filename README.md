# SkillBridge - Frontend Application

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4?logo=tailwindcss&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux--Toolkit-2.11.0-764ABC?logo=redux&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-Integration-0070BA?logo=stripe&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-green.svg)

**A production-grade React frontend for SkillBridge** — a comprehensive online learning platform featuring dual-role support for students and instructors, secure payment processing, and modern responsive UI built with industry best practices.

[📖 Documentation](#-documentation) • [✨ Features](#-features) • [🛠️ Tech Stack](#-tech-stack) • [📁 Project Structure](#-project-structure) • [🚀 Getting Started](#-getting-started) • [🔧 Development](#-development) • [📚 API Integration](#-api-integration)

</div>

---

## 📖 Documentation

### What is SkillBridge?

SkillBridge is a full-stack MERN (MongoDB, Express, React, Node.js) web application designed as a Udemy-like online learning marketplace. This repository contains the **React-based frontend** application serving two distinct user personas:

- **Students**: Discover, purchase, and complete courses with progress tracking
- **Instructors**: Create courses, manage content, track enrollments, and generate revenue

### Frontend Responsibilities

The frontend application provides:

1. **User Authentication UI** - Registration, login, and profile management flows
2. **Student Portal** - Browse courses, detailed course pages, enrollment management, video player
3. **Instructor Dashboard** - Course creation, enrollment tracking, analytics overview
4. **Payment Processing** - Stripe integration for secure course purchases
5. **Real-time State Management** - Redux-based global state for users, courses, and enrollments
6. **Responsive Design** - Mobile-first UI optimized for all screen sizes
7. **Real-time Notifications** - Toast-based feedback system for user actions

---

## ✨ Features

### 🎓 Student Features

#### Course Discovery & Management

- **Browse All Courses** - View complete course catalog with filtering options
- **Advanced Search** - Filter courses by title, instructor, price range
- **Course Details Page** - Comprehensive course information including:
  - Detailed course description and learning objectives
  - Instructor profile and credentials
  - Dynamic pricing with discount calculations
  - Student ratings and reviews
  - Complete curriculum structure with section/lesson breakdown
  - Course preview via YouTube integration
  - Enrollment status indicator

#### Payment & Enrollment

- **Secure Payment Processing**
  - Stripe Payments API integration for course purchases
  - Secure checkout form with card validation
  - Payment failure error handling
  - Automatic enrollment upon successful payment
- **Enrollment Confirmation**
  - Instant course access after payment
  - Confirmation email with course details
  - Automatic redirect to player page

#### Learning Dashboard

- **Enrollment Tracking**
  - View all enrolled courses in personalized dashboard
  - Progress percentage for each course
  - Course completion status
  - Quick access buttons to continue learning
- **Video Player**
  - YouTube video player integration
  - Dynamic course structure display
  - Lesson-by-lesson navigation
  - Complete course curriculum browsing

#### User Profile

- **Profile Management**
  - View and update personal information
  - Change password with validation
  - Update email address
  - Profile image/avatar support

### 👨‍🏫 Instructor Features

#### Course Management

- **Course Creation**
  - Create new courses with rich content
  - Add course title, description, and learning objectives
  - Set course pricing with optional discount rates
  - Upload course thumbnail with Cloudinary integration
  - Organize content into sections and lessons
  - Add YouTube videos as lesson content
  - Add text-based lessons with rich formatting
- **Content Editing**
  - Edit existing course information
  - Manage course sections and lessons
  - Update pricing and discounts
  - Modify course thumbnail

#### Enrollment Tracking

- **Student Enrollment List**
  - View all students enrolled in instructor's courses
  - Track enrollment dates
  - View purchase amounts per enrollment
  - Monitor active and completed enrollments

#### Dashboard Analytics

- **Performance Metrics**
  - Total revenue from all courses
  - Number of courses created
  - Total student enrollments
  - Quick overview of key metrics

#### Onboarding

- **Multi-step Onboarding Process**
  - Teaching experience evaluation
  - Video content expertise assessment
  - Existing audience evaluation
  - Role verification before instructor access

### 🔐 Universal Authentication & Security

#### Authentication System

- **Registration**
  - Email and password-based registration
  - Password strength validation
  - Duplicate email prevention
  - Automatic role assignment
- **Login**
  - Secure credential verification
  - JWT token generation
  - Token storage in Redux and cookies
  - Automatic session persistence
- **Session Management**
  - JWT-based authentication
  - Token expiration handling (7-day refresh)
  - Token blacklisting on logout
  - HttpOnly cookie security
  - Protected API requests with Authorization headers

#### Authorization & Access Control

- **Role-Based Access Control**
  - Student-only routes and features
  - Instructor-only routes and features
  - Admin capabilities for system management
  - Automatic redirects for unauthorized access
- **Protected Routes**
  - Route guards verify user authentication
  - Role-based route protection
  - Automatic logout on token expiration
  - Graceful error handling

#### Data Security

- **Password Security**
  - Bcrypt hashing on backend
  - Validation of password strength
  - Secure password change functionality
- **API Security**
  - CORS configuration for cross-origin requests
  - Authorization header validation
  - Secure cookie handling
  - XSS protection through React

### 📱 Responsive Design

#### Mobile Optimization

- **Touch-Friendly Interface** - All interactive elements optimized for touch
- **Mobile Navigation** - Simplified navigation for small screens
- **Optimized Media** - Images and videos responsive to screen size
- **Readable Typography** - Font sizes scale appropriately

#### Breakpoint Coverage

- **Mobile** (320px - 640px) - Phones and small tablets
- **Tablet** (641px - 1024px) - Tablets in portrait and landscape
- **Desktop** (1025px - 1536px) - Standard desktop screens
- **Large Desktop** (1537px+) - Ultra-wide displays

### 🎨 User Experience & Interface

#### Modern UI Components

- **Navigation** - Fixed/sticky headers with mobile menu
- **Cards** - Course cards with hover effects and lazy loading
- **Forms** - Input validation with real-time feedback
- **Modals** - Confirmation and error dialogs
- **Loading States** - Skeleton screens and spinners
- **Progress Indicators** - Course progress bars and completion tracking

#### Real-time Feedback

- **Toast Notifications**
  - Success confirmations
  - Error messages with actionable feedback
  - Info notifications
  - Auto-dismiss with manual close option
- **Loading Indicators** - Page and component-level loading states
- **Form Validation** - Real-time field validation with error messages
- **Empty States** - Helpful messages when no data available

---

## 🛠️ Tech Stack

### Core Framework & Build

| Technology    | Version | Purpose                                    |
| ------------- | ------- | ------------------------------------------ |
| **React**     | 18.3.1  | UI component library and framework         |
| **React DOM** | 18.3.1  | DOM rendering for React applications       |
| **Vite**      | 7.2.4   | Lightning-fast build tool with HMR support |
| **Node.js**   | 20+     | JavaScript runtime environment             |
| **npm**       | 9+      | Package manager                            |

### State Management & Data

| Technology          | Version    | Purpose                                      |
| ------------------- | ---------- | -------------------------------------------- |
| **Redux Toolkit**   | 2.11.0     | Predictable state management                 |
| **React-Redux**     | 9.2.0      | React bindings for Redux                     |
| **Redux RTK Query** | (included) | Built-in data fetching/caching (via toolkit) |

### Styling & UI

| Technology            | Version | Purpose                      |
| --------------------- | ------- | ---------------------------- |
| **Tailwind CSS**      | 4.1.17  | Utility-first CSS framework  |
| **@tailwindcss/vite** | 4.1.17  | Vite plugin for Tailwind CSS |

### Routing & Navigation

| Technology           | Version | Purpose                            |
| -------------------- | ------- | ---------------------------------- |
| **React Router DOM** | 7.10.1  | Client-side routing and navigation |

### Payment Processing

| Technology                  | Version | Purpose                     |
| --------------------------- | ------- | --------------------------- |
| **@stripe/stripe-js**       | 8.9.0   | Stripe JavaScript library   |
| **@stripe/react-stripe-js** | 5.6.1   | React components for Stripe |

### Rich Text & Media

| Technology        | Version | Purpose                        |
| ----------------- | ------- | ------------------------------ |
| **React Quill**   | 2.0.0   | WYSIWYG rich text editor       |
| **React-YouTube** | 10.1.0  | YouTube video player component |

### Animations & Motion

| Technology        | Version | Purpose                     |
| ----------------- | ------- | --------------------------- |
| **Framer Motion** | 12.38.0 | Animation library for React |

### UI Utilities

| Technology         | Version | Purpose                                 |
| ------------------ | ------- | --------------------------------------- |
| **React Icons**    | 5.5.0   | Popular icon library with React support |
| **RC Progress**    | 4.0.0   | Animated progress bars and indicators   |
| **React Toastify** | 11.0.5  | Toast notification system               |

### Utilities & Helpers

| Technology            | Version | Purpose                                            |
| --------------------- | ------- | -------------------------------------------------- |
| **Socket.io-client**  | 4.8.3   | Real-time bidirectional communication (configured) |
| **Humanize-duration** | 3.33.2  | Human-readable duration formatting                 |
| **Uniqid**            | 5.4.0   | Unique ID generation                               |
| **Lodash-es**         | 4.18.1  | Utility library with ES modules                    |

### Development Tools

| Technology               | Version | Purpose                         |
| ------------------------ | ------- | ------------------------------- |
| **ESLint**               | 9.39.1  | Code quality and style checking |
| **@vitejs/plugin-react** | 5.1.1   | Fast Refresh for React in Vite  |
| **Vite**                 | 7.2.4   | Dev server with HMR             |

### Configuration

| Technology             | Purpose                                                    |
| ---------------------- | ---------------------------------------------------------- |
| **jsconfig.json**      | Path aliases for clean imports (@components, @pages, etc.) |
| **eslint.config.js**   | ESLint rules for React code quality                        |
| **tailwind.config.js** | Custom Tailwind CSS configuration                          |
| **vite.config.js**     | Vite build configuration                                   |

---

## 📁 Project Structure

```
SkillBridge-client/
│
├── public/                                  # Static assets served directly
│   └── avater/                             # User avatar storage
│
├── src/
│   │
│   ├── components/                         # Reusable React components
│   │   ├── common/                        # Shared components used everywhere
│   │   │   ├── Loading.jsx                # Loading spinner component
│   │   │   ├── InsideButtonLoader.jsx     # In-button loading spinner
│   │   │   └── ScrollToTop.jsx            # Auto-scroll on route change
│   │   │
│   │   ├── Instructor/                    # Instructor-specific components
│   │   │   ├── Navbar.jsx                 # Instructor navigation bar
│   │   │   ├── Sidebar.jsx                # Instructor sidebar menu
│   │   │   ├── Footer.jsx                 # Instructor footer section
│   │   │   ├── EnrollmentRow.jsx          # Student enrollment table row
│   │   │   ├── dashboard/                 # Dashboard sub-components
│   │   │   ├── addCourse/                 # Course creation components
│   │   │   ├── enrollment/                # Enrollment management components
│   │   │   ├── onBoarding/                # Instructor onboarding components
│   │   │   └── becomeInstructor/          # Become instructor flow
│   │   │
│   │   └── Student/                       # Student-specific components
│   │       ├── Navbar.jsx                 # Student navigation bar
│   │       ├── Footer.jsx                 # Student footer section
│   │       ├── CourseCard.jsx             # Individual course card
│   │       ├── CoursesSection.jsx         # Grid/list of courses
│   │       ├── CourseStructure.jsx        # Course curriculum display
│   │       ├── CallToActions.jsx          # CTA sections
│   │       ├── Companies.jsx              # Partner companies showcase
│   │       ├── Rating.jsx                 # Course ratings display
│   │       └── courseDetails/             # Course detail page components
│   │
│   ├── pages/                              # Page-level components (full pages)
│   │   ├── common/
│   │   │   └── PageNotFound.jsx           # 404 error page
│   │   │
│   │   ├── Instructor/                    # Instructor pages
│   │   │   ├── Dashboard.jsx              # Instructor main dashboard
│   │   │   ├── AddCourse.jsx              # Course creation page
│   │   │   ├── MyCourses.jsx              # Instructor's courses list
│   │   │   └── StudentsEnrolled.jsx       # Student enrollment tracking
│   │   │
│   │   └── Student/                       # Student pages
│   │       ├── Home.jsx                   # Landing/home page
│   │       ├── CoursesList.jsx            # All courses listing
│   │       ├── CourseDetails.jsx          # Single course details
│   │       ├── MyEnrollments.jsx          # Student's enrolled courses
│   │       └── Player.jsx                 # Video player page
│   │
│   ├── layouts/                            # Layout wrapper components
│   │   ├── MainLayoutStudent.jsx          # Main layout for student pages
│   │   ├── BecomeInstructorOnboardingLayout.jsx # Onboarding layout
│   │   └── InstructorLayout.jsx           # Main layout for instructor pages
│   │
│   ├── context/                            # React Context for global state
│   │   ├── AppContext.jsx                 # App-wide context (theme, user prefs)
│   │   ├── Context.jsx                    # Additional context providers
│   │   └── InstructorOnBoarding.context.jsx # Onboarding workflow context
│   │
│   ├── features/                           # Feature-based slices (Redux patterns)
│   │   ├── auth/                          # Authentication feature
│   │   │   ├── authApi.js                 # Auth API endpoints (RTK Query)
│   │   │   └── authSlice.js               # Auth state slice
│   │   ├── course/                        # Course feature
│   │   │   └── courseApi.js               # Course API endpoints
│   │   ├── payment/                       # Payment processing feature
│   │   │   ├── paymentApi.js              # Payment API endpoints
│   │   │   └── pages/
│   │   │       ├── CourseCheckout.jsx     # Stripe checkout page
│   │   │       └── PaymentSuccess.jsx     # Success page after payment
│   │   └── enrollement/                   # Enrollment feature
│   │       ├── enrollmentApi.js           # Enrollment API endpoints
│   │       └── meSlice.js                 # Enrollment state
│   │
│   ├── hooks/                              # Custom React hooks
│   │   └── ContextHook.jsx                # Custom hooks for context
│   │
│   ├── routes/                             # Routing configuration
│   │   ├── AppRoutes.jsx                  # Main router configuration
│   │   ├── guards/                        # Route guard components
│   │   └── redirects/                     # Route redirect logic
│   │
│   ├── services/                           # API and external services
│   │   ├── api.js                         # RTK Query setup and base config
│   │   └── config/
│   │       └── socket.js                  # Socket.io configuration (ready for use)
│   │
│   ├── stores/                             # Redux store configuration
│   │   └── store.js                       # Redux store setup with middleware
│   │
│   ├── skeleton/                           # Skeleton/loading components
│   │   ├── PaymentSkeleton.jsx            # Payment skeleton loader
│   │   ├── instructor/                    # Instructor skeleton loaders
│   │   └── course/                        # Course skeleton loaders
│   │
│   ├── utils/                              # Utility functions and helpers
│   │   ├── factoryFunction.js             # Factory pattern utilities
│   │   ├── validateCourse.js              # Course validation logic
│   │   └── toast-notify/
│   │       └── toastify.js                # Toast notification helpers
│   │
│   ├── assets/                             # Static assets
│   │   ├── assets.js                      # Asset exports (images, icons)
│   │   └── fonts/
│   │       └── Outfit/                    # Custom font files
│   │
│   ├── App.jsx                             # Root component with providers
│   ├── main.jsx                            # Vite entry point
│   └── index.css                           # Global styles and Tailwind imports
│
├── .gitignore                              # Git ignore rules
├── eslint.config.js                        # ESLint configuration
├── index.html                              # HTML template
├── jsconfig.json                           # Path aliases configuration
├── package.json                            # Dependencies and scripts
├── tailwind.config.js                      # Tailwind CSS configuration
├── vite.config.js                          # Vite build configuration
├── vercel.json                             # Vercel deployment config
├── LICENSE                                 # Project license (ISC)
└── README.md                               # This file
```

### Key Directory Explanations

**`/features/`** - Redux-organized feature modules using slicing pattern:

- Each feature folder contains domain-specific API endpoints and state
- `authApi.js` - Uses RTK Query for async thunk + caching
- `courseApi.js`, `enrollmentApi.js`, `paymentApi.js` - Separate concerns

**`/components/`** - Reusable UI components organized by context:

- `common/` - Shared across app (Loading, ScrollToTop, etc.)
- `Instructor/` & `Student/` - Role-specific components
- Component-per-file convention for maintainability

**`/pages/`** - Full-page route components:

- Combined with layouts for complete page structure
- One primary responsibility per page
- Directory structure mirrors routing structure

**`/hooks/`** - Custom React hooks for logic reuse:

- `ContextHook.jsx` - Exposes context values with clean API

**`/services/`** - External integrations and API setup:

- `api.js` - RTK Query base setup with axios/fetch configuration
- `socket.js` - Socket.io client initialization (configured but not active)

---

## 🚀 Getting Started

### System Requirements

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher
- **Git**: Latest version
- **Code Editor**: VS Code recommended (with ES7+ snippet extensions)

### Pre-requisites

Before starting, ensure the backend server is accessible:

- Backend API should be running on `http://localhost:5000` or configured in `.env`
- MongoDB connection verified on backend

### Installation Steps

1. **Navigate to project directory**

```bash
cd SkillBridge-client
```

2. **Install dependencies**

```bash
npm install
```

This installs all packages listed in `package.json` and creates `node_modules/` directory.

3. **Configure environment variables**

Create a `.env` file in the project root:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# Stripe Public Key (get from Stripe dashboard)
VITE_STRIPE_PK=pk_test_your_stripe_public_key_here
```

**Important Notes:**

- All environment variables must start with `VITE_` to be exposed to the frontend
- Never commit `.env` file to version control
- Use `.env.example` for documentation of required variables

4. **Start development server**

```bash
npm run dev
```

Application will start at: **`http://localhost:5173`**

The Vite dev server includes:

- Full Hot Module Replacement (HMR)
- Fast React Refresh
- Optimized dependencies
- Source maps for debugging

### Quick Verification

After starting the dev server:

1. Open `http://localhost:5173` in your browser
2. Check browser console for errors
3. Test authentication flow (register/login)
4. Verify API calls in Network tab (should hit `http://localhost:5000/api/*`)
5. Check that student/instructor UI renders correctly

---

## 🔧 Development

### Available Scripts

#### Development

```bash
# Start development server with HMR
npm run dev

# Start on custom port
npm run dev -- --port 3000

# Preview production build (test before deployment)
npm run preview
```

#### Production Build

```bash
# Build optimized production bundle
npm run build

# Output: dist/ directory with minified assets
# Includes tree-shaking, code splitting, minification
```

#### Code Quality

```bash
# Run ESLint to check code quality
npm run lint

# Automatically fix ESLint issues
npm run lint -- --fix

# Fix with specific rules
npm run lint -- --fix src/
```

### Development Workflow

#### Single Developer Setup

```bash
# Terminal 1: Frontend (React + Vite)
cd SkillBridge-client
npm run dev

# Application accessible at http://localhost:5173
```

**Then in another terminal, start the backend:**

```bash
# Terminal 2: Backend (Node.js + Express)
cd SkillBridge-server
npm run server

# API accessible at http://localhost:5000/api
```

#### Environment Variables During Development

For testing different scenarios:

```bash
# .env.development (local)
VITE_API_BASE_URL=http://localhost:5000/api

# .env.staging (before production)
VITE_API_BASE_URL=https://staging-api.skillbridge.dev/api

# .env.production (live)
VITE_API_BASE_URL=https://api.skillbridge.dev/api
```

### Component Development

#### Creating a New Component

```bash
# File: src/components/Student/NewFeature.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "@assets/assets"; // if using assets

const NewFeature = () => {
  return (
    <div className="p-4">
      {/* Component JSX */}
    </div>
  );
};

export default NewFeature;
```

#### Best Practices

- **One component per file** - Easier to test and maintain
- **Use functional components** - Modern React standard
- **Custom hooks** - Extract logic to `src/hooks/`
- **Prop destructuring** - Extract props at function signature
- **Memoization** - Use `React.memo()` for expensive renders
- **TypeScript-ready** - Add `.d.ts` files as needed

### State Management

#### Redux Usage (Global State)

For global state like user authentication:

```javascript
// In features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, isLoading: false },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
```

#### RTK Query Usage (API Calls)

For API data fetching:

```javascript
// In features/course/courseApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/courses/get",
    }),
  }),
});

export const { useGetCoursesQuery } = courseApi;
```

#### Context API Usage (Feature-Specific State)

```javascript
// In context/AppContext.jsx
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userPreference, setUserPreference] = useState(null);

  return (
    <AppContext.Provider value={{ userPreference, setUserPreference }}>
      {children}
    </AppContext.Provider>
  );
};
```

### Styling Guidelines

#### Tailwind CSS Classes

```jsx
// Responsive design pattern
<div className="w-full md:w-1/2 lg:w-1/3">
  <p className="text-sm md:text-base lg:text-lg">
    Responsive text
  </p>
</div>

// Dark mode support
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content
</div>

// Hover and active states
<button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800">
  Click me
</button>
```

#### Custom Styling Location

- **Global styles**: `src/index.css`
- **Component-specific**: Use Tailwind classes directly in JSX
- **Complex animations**: `src/index.css` with keyframes
- **Theme colors**: Configure in `tailwind.config.js`

### Debugging

#### Browser DevTools

1. **React Developer Tools Chrome Extension**
   - Inspect component hierarchy
   - View/edit component props
   - Track render performance

2. **Redux DevTools Extension**
   - Time-travel debugging
   - Dispatch action history
   - State snapshot comparison

#### Console Debugging

```javascript
// Explicit console logs
console.log("Component render", { data });
console.error("Error occurred:", error);
console.warn("Warning message");

// Conditional logging
if (process.env.NODE_ENV === "development") {
  console.log("Dev mode only");
}

// Performance monitoring
console.time("apiCall");
// ... code
console.timeEnd("apiCall");
```

#### Network Debugging

- Open DevTools → Network tab
- Filter by XHR requests
- Verify API endpoints match backend routes
- Check request/response headers and payloads
- Inspect status codes (200, 400, 401, 500, etc.)

---

## 📚 API Integration

### API Configuration

#### Base Setup (src/services/api.js)

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token; // Get from Redux state
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include", // Include cookies in requests
  }),
  tagTypes: ["User", "Course", "Enrollment"],
  endpoints: () => ({}),
});
```

### Implemented API Endpoints

#### Authentication Endpoints

```
POST   /api/auth/register        # User registration
POST   /api/auth/login           # User login
GET    /api/auth/me              # Get current user profile
GET    /api/auth/logout          # Logout & blacklist token
```

#### Course Endpoints

```
GET    /api/courses/get          # Get all courses (paginated)
GET    /api/courses/get/:id      # Get single course details
POST   /api/courses/create       # Create course (Instructor only)
GET    /api/courses/get-instructor-courses  # Instructor's courses
GET    /api/courses/get-enrollments         # Course enrollments
GET    /api/courses/dashboard              # Dashboard analytics
```

#### Enrollment Endpoints

```
GET    /api/enrollment/my-enrollments      # Student's enrolled courses
GET    /api/enrollment/is-enrolled/:courseId  # Check enrollment status
GET    /api/me/enrollments                 # Get enrollments via ME endpoint
```

#### Payment Endpoints

```
POST   /api/stripe/create-payment-intent   # Create Stripe payment intent
POST   /api/stripe/webhook                 # Stripe webhook handler
```

#### User Endpoints

```
PATCH  /api/me/profile           # Update user profile
DELETE /api/me/profile           # Delete user account
```

### API Usage Examples

#### Making API Calls with RTK Query

```javascript
// In a component
import { useGetCoursesQuery } from "@features/course/courseApi";

function CourseList() {
  const { data: courses, isLoading, error } = useGetCoursesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return courses.map((course) => (
    <CourseCard key={course._id} course={course} />
  ));
}
```

#### Making Mutations (POST/PUT/DELETE)

```javascript
import { useCreateCourseMutation } from "@features/course/courseApi";

function CreateCourse() {
  const [createCourse, { isLoading }] = useCreateCourseMutation();

  const handleSubmit = async (formData) => {
    try {
      const result = await createCourse(formData).unwrap();
      console.log("Course created:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(new FormData(e.target));
      }}
    >
      {/* Form fields */}
      <button disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Course"}
      </button>
    </form>
  );
}
```

#### Error Handling

```javascript
import { errorNotify } from "@utils/toast-notify/toastify";

try {
  const result = await someApiCall().unwrap();
} catch (error) {
  if (error?.status === 401) {
    errorNotify("Please login first");
    // Redirect to login
  } else if (error?.status === 403) {
    errorNotify("You don't have permission");
  } else {
    errorNotify(error?.data?.message || "Something went wrong");
  }
}
```

### Stripe Payment Integration

#### Setup Steps

1. **Get Stripe Keys**
   - Sign up at https://stripe.com
   - Get Public Key (starts with `pk_test_`)
   - Keep Private Key on backend only

2. **Configure Frontend**

```bash
# In .env
VITE_STRIPE_PK=pk_test_your_key
```

3. **Stripe Checkout Flow**

```javascript
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

function Checkout() {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    // Create payment intent via API
    createPaymentIntent({ courseId, price }).then((res) =>
      setClientSecret(res.clientSecret),
    );
  }, []);

  if (!clientSecret) return <Loading />;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm courseId={courseId} />
    </Elements>
  );
}
```

---

## 📱 Responsive Design Implementation

### Mobile-First Approach

All Tailwind classes use mobile-first breakpoints:

```jsx
// Small by default, larger on bigger screens
<div className="p-4 md:p-8 lg:p-12">
  <h1 className="text-2xl md:text-3xl lg:text-4xl">Title</h1>
</div>
```

### Breakpoints Reference

| Prefix | Screen Size | Use Case      |
| ------ | ----------- | ------------- |
| (none) | 320px+      | Mobile phones |
| `sm:`  | 640px+      | Small tablets |
| `md:`  | 768px+      | iPad/tablets  |
| `lg:`  | 1024px+     | Laptops       |
| `xl:`  | 1280px+     | Desktop       |
| `2xl:` | 1536px+     | Large desktop |

### Common Responsive Patterns

```jsx
// Navigation menu - hide on mobile, show on desktop
<nav className="hidden md:flex md:gap-4">
  {/* Desktop nav */}
</nav>
<button className="md:hidden">
  {/* Mobile menu toggle */}
</button>

// Grid layout - responsive columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Grid items automatically reflow */}
</div>

// Image responsive sizing
<img
  src={course.thumbnail}
  className="w-full h-auto md:h-60 lg:h-80 object-cover"
/>
```

---

## 🎨 Theming & Customization

### Tailwind Configuration

Edit `tailwind.config.js` to customize:

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#your-color",
      },
      fontSize: {
        custom: "var(--text-custom)",
      },
    },
  },
};
```

### Custom Fonts

Fonts stored in `src/assets/fonts/Outfit/`:

```css
/* In index.css */
@font-face {
  font-family: "Outfit";
  src: url("@assets/fonts/Outfit/Outfit-Regular.ttf");
}
```

Used in config:

```javascript
// tailwind.config.js
theme: {
  fontFamily: {
    outfit: ["Outfit", "sans-serif"];
  }
}
```

---

## 🧪 Testing & Quality Assurance

### Code Quality Checks

```bash
# Run ESLint
npm run lint

# Fix issues automatically
npm run lint -- --fix
```

### Manual Testing Checklist

- [ ] Registration/Login flows work
- [ ] Protected routes redirect unauthorized users
- [ ] Course enrollment process complete
- [ ] Stripe payment integration working
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Toast notifications appear correctly
- [ ] API errors handled gracefully
- [ ] Performance acceptable (<3s load time)

### Performance Optimization

Check current performance:

```bash
npm run build

# Check bundle size
npm run preview
# Then open DevTools → Network tab
```

---

## 🚀 Deployment

### Build for Production

```bash
# Create optimized production build
npm run build

# Output: dist/ directory
# Ready for deployment to Vercel, Netlify, etc.
```

### Vercel Deployment (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "Production ready"
git push origin main
```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Import GitHub repository
   - Set environment variables
   - Deploy automatically

3. **Environment Variables on Vercel**

Settings → Environment Variables:

```
VITE_API_BASE_URL = https://api.skillbridge.dev/api
VITE_STRIPE_PK = pk_live_your_production_key
```

### Alternative Deployments

- **Netlify**: `netlify.toml` configuration needed
- **AWS**: S3 + CloudFront for CDN
- **Docker**: Containerize React app
- **Traditional VPS**: nginx + Node proxy

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### Port 5173 Already in Use

```bash
# Change to different port
npm run dev -- --port 3000
```

#### API 404 Errors

- Verify backend is running: `http://localhost:5000`
- Check `VITE_API_BASE_URL` in `.env`
- Inspect Network tab for actual request URL
- Verify endpoint exists on backend

#### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

#### Stale Dependencies

```bash
# Clear npm cache
npm cache clean --force

# Reinstall
npm install
```

#### Vite HMR Not Working

- Check browser console for errors
- Ensure dev server is running
- Try hard refresh (Ctrl+Shift+R)
- Check if port 5173 is blocked by firewall

#### Stripe Key Errors

- Verify `VITE_STRIPE_PK` starts with `pk_test_`
- Check key is in correct `.env` file
- Restart dev server after changing `.env`
- Test with Stripe test cards

#### CORS Errors

- Backend must allow `http://localhost:5173` in CORS
- Check `Access-Control-Allow-Origin` header
- Ensure credentials: true in API requests
- Verify backend `.env` has correct origin

---

## 📚 Resources & Documentation

### Official Documentation

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com
- **React Router**: https://reactrouter.com/
- **Redux Toolkit**: https://redux-toolkit.js.org
- **Stripe React**: https://stripe.com/docs/stripe-js/react

### Learning Resources

- **React Patterns**: https://reactpatterns.com
- **Web Performance**: https://web.dev/performance
- **Accessibility**: https://www.a11y-101.com
- **CSS Tips**: https://css-tricks.com

---

## 🤝 Contributing Guidelines

### Development Workflow

1. **Create feature branch**

```bash
git checkout -b feature/amazing-feature
```

2. **Make changes and commit**

```bash
git commit -m "feat: Add amazing feature"
```

3. **Push to repository**

```bash
git push origin feature/amazing-feature
```

4. **Create Pull Request** on GitHub

### Commit Message Convention

```
feat:      Add new feature
fix:       Bug fix
docs:      Documentation changes
style:     Code formatting (no logic change)
refactor:  Code reorganization
perf:      Performance improvements
test:      Add tests
chore:     Build/dependency updates
```

### Code Standards

- Run `npm run lint` before committing
- Follow existing code patterns
- Add JSDoc comments for complex functions
- Keep components focused and reusable
- Test on mobile before pushing

---

## 📄 License

This project is licensed under the **ISC License**.

See [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Built by**: Mahmud Hassan Rafi  
**Repository**: [SkillBridge](https://github.com/yourname/skillbridge)  
**Last Updated**: May 2026

---

## 📞 Support & Contact

For questions, issues, or suggestions:

- **Issues**: Open GitHub Issue with detailed description
- **Discussions**: Use GitHub Discussions for questions
- **Email**: skillbridge@example.com
- **Documentation**: See `/docs/` for detailed guides

---

<div align="center">

**Built with ❤️ for lifelong learners**

⭐ If you find this helpful, please star the repository!

</div>
