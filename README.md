# Macrocosmos Dashboard: Frontend Tech Test

## What's in this repo

This is a simple web application bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It contains:

- a dummy API at [`src/miner-api/getMiners.ts`](src/miner-api/getMiners.ts) which returns a JSON object containing **fictional data about miners on the Bittensor network**.
- a route for client-side fetching at [`src/app/api/route.ts`](src/app/api/route.ts).
- a `Miner` type at [`src/types/miner.types.ts`](src/types/miner.types.ts), which can be used both server and client-side.
- a route for data fetching at [`src/pages/api/miners/route.ts`](src/pages/api/miners/route.ts).
- a Layout component that wraps the entire application at [`src/app/layout.tsx`](src/app/layout.tsx).
- a Page component that contains the main content of the application at [`src/app/page.tsx`](src/app/page.tsx).

## What we want you to do

📊 We would like you to build a straightforward UI in the Page component that **fetches and displays this data in your choice of format**.

## User requirements

This is an internal tool for the Macrocosmos team to monitor miner behaviour on our Subnets on the Bittensor network.

- The user should be able to see a list of miners.
- The user should be able to see the miner's name, IP address, and the number of blocks mined.

- Additionally: The user should be able to interact with the data in any other way that you think might be useful!

- e.g. some ideas for additional features could include:
  - sorting / filtering searching by a field on the miner data
  - Miner's IP address as a clickable link, opening a modal with more info about the miner
  - a chart showing miner activity over the last month

## What we're looking for

- **Problem-solving**: We're looking for someone who can solve problems and think on their feet. Use of AI to get more done quickly is a plus - but please ensure you fully understand the code you're writing!
- **Clean code**: We're looking for code that is easy to read and understand. Well-named variables and functions are a must.
- **Good UI Design instincts**: We're looking for a UI that is easy to use and looks at least pretty good. Obviously time is limited, but any thought into typography (N.B. that the font is added through Next Fonts in `src/app/layout.tsx`), responsiveness, colours, animation or any other data-viz frontend wizardry will be received with delight!
- **Attention to detail**: We're looking for a product that is free of bugs and issues. If you run out of time, please make a note in comments of what you would have done next.
- **Time management**: We're looking for someone who can manage their time effectively and work to a plan.
- **Communication**: We're looking for someone who can explain their thought process and decisions (at the end when we regroup).

## Data fetching

🛜 We have no preference for how you get the data from the server. It could be:

- Fetched client-side (by adding to the route in `/src/app/api` - see [API route](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) and fetching from client-side code).
- Fetched server-side (using a Server Component - see [Server & Client Components](https://nextjs.org/learn/react-foundations/server-and-client-components)).

Either of these approaches will work. Please note though that as we are trying to follow the latest NextJS routing pattern, you should avoid creating the `/pages` folder and adding a new page with `getServerSideProps`.

## Libraries

**You can use any libraries you like**. Tailwind is installed as per the default boilerplate, but feel free to use whatever tech you like for styling, including plain CSS.

The important thing is that the code, and the UI, are clean and intuitive to navigate.

⏰ Please just bear in mind the time constraints and plan your time accordingly!

## Use of Copilot / other AI tools

We're happy for you to use AI tools like GitHub Copilot to help you write code, but please make sure you understand the code you're writing and can explain it to us.

## What happens after you finish

We'll have a chat to review your code and talk about your solution. We'll ask you about your thought process and decisions, and we'll give you a chance to ask us any questions you have.

## Getting Started

- Clone this repo
- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.
