# IdeaVerse - Boutique Development Studio

This is the official website for IdeaVerse, a boutique development studio specializing in end-to-end solutions: backend, frontend, AI, and cloud infrastructure. We turn your boldest ideas into digital reality.

## Features

- **Modern Design:** Clean, responsive, and visually appealing interface.
- **Animations:** Subtle animations using Framer Motion for an enhanced user experience.
- **Services Page:** Detailed overview of the technical solutions offered.
- **Portfolio Page:** Showcasing featured case studies and projects.
- **Contact Page:** Form and contact methods for inquiries.
- **Responsive Layout:** Optimized for various screen sizes, from mobile to desktop.
- **Shadcn/ui:** Built with Shadcn/ui components for a consistent and accessible design system.
- **Next.js App Router:** Utilizes the latest Next.js features for efficient routing and server components.

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

-   `app/`: Contains the main application pages (`page.tsx`, `layout.tsx`, `services/page.tsx`, `portfolio/page.tsx`, `contact/page.tsx`, `about/page.tsx`).
-   `components/`: Reusable UI components, including Shadcn/ui components.
-   `public/`: Static assets like images.
-   `lib/`: Utility functions (e.g., `cn` for Tailwind CSS class merging).
-   `hooks/`: Custom React hooks.
-   `styles/`: Global CSS.

## Customization

-   **Content:** Modify the text and images in `app/page.tsx`, `app/services/page.tsx`, `app/portfolio/page.tsx`, `app/contact/page.tsx`, and `app/about/page.tsx` to reflect your company's information.
-   **Styling:** Adjust `tailwind.config.ts` and `app/globals.css` for global styles and theme customization.
-   **Components:** Extend or modify components in `components/ui/` as needed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

This project can be easily deployed to Vercel.

\`\`\`bash
npm run build
\`\`\`

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
