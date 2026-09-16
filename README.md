# Carbon Persona

A full-stack carbon-emissions platform built around **Angular + ASP.NET Core microservices**, designed to calculate, track, and explain emissions across everyday activity categories.

## What it covers

Carbon Persona combines user-facing carbon calculators with authenticated profiles, recommendations, administrative workflows, and air-quality information. The system separates major domains into backend services rather than placing all application logic in one monolith.

## Architecture

```text
                    Angular Frontend
                          │
              REST / JSON + JWT Auth
                          │
      ┌───────────────────┼───────────────────┐
      ▼                   ▼                   ▼
 Auth Service      Household Service   Transport Service
      │                   │                   │
      ├──────────────┬────┴───────┬───────────┤
      ▼              ▼            ▼           ▼
 Waste Service  Recommendations  Air Quality  Profile/Admin
      │
      ▼
 SQL-backed application data
```

## Product areas

- Authentication and registration
- Household emissions calculator
- Transportation emissions calculator
- Waste emissions calculator
- Personalized recommendations
- User profile and update workflows
- Administrative dashboard
- Air-quality experience and forecast cards

## Engineering focus

### Backend

The backend is organized as multiple ASP.NET Core services with REST endpoints, domain-specific data models, authentication/authorization flows, and persistent data access.

### Frontend

The Angular application uses standalone components, responsive Bootstrap layouts, Angular Material dialogs, forms with validation, dashboards, calculator flows, profile management, and visual feedback for emissions-related data.

### Integration

A key part of the project is the integration layer between frontend forms and independently deployed backend domains: request validation, date propagation, authentication state, update flows, error handling, and API contracts all have to remain consistent across services.

## Tech stack

**Frontend:** Angular · TypeScript · Bootstrap · Angular Material · Chart.js

**Backend:** C# · ASP.NET Core · REST APIs · Microservices · JWT Authentication

**Data & tooling:** SQL · Git · API integration · Responsive Web Design

## Why this project matters

Carbon Persona demonstrates software engineering beyond an isolated algorithm: a multi-domain product with frontend state, backend services, authentication, persistence, API contracts, analytics-oriented data, and deployment-oriented separation of concerns.

## Repository note

This is a collaborative capstone repository. Contributions should be interpreted in the context of the original team project and Git history rather than as a claim that every component was authored by one contributor.
