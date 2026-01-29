# Init Project
npx create-next-app@latest .

# Install frontend-design plugins
Claude -> /plugins -> Marketplaces -> Add https://github.com/anthropics/claude-code.git

Discover -> frontend-design -> Install

/exit and restart claude

# Design
Analyze the codebase and reference images in docs/design/references/. Create a complete design system in docs/design/ with style gide, design tokens, and component specs tailored to our tech stack. Use the frontend-design skill to assist.
---
Help me create a restaurant menu. has <Category, Item Name, Description, Price, Bage> write to ./docs/menu-items.csv

# Create Agent
Call this agent "frontend designer". This agnet is responsible for ensuring that the application follows the correct design system. It needs to reference the design system in the docs/design folder. this agent is allowed to make edits itself, so if agent is asked to review a design, it should return a detailed response back to the calling agent. If this agent is asked to review and edit a design, it is allowed to make edits itself. 

# Plan
Please help me plan a website design for a restaurant called The Oak and Barrel. This is a restaurant located in New York that specialises in steaks, sushi, burgers and craft beers. This is family-friendly restaurant that has live music every Friday evening and every Sunday afternoon.

I want the website to have 3 pages. The home page will feature the most popular menu items, and it will have a beautiful header section with a background image. The home page will also feature upcoming events like live music.

There should also be a reservation button, and when you click the reservation button, it brings up a modal where the user can enter:
- their name
- the party size
- the date and time of reservation

There should also be an About Us page. This is where you can add a story about the founder of the restaurant. You can make all of this up, as this is just a fictitous restaurant. You can just say that the founder's name is Kaka and the resaurant was stared in 2026.

Then I also want a menu page. Now this menu page should feature all the menu items in @docs/menu-items.csv

Now I really want this menu page to be unique in the sense that it should feel like a menu that you're paging through, with the details and images for each of these items.

Now, for all of the images in this website, I want you to use stock images from popular websites like Pexels. This includes all of the images on the Home page, on the Upcoming Events, the Menus, and for the About Us page as well.

---
write to ./docs/specs/0001-plan.md and implement it.

# Download image skill
I want you to create a new Claude code skill. Below you will find the documentation for creating skill. What I want to do is to create a skill that will download an image from URL, resize it, and then convert it to WebP. What we will use the skill for is to download all these stock images from websites like Pexels, and then resize them for use in our application and convert them to WebP. These final WebP files should be stored in the public folder. That way, we can cache them to improve the website's performance.

[Copy this page https://code.claude.com/docs/en/skills]

# Download images to webp
Please can you use your image-optimizer skill to download all of the stock images used in this application? Ithink a lot of them are actually being retrieved from Pexels, then resize them and convert them to WebP. They need to be stored in the public folder. Then you need to update all of the references to these images to use these local versions of the images instead.