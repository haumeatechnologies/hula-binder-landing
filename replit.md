# The Hula Binder Landing Page

## Overview
A beautiful landing page for The Hula Binder platform - a digital tool designed to support hālau (hula schools) with managing students, attendance, curriculum, and preserving cultural heritage.

## Current State
- **Frontend**: Complete landing page with hero image, features, benefits, pricing, and contact forms
- **Backend**: Full-stack application with PostgreSQL database and API endpoints
- **Database**: Stores demo requests and plan signup requests

## Features
- Hero image background with hula dancer silhouettes at sunset
- Transparent navigation that overlays the hero
- Feature showcase with circular icons
- Benefits section highlighting time savings, retention, and legacy preservation
- Pricing tiers (Starter, Professional, Enterprise) with signup forms
- Working contact form (Schedule a Demo) that saves to database
- Working plan signup form that saves to database
- Privacy Policy page

## Architecture
- Frontend: React + Vite + TailwindCSS + Shadcn UI
- Backend: Express.js + PostgreSQL + Drizzle ORM
- Hero image: User-provided sunset silhouette image

## Database Schema
- `users`: User authentication (not currently used)
- `contact_requests`: Stores demo request submissions with name, hālau name, email, phone, and message
- `plan_requests`: Stores plan signup requests with name, hālau name, email, phone, plan, and message

## Email Notifications (TO BE CONFIGURED)
Email notifications are not yet active. To enable:
1. Set up Resend integration in Replit
2. Configure emails to be sent to: arleen@haumeatechnologies.com
3. Demo requests subject: "The Hula Binder: Demo Request"
4. Plan requests subject: "The Hula Binder Plan Request"

## Design
- Color scheme: Warm earth tones (forest green, clay, sand) reflecting Hawaiian nature
- Typography: Merriweather (headings) + Inter (body)
- Theme: Cultural, organic, respectful of Hawaiian traditions
- Footer credit: Site Design by Haumea Technologies (links to https://haumeatechnologies.com/)
