# Logistic Frontend

Step 1 bootstrap for a B2B logistics React + TypeScript application.

## Tech stack
- Vite + React + TypeScript
- React Router (role-based route guards)
- Zustand (auth session state)
- Axios (centralized API client)

## Structure
```text
src/
  app/
    layout/
    providers/
    routes/
  features/
    admin/
    auth/
    shipments/
    pod/
    ledger/
  infrastructure/
    api/
    storage/
  shared/
    components/
    constants/
    hooks/
    types/
    utils/
```

## Run
```bash
npm install
npm run dev
```
