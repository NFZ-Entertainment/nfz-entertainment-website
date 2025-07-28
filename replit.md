# NFZ Entertainment 4D VR Application

## Overview

This is a full-stack web application for NFZ Entertainment, showcasing their cutting-edge 4D VR kiosks and facilitating partnership inquiries. The application features a modern, immersive marketing website with neon-themed design elements and comprehensive contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom design system featuring neon color schemes
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot module replacement with Vite integration

### Key Components

#### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Full-screen video background with animated text
- **Experience Showcase**: Interactive gallery of VR experiences
- **Technology Section**: 4D VR technology feature explanations
- **Partnership Section**: Business partnership information
- **Contact Section**: Partnership inquiry form with validation
- **Footer**: Social media links and company information

#### Backend Services
- **Partnership Inquiry API**: Handles form submissions with validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Request Logging**: Custom middleware for API request tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Flow

1. **Form Submission**: User fills out partnership inquiry form
2. **Validation**: Frontend validates using React Hook Form with Zod schemas
3. **API Request**: TanStack Query sends POST request to `/api/partnership-inquiry`
4. **Server Processing**: Express route validates data and stores inquiry
5. **Response**: Success/error feedback displayed via toast notifications
6. **Data Retrieval**: Admin endpoint at `/api/partnership-inquiries` for viewing submissions

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom theme
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (TikTok, etc.)

### Backend Infrastructure
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle Kit**: Database migration and schema management
- **Connect PG Simple**: PostgreSQL session store for Express

### Development Tools
- **Vite**: Build tool with HMR and TypeScript support
- **ESBuild**: Fast TypeScript compilation for production
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Hot Reloading**: Automatic refresh for both frontend and backend changes
- **Database**: Neon serverless PostgreSQL with environment-based configuration

### Production Deployment
- **Build Process**: Vite builds static assets, ESBuild compiles server code
- **Static Assets**: Served from `dist/public` directory
- **Server**: Express server serves both API routes and static files
- **Database Migration**: Drizzle Kit handles schema changes and migrations

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string for Neon database
- **NODE_ENV**: Environment flag for development/production behavior
- **Session Storage**: PostgreSQL-backed sessions for scalability

The application uses a monorepo structure with shared TypeScript schemas between frontend and backend, ensuring type safety across the entire stack. The storage layer is abstracted to allow easy migration from in-memory storage to full PostgreSQL implementation.

## Recent Updates

### July 28, 2025
- **Fixed ES Module Compatibility**: Resolved `__dirname` error in vite configuration files for proper ES module support
- **Build System Ready**: Verified build process works correctly with output to `dist/public`
- **Deployment Prepared**: All Vercel configuration files ready for GitHub deployment
  - `vercel.json` configured with custom build script
  - `build.sh` executable and tested successfully  
  - `.gitignore` properly configured to exclude build artifacts
- **Application Status**: Running successfully on port 5000 in development mode