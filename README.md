# IdeaVerse Development Studio Website

This is the official website for IdeaVerse, a development studio focused on delivering high-quality, impactful digital solutions.

## Project Overview

The website showcases IdeaVerse's services, client portfolio, and contact information. It emphasizes a commitment to quality over quantity, highlighting successful collaborations with clients like Breethr and ActiveBuildings.

## Technologies Used

- Next.js (App Router)
- React
- Tailwind CSS
- shadcn/ui
- Framer Motion (for animations)

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    \`\`\`bash
    git clone <repository-url>
    cd ideaverse-website
    \`\`\`
2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    \`\`\`
3.  **Run the development server:**
    \`\`\`bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    \`\`\`
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

-   `app/`: Contains Next.js App Router pages and layouts.
    -   `layout.tsx`: Root layout for the application.
    -   `page.tsx`: Home page.
    -   `about/page.tsx`: About Us page.
    -   `portfolio/page.tsx`: Portfolio page.
    -   `services/page.tsx`: Services page.
    -   `contact/page.tsx`: Contact Us page.
-   `components/`: Reusable React components, including shadcn/ui components.
    -   `ui/`: shadcn/ui components.
-   `public/`: Static assets like images.
-   `hooks/`: Custom React hooks.
-   `lib/`: Utility functions.
-   `styles/`: Global CSS.

## Customization

-   **Content:** All text content can be modified directly within the respective page components (`app/*.tsx`).
-   **Styling:** Tailwind CSS classes are used for styling. You can customize `tailwind.config.ts` for theme adjustments or modify classes directly in components.
-   **Animations:** Framer Motion is used for animations. Adjust `motion.div` props for different effects.

## Deployment

This project is designed to be easily deployed to Vercel.

1.  **Install Vercel CLI:**
    \`\`\`bash
    npm i -g vercel
    \`\`\`
2.  **Deploy:**
    \`\`\`bash
    vercel
    \`\`\`
    Follow the prompts to deploy your project.

## Contributing

Feel free to fork this repository and make your own modifications.
