# DashGo

A modern admin dashboard application built with Next.js, TypeScript, and Chakra UI featuring user authentication, data visualization, and user management capabilities.

## 🚀 Features

- **Authentication System** - Login form with form validation using React Hook Form and Yup
- **Dashboard Analytics** - Interactive charts and data visualization with ApexCharts
- **User Management** - Create and manage users with paginated tables
- **Responsive Design** - Mobile-first responsive layout with Chakra UI
- **Modern UI/UX** - Clean and intuitive interface with smooth animations using Framer Motion
- **API Integration** - Data fetching and state management with React Query
- **Mock API** - Development API using MirageJS for testing

## 🛠️ Tech Stack

- **Framework:** Next.js 12
- **Language:** TypeScript
- **UI Library:** Chakra UI
- **State Management:** React Query
- **Form Handling:** React Hook Form + Yup validation
- **Charts:** ApexCharts + React ApexCharts
- **Animations:** Framer Motion
- **Mock API:** MirageJS
- **Icons:** React Icons
- **HTTP Client:** Axios

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dashgo
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Form/            # Form components (Input, etc.)
│   ├── Header/          # Header with logo, search, and profile
│   ├── Pagination/      # Pagination components
│   └── Sidebar/         # Navigation sidebar
├── contexts/            # React contexts
│   └── SidebarDrawerContext.tsx
├── pages/              # Next.js pages
│   ├── dashboard.tsx   # Main dashboard with charts
│   ├── index.tsx       # Login page
│   └── users/          # User management pages
├── services/           # API services and hooks
│   ├── api.ts          # Axios configuration
│   ├── hooks/          # Custom React Query hooks
│   └── mirage/         # Mock API setup
└── styles/
    └── theme.ts        # Chakra UI theme configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features Overview

### Authentication

- Login form with email and password validation
- Form error handling and loading states
- Responsive login interface

### Dashboard

- Weekly subscription analytics chart
- Open rate metrics visualization
- Responsive grid layout for charts

### User Management

- User listing with pagination
- Create new user functionality
- Search and filter capabilities

### UI Components

- Reusable form inputs with validation
- Responsive header with search and profile
- Collapsible sidebar navigation
- Custom pagination component

## 🔗 API Integration

The application uses React Query for efficient data fetching and caching. MirageJS provides a mock API for development and testing purposes.

## 📱 Responsive Design

Built with mobile-first approach using Chakra UI's responsive utilities, ensuring optimal experience across all device sizes.

## 🎯 Getting Started

1. Start with the login page at `/`
2. Navigate to `/dashboard` to view analytics
3. Manage users at `/users`
4. Create new users at `/users/create`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
