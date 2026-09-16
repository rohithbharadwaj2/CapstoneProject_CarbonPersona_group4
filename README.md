# Carbon Persona

### UST capstone · Carbon-footprint analytics and personalized sustainability workflows

Carbon Persona is a full-stack capstone project associated with my software-engineering experience at **UST**. The application turns household, transportation, and waste activity into an interactive carbon-footprint experience with recommendations, profile workflows, administrative views, and air-quality information.

This repository now exposes the actual Angular application source on the default `main` branch. The source had previously been left on the historical `master` branch while `main` showed only documentation.

## Product Surface

The Angular application includes routes/components for:

- authenticated Home and About experiences,
- carbon-footprint Calculator,
- Recommendations,
- Profile and Update Profile,
- role-restricted Admin Dashboard,
- Air Quality,
- Login and navigation workflows.

The router uses an authentication guard, with the dashboard carrying an `Admin` role requirement. An HTTP interceptor is configured at the application level for authenticated API communication.

## Frontend Architecture

```text
Angular 18 application
       │
       ├── Authentication + route guard
       ├── HTTP interceptor
       │
       ├── Carbon Calculator
       │     ├── Household
       │     ├── Transportation
       │     └── Waste
       │
       ├── Recommendations
       ├── Profile / Update
       ├── Air Quality
       └── Admin Dashboard
              │
              ▼
        REST service layer
```

## Frontend Stack

`Angular 18` · `TypeScript` · `Angular Material` · `Bootstrap 5` · `Chart.js` · `ng2-charts` · `RxJS` · `jsPDF`

The project configuration also includes AngularFire/Firebase packages and PDF-generation tooling.

## Full Capstone Architecture

The capstone was built around an Angular frontend integrated with C#/.NET REST services for authentication and carbon-emissions domains, including household, transportation, waste, recommendations, and air-quality workflows. The broader project used authenticated API communication and persisted application data.

This public repository currently exposes the Angular client. The README distinguishes that public source from the broader capstone architecture rather than implying every service is present in this repository.

## Engineering Focus

The project demonstrates the software-engineering side of my profile: multi-page application architecture, guarded routes, role-aware UI, HTTP/API integration, forms and validation, dashboard-style interfaces, domain separation, and integration of external air-quality data.

## Run the Frontend

```bash
npm install
npm start
```

Angular serves the development application at `http://localhost:4200/` by default. API-dependent workflows require the corresponding backend services/configuration.

## Repository History

This was a collaborative capstone. The repository preserves the original project history and should not be interpreted as evidence that every component was authored by a single contributor.

## Portfolio

For the recruiter-oriented project story and architecture visualization, see my portfolio: `rohithbharadwaj2.github.io/Rohith-portfolio/`.
