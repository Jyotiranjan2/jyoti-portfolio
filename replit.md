# Cybersecurity Portfolio Application

## Overview

This is a modern cybersecurity portfolio web application built for Jyoti Ranjan Barik, showcasing professional experience, skills, projects, and achievements in cybersecurity. The application features a dark-themed, terminal-inspired design with sections for about, skills, projects, certifications, education, achievements, experience, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React SPA with TypeScript**: Built as a single-page application using React 18 with TypeScript for type safety and better development experience. Uses functional components with hooks throughout.

**Component Structure**: Follows a modular component architecture with reusable UI components in `/components/ui` (shadcn/ui library) and feature-specific components in `/components`. Each section of the portfolio is implemented as a separate component for maintainability.

**Styling Framework**: Uses Tailwind CSS with a custom dark theme configuration. The design system includes CSS custom properties for consistent theming, terminal-inspired color schemes (navy, terminal green, gradient blue/purple), and responsive design patterns.

**State Management**: Utilizes React Query (@tanstack/react-query) for server state management and API interactions. Form state is managed using React Hook Form with Zod validation schemas.

**Routing**: Implements client-side routing using Wouter, a lightweight routing library. Currently supports home page and 404 error handling.

### Backend Architecture

**Express.js Server**: RESTful API server built with Express.js and TypeScript. Includes middleware for request logging, JSON parsing, and error handling with detailed API request/response logging.

**API Endpoints**: 
- `/api/contact` - POST endpoint for contact form submissions
- `/api/portfolio` - GET endpoint for portfolio data (currently returns static data)

**Development Setup**: Integrates Vite development server with Express in development mode, enabling hot module replacement and development features specific to Replit environment.

### Data Storage Solutions

**In-Memory Storage**: Currently implements an in-memory storage solution using a Map-based approach for contact messages. The `MemStorage` class provides a simple interface for creating and retrieving contact messages with UUID generation and timestamp management.

**Database Schema Ready**: Database schema is defined using Drizzle ORM with PostgreSQL dialect. The schema includes a `contact_messages` table with fields for id, name, email, subject, message, and timestamp. Migration configuration is set up for future database integration.

**Storage Interface**: Implements an `IStorage` interface that abstracts the storage layer, making it easy to swap between in-memory storage and database implementations without changing the application logic.

### Authentication and Authorization

**No Authentication Currently**: The application currently operates without authentication mechanisms, as it's a portfolio showcase site. Contact form submissions are anonymous and don't require user accounts.

## External Dependencies

### UI and Styling Dependencies
- **Radix UI**: Comprehensive primitive components (@radix-ui/*) for accessibility-compliant UI elements
- **shadcn/ui**: Pre-built component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs

### Data Management
- **React Query**: Server state management and caching (@tanstack/react-query)
- **React Hook Form**: Form handling with performance optimization
- **Zod**: TypeScript-first schema validation library
- **Drizzle ORM**: TypeScript ORM with PostgreSQL support

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **esbuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Type checking and compilation
- **Wouter**: Lightweight client-side routing

### Database Integration
- **Neon Database**: Serverless PostgreSQL database service (@neondatabase/serverless)
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **Drizzle Kit**: Database migrations and schema management

### Production Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **clsx & twMerge**: Conditional CSS class handling

### Replit-Specific Integrations
- **Replit Vite Plugins**: Development error overlay and code mapping for Replit environment
- **Replit Development Banner**: Automatic banner injection for development mode outside Replit