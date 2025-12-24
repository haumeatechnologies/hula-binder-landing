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

## Email Integration Note
**Email notifications are NOT currently set up.** The user dismissed the Resend email integration during setup. Contact form submissions are saved to the database but no email is sent to arleen@haumeatechnologies.com.

To add email notifications in the future:
1. Set up an email service (Resend, SendGrid, or similar)
2. Store API credentials as secrets
3. Update `server/routes.ts` POST `/api/contact` endpoint to send emails after saving to database

## Design
- Color scheme: Warm earth tones (forest green, clay, sand) reflecting Hawaiian nature
- Typography: Merriweather (headings) + Inter (body)
- Theme: Cultural, organic, respectful of Hawaiian traditions
