# Next.js 15 Navigation Issue in Production

This repository demonstrates a navigation issue in a Next.js 15 application. The application consists of two pages: a home page and an about page.  Navigation from the home page to the about page works correctly. However, navigation from the about page back to the home page results in a blank page in production, while working as expected in development. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run build` to build the application.
4. Run `npm run start` to start the application.
5. Navigate to the about page.
6. Click the button to go back to the home page.  The home page will be blank. 

## Solution

The solution involves ensuring proper routing and page rendering. The issue was caused by missing optimized production builds.  The solution demonstrates correct implementation.