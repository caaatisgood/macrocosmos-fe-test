# Macrocosmos Dashboard: Frontend Tech Test

## What's in this repo

This is a simple web application bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It contains:
    - a dummy API at `src/server/backend.ts` which returns a JSON object containing **fictional data about miners on the Bittensor network**.
    - a `Miner` type at `src/types/miner.types.ts`, which can be used both server and client-side.
    - a route for client-side fetching at `src/pages/api/miners/route.ts`.
    - a Layout component that wraps the entire application at `src/app/layout.tsx`.
    - a Page component that contains the main content of the application at `src/app/page.tsx`.

## What we want you to do

📊 We would like you to build a straightforward UI in the Page component that **fetches and displays this data in your choice of format**.

## User requirements

This is an internal tool for the Macrocosmos team to monitor miner behaviour on our Subnets on the Bittensor network.

- The user should be able to see a list of miners.
- The user should be able to see the miner's name, IP address, and the number of blocks mined.
- The user should be able to see the miner's IP address as a clickable link.
- The user should be able to click on the miner's IP address to see a modal with more information about the miner.

## What we're looking for

- **Problem-solving**: We're looking for someone who can solve problems and think on their feet.
- **Clean code**: We're looking for code that is easy to read and understand. Well-named variables and functions are a must.
- **Good UI Design instincts**: We're looking for a UI that is easy to use and looks good. Obviously time is limited, but a bit of thought into typography, responsiveness, colours, animation and any other data-viz creativity are all a plus!
- **Attention to detail**: We're looking for a product that is free of bugs and issues. If you run out of time, please make a note in comments of what you would have done next.
- **Time management**: We're looking for someone who can manage their time effectively and work to a plan.
- **Communication**: We're looking for someone who can explain their thought process and decisions.

## Data fetching

🛜 We have no preference for whether you fetch the data client-side (by creating an API route and calling fetch from client-side code) or server-side (using Server Components) - either approach will work.

## Libraries

**You can use any libraries you like**. Tailwind is installed as per the default boilerplate, but feel free to use whatever tech you like for styling, including plain CSS.

The important thing is that the code, and the UI, are clean and intuitive to navigate.

⏰ Please just bear in mind the time constraints and plan your time accordingly!

## What happens after you finish

We'll have a chat to review your code and talk about your solution. We'll ask you about your thought process and decisions, and we'll give you a chance to ask us any questions you have.

## Getting Started

- Clone this repo
- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
