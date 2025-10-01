# Portfolio Website for Ansu Kumar R

## Overview

This is a modern, single-page portfolio website for Ansu Kumar R, showcasing his skills as an AI enthusiast, web developer, and problem solver. The website features a clean, professional design with sections for hero introduction, about, skills, projects, education, certifications, and contact information. Built with responsive design principles and accessibility in mind, it serves as a comprehensive digital presence for potential employers and collaborators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Single-Page Application (SPA)**: All content is contained within a single HTML file with smooth scrolling navigation between sections
- **Bootstrap 5 Framework**: Leverages Bootstrap's utility classes and components for rapid development and consistent styling
- **Mobile-First Responsive Design**: Uses Bootstrap's grid system and responsive utilities to ensure optimal viewing across all device sizes
- **Progressive Enhancement**: Core functionality works without JavaScript, with enhanced features added via vanilla JavaScript

### Design System
- **Glass Morphism Styling**: Custom CSS variables define a cohesive color scheme with glass-like effects using rgba backgrounds and backdrop filters
- **CSS Custom Properties**: Centralized theming system using CSS variables for colors, spacing, and visual effects
- **Gradient Accents**: Linear gradients applied to headings and key elements for visual appeal
- **Dark Theme**: Primary dark color scheme with high contrast for accessibility

### Interactive Features
- **Smooth Scrolling Navigation**: JavaScript-powered smooth scrolling between sections with proper offset calculations
- **Back-to-Top Button**: Dynamic visibility based on scroll position with smooth return to top functionality
- **Navbar Scroll Effects**: Dynamic styling changes to navigation bar based on scroll position
- **Form Validation**: Client-side validation for contact form with HTML5 validation attributes
- **Typing Animation**: Dynamic text effects for enhanced user engagement
- **Scroll Animations**: Progressive element animations triggered by scroll position

### Accessibility & SEO
- **WCAG AA Compliance**: Semantic HTML5 structure with proper heading hierarchy and ARIA attributes
- **SEO Optimization**: Comprehensive meta tags including Open Graph and Twitter Card properties
- **Structured Data**: JSON-LD schema markup for Person entity with professional details
- **Performance Optimization**: Minimal external dependencies and optimized asset loading

## External Dependencies

### Core Frameworks
- **Bootstrap 5.3.2**: Primary CSS framework for layout, components, and responsive design via CDN
- **Bootstrap Icons 1.11.1**: Icon font library for consistent iconography across the site

### Asset Dependencies
- **Resume PDF**: Downloadable resume file (resume.pdf) linked from hero section
- **Profile Photo**: Professional headshot image (assets/profile-photo.jpg) used in hero and about sections

### Third-Party Services
- **CDN Delivery**: Bootstrap CSS and JavaScript files served via jsdelivr CDN for improved performance and reliability
- **Email Integration**: Contact form configured with mailto fallback for direct email communication
- **Social Media Integration**: Direct links to LinkedIn and GitHub profiles for professional networking

### Browser APIs
- **Smooth Scroll API**: Native browser smooth scrolling with JavaScript fallback
- **Intersection Observer API**: For scroll-based animations and element visibility detection
- **Local Storage API**: Potential use for user preferences and form data persistence