# SlashData

## Overview
This repository contains:
- `slashdata-public-site`: Vite + React frontend
- `SlashData.Public.Api`: ASP.NET Core API that can also serve the built frontend for a single deploy

## Local Development

Frontend (Vite dev server):
```powershell
cd slashdata-public-site
npm install
npm run dev
```

API (development):
```powershell
cd ..\SlashData.Public.Api
dotnet run
```

The Vite dev server proxies `/api` to the API (see `slashdata-public-site/vite.config.ts`).

## Single-Deploy (API serves the frontend)

1. Build the frontend
```powershell
cd slashdata-public-site
npm run build
```

2. Run the API (serves `wwwroot`)
```powershell
cd ..\SlashData.Public.Api
dotnet run
```

Browse: `http://localhost:5265/`

## Publish

```powershell
cd slashdata-public-site
npm run build
cd ..\SlashData.Public.Api
dotnet publish -c Release -o .\publish
```

Deploy the contents of `SlashData.Public.Api/publish`.

## Configuration
- reCAPTCHA settings: `SlashData.Public.Api/appsettings.json` (`Recaptcha` section)
- Email settings: `SlashData.Public.Api/appsettings.json` (`Settings:Email` section)
