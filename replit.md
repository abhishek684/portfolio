# Abhishek Kumar Portfolio Website

## Overview

This is a personal portfolio website for Abhishek Kumar, a Full Stack Developer at Lion Group. The application is built using a modern full-stack architecture with React frontend, Express backend, and PostgreSQL database using Drizzle ORM. The portfolio showcases personal information, family details, education timeline, work experience, and a photo gallery.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, styled using Tailwind CSS and shadcn/ui components
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Build System**: Vite for frontend bundling and development server
- **Deployment**: Single build process that creates both client and server artifacts

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for client-side routing
- **Animations**: Custom CSS animations with intersection observer for scroll-triggered effects

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **Development**: Hot module replacement via Vite integration
- **API Design**: RESTful API structure with `/api` prefix

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Schema Generation**: Drizzle-zod integration for type-safe validation schemas
- **Migrations**: Drizzle Kit for database schema migrations

## Data Flow

1. **Client Requests**: React components make API calls using TanStack React Query
2. **Server Processing**: Express routes handle API requests and interact with database via Drizzle ORM
3. **Database Operations**: Type-safe database queries using Drizzle ORM with PostgreSQL
4. **Response Handling**: JSON responses with error handling middleware
5. **State Updates**: React Query manages caching and synchronization of server state

## External Dependencies

### UI and Styling
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **Drizzle ORM**: Type-safe database toolkit
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds

### Portfolio-Specific Features
- **Image Gallery**: Local image assets with lightbox functionality
- **Smooth Scrolling**: Custom navigation with smooth scroll behavior
- **Contact Forms**: Form handling with toast notifications
- **Responsive Design**: Mobile-first design approach

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: ESBuild bundles Express server for production
3. **Asset Management**: Static assets served from dist/public directory
4. **Database Setup**: Drizzle migrations handle schema deployment

### Environment Configuration
- **Development**: Hot reload with Vite dev server and Express integration
- **Production**: Single Node.js process serving both API and static assets
- **Database**: PostgreSQL connection via environment variable (DATABASE_URL)

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database instance
- Environment variables for database connection
- Static file serving capability

The architecture prioritizes developer experience with hot reload, type safety, and modern tooling while maintaining production readiness with optimized builds and efficient database operations.