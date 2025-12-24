# The Hula Binder Landing Page

## Overview
A beautiful landing page for The Hula Binder platform - a digital tool designed to support hālau (hula schools) with managing students, attendance, curriculum, and preserving cultural heritage.

## Current State
- **Frontend**: Complete landing page with video hero section, features, benefits, pricing, and contact form
- **Backend**: Full-stack application with PostgreSQL database and API endpoints
- **Database**: Stores contact/demo requests submitted through the form

## Features
- Video background hero section featuring kahiko hula dancers
- Responsive navigation with smooth scrolling
- Feature showcase with cards
- Benefits section highlighting time savings, retention, and legacy preservation
- Pricing tiers (Starter, Professional, Enterprise)
- Working contact form that saves demo requests to database

## Architecture
- Frontend: React + Vite + TailwindCSS + Shadcn UI
- Backend: Express.js + PostgreSQL + Drizzle ORM
- Video: Generated using AI video tool

## Database Schema
- `users`: User authentication (not currently used)
- `contact_requests`: Stores demo request submissions with name, hālau name, email, phone, and message

## Deployment Plan
**This site is configured for Netlify deployment with Netlify Forms.**

The contact form uses Netlify Forms for submission handling:
- Form submissions are automatically captured by Netlify
- Email notifications can be configured in Netlify dashboard (Site settings > Forms > Form notifications)
- Set notification email to: arleen@haumeatechnologies.com
- Subject line suggestion: "The Hula Binder: Demo Request"

### To deploy on Netlify:
1. Build the static frontend: `npm run build`
2. Deploy the `dist/public` folder to Netlify
3. Configure form notifications in Netlify dashboard

## Design
- Color scheme: Warm earth tones (forest green, clay, sand) reflecting Hawaiian nature
- Typography: Merriweather (headings) + Inter (body)
- Theme: Cultural, organic, respectful of Hawaiian traditions
