# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Install Styled CSS

npm i styled-components

# Install React Router

npm i react-router-dom@6

# Install React Icons

npm i react-icons

# Install Supabase followed this step:

1. Install "npm install @supabase/supabase-js"

2. Paste this code from Supabase to initialize
   import { createClient } from '@supabase/supabase-js'  
   const supabaseUrl = 'your url'
   const supabaseKey = process.env.SUPABASE_KEY
   const supabase = createClient(supabaseUrl, supabaseKey)

3. And finally we have to add our table key

# Install ReactQuery version 4

1. Install "npm i @tanstack/react-query@4"

2. Install "npm i @tanstack/react-query-devtools@4"

3. And finally we have to add our table key

# Install Displaying Toasts(Notifications)

Install "npm i react-hot-toast"
