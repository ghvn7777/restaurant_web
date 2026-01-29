import { MenuItem, Event } from "./types";

// Local WebP image mappings for each menu item
const imageMap: Record<string, string> = {
  // Appetizers
  Bruschetta: "/images/bruschetta.webp",
  "Crispy Calamari": "/images/crispy-calamari.webp",
  "Stuffed Mushrooms": "/images/stuffed-mushrooms.webp",
  "Soup of the Day": "/images/soup-of-the-day.webp",
  "Caprese Salad": "/images/caprese-salad.webp",

  // Salads
  "Caesar Salad": "/images/caesar-salad.webp",
  "Greek Salad": "/images/greek-salad.webp",
  "Garden Salad": "/images/garden-salad.webp",
  "Grilled Chicken Salad": "/images/grilled-chicken-salad.webp",

  // Main Courses
  "Grilled Salmon": "/images/grilled-salmon.webp",
  "Filet Mignon": "/images/filet-mignon.webp",
  "Chicken Parmesan": "/images/chicken-parmesan.webp",
  "Mushroom Risotto": "/images/mushroom-risotto.webp",
  "Grilled Ribeye": "/images/grilled-ribeye.webp",
  "Seafood Linguine": "/images/seafood-linguine.webp",
  "Lamb Chops": "/images/lamb-chops.webp",
  "Vegetable Stir Fry": "/images/vegetable-stir-fry.webp",

  // Pasta
  "Spaghetti Bolognese": "/images/spaghetti-bolognese.webp",
  "Fettuccine Alfredo": "/images/fettuccine-alfredo.webp",
  "Penne Arrabbiata": "/images/penne-arrabbiata.webp",
  "Lobster Ravioli": "/images/lobster-ravioli.webp",

  // Pizza
  Margherita: "/images/margherita.webp",
  Pepperoni: "/images/pepperoni.webp",
  "Four Cheese": "/images/four-cheese.webp",
  "Prosciutto e Rucola": "/images/prosciutto-e-rucola.webp",

  // Desserts
  Tiramisu: "/images/tiramisu.webp",
  "Chocolate Lava Cake": "/images/chocolate-lava-cake.webp",
  "Panna Cotta": "/images/panna-cotta.webp",
  "New York Cheesecake": "/images/ny-cheesecake.webp",
  "Gelato Selection": "/images/gelato-selection.webp",

  // Beverages
  "Fresh Lemonade": "/images/fresh-lemonade.webp",
  "Iced Tea": "/images/iced-tea.webp",
  Espresso: "/images/espresso.webp",
  Cappuccino: "/images/cappuccino.webp",
  "Soft Drinks": "/images/soft-drinks.webp",

  // Wine
  "House Red": "/images/house-red.webp",
  "House White": "/images/house-white.webp",
  "Chianti Classico": "/images/chianti-classico.webp",
  Prosecco: "/images/prosecco.webp",
};

// All menu items parsed from CSV with images
export const menuItems: MenuItem[] = [
  // Appetizers
  {
    category: "Appetizers",
    name: "Bruschetta",
    description:
      "Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil",
    price: 8.5,
    image: imageMap["Bruschetta"],
  },
  {
    category: "Appetizers",
    name: "Crispy Calamari",
    description: "Lightly battered squid rings served with marinara sauce",
    price: 12.0,
    badge: "Popular",
    image: imageMap["Crispy Calamari"],
  },
  {
    category: "Appetizers",
    name: "Stuffed Mushrooms",
    description:
      "Button mushrooms filled with herb cream cheese and breadcrumbs",
    price: 10.5,
    image: imageMap["Stuffed Mushrooms"],
  },
  {
    category: "Appetizers",
    name: "Soup of the Day",
    description: "Chef's daily creation served with artisan bread",
    price: 7.0,
    image: imageMap["Soup of the Day"],
  },
  {
    category: "Appetizers",
    name: "Caprese Salad",
    description:
      "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
    price: 11.0,
    badge: "Vegetarian",
    image: imageMap["Caprese Salad"],
  },

  // Salads
  {
    category: "Salads",
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce, parmesan, croutons, and house-made Caesar dressing",
    price: 9.5,
    image: imageMap["Caesar Salad"],
  },
  {
    category: "Salads",
    name: "Greek Salad",
    description:
      "Cucumbers, tomatoes, olives, red onion, feta cheese with oregano vinaigrette",
    price: 10.0,
    badge: "Vegetarian",
    image: imageMap["Greek Salad"],
  },
  {
    category: "Salads",
    name: "Garden Salad",
    description: "Mixed greens, seasonal vegetables with choice of dressing",
    price: 8.0,
    badge: "Vegetarian",
    image: imageMap["Garden Salad"],
  },
  {
    category: "Salads",
    name: "Grilled Chicken Salad",
    description:
      "Mixed greens, grilled chicken breast, avocado, and honey mustard dressing",
    price: 14.5,
    image: imageMap["Grilled Chicken Salad"],
  },

  // Main Courses
  {
    category: "Main Courses",
    name: "Grilled Salmon",
    description:
      "Atlantic salmon with lemon butter sauce served with seasonal vegetables",
    price: 24.0,
    badge: "Chef's Choice",
    image: imageMap["Grilled Salmon"],
  },
  {
    category: "Main Courses",
    name: "Filet Mignon",
    description:
      "8oz prime beef tenderloin with red wine reduction and truffle mashed potatoes",
    price: 38.0,
    badge: "Premium",
    image: imageMap["Filet Mignon"],
  },
  {
    category: "Main Courses",
    name: "Chicken Parmesan",
    description:
      "Breaded chicken breast with marinara and melted mozzarella over linguine",
    price: 19.5,
    badge: "Popular",
    image: imageMap["Chicken Parmesan"],
  },
  {
    category: "Main Courses",
    name: "Mushroom Risotto",
    description:
      "Creamy arborio rice with wild mushrooms, parmesan, and truffle oil",
    price: 18.0,
    badge: "Vegetarian",
    image: imageMap["Mushroom Risotto"],
  },
  {
    category: "Main Courses",
    name: "Grilled Ribeye",
    description:
      "12oz USDA prime ribeye with herb butter and roasted potatoes",
    price: 42.0,
    badge: "Premium",
    image: imageMap["Grilled Ribeye"],
  },
  {
    category: "Main Courses",
    name: "Seafood Linguine",
    description:
      "Shrimp, mussels, and clams in white wine garlic sauce over fresh pasta",
    price: 26.0,
    image: imageMap["Seafood Linguine"],
  },
  {
    category: "Main Courses",
    name: "Lamb Chops",
    description:
      "New Zealand lamb chops with rosemary mint sauce and grilled asparagus",
    price: 34.0,
    image: imageMap["Lamb Chops"],
  },
  {
    category: "Main Courses",
    name: "Vegetable Stir Fry",
    description:
      "Seasonal vegetables in ginger soy glaze served with jasmine rice",
    price: 16.0,
    badge: "Vegan",
    image: imageMap["Vegetable Stir Fry"],
  },

  // Pasta
  {
    category: "Pasta",
    name: "Spaghetti Bolognese",
    description:
      "Classic meat sauce slow-cooked with tomatoes, herbs, and red wine",
    price: 17.0,
    image: imageMap["Spaghetti Bolognese"],
  },
  {
    category: "Pasta",
    name: "Fettuccine Alfredo",
    description: "Fresh fettuccine in creamy parmesan sauce",
    price: 15.0,
    badge: "Vegetarian",
    image: imageMap["Fettuccine Alfredo"],
  },
  {
    category: "Pasta",
    name: "Penne Arrabbiata",
    description:
      "Penne pasta in spicy tomato sauce with garlic and chili flakes",
    price: 14.5,
    badge: "Spicy",
    image: imageMap["Penne Arrabbiata"],
  },
  {
    category: "Pasta",
    name: "Lobster Ravioli",
    description: "Handmade ravioli filled with lobster in saffron cream sauce",
    price: 28.0,
    badge: "Premium",
    image: imageMap["Lobster Ravioli"],
  },

  // Pizza
  {
    category: "Pizza",
    name: "Margherita",
    description:
      "San Marzano tomatoes, fresh mozzarella, basil, and olive oil",
    price: 16.0,
    badge: "Vegetarian",
    image: imageMap["Margherita"],
  },
  {
    category: "Pizza",
    name: "Pepperoni",
    description: "Tomato sauce, mozzarella, and premium pepperoni",
    price: 18.0,
    badge: "Popular",
    image: imageMap["Pepperoni"],
  },
  {
    category: "Pizza",
    name: "Four Cheese",
    description: "Mozzarella, gorgonzola, fontina, and parmesan",
    price: 19.0,
    badge: "Vegetarian",
    image: imageMap["Four Cheese"],
  },
  {
    category: "Pizza",
    name: "Prosciutto e Rucola",
    description:
      "Tomato sauce, mozzarella, prosciutto, arugula, and shaved parmesan",
    price: 21.0,
    image: imageMap["Prosciutto e Rucola"],
  },

  // Desserts
  {
    category: "Desserts",
    name: "Tiramisu",
    description:
      "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
    price: 9.0,
    badge: "Popular",
    image: imageMap["Tiramisu"],
  },
  {
    category: "Desserts",
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with molten center served with vanilla ice cream",
    price: 10.0,
    image: imageMap["Chocolate Lava Cake"],
  },
  {
    category: "Desserts",
    name: "Panna Cotta",
    description: "Italian cream dessert with berry compote",
    price: 8.5,
    image: imageMap["Panna Cotta"],
  },
  {
    category: "Desserts",
    name: "New York Cheesecake",
    description:
      "Creamy cheesecake with graham cracker crust and strawberry topping",
    price: 9.5,
    image: imageMap["New York Cheesecake"],
  },
  {
    category: "Desserts",
    name: "Gelato Selection",
    description: "Three scoops of authentic Italian gelato",
    price: 7.5,
    image: imageMap["Gelato Selection"],
  },

  // Beverages
  {
    category: "Beverages",
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh mint",
    price: 4.5,
    image: imageMap["Fresh Lemonade"],
  },
  {
    category: "Beverages",
    name: "Iced Tea",
    description: "Freshly brewed with lemon",
    price: 3.5,
    image: imageMap["Iced Tea"],
  },
  {
    category: "Beverages",
    name: "Espresso",
    description: "Double shot Italian espresso",
    price: 3.0,
    image: imageMap["Espresso"],
  },
  {
    category: "Beverages",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 4.5,
    image: imageMap["Cappuccino"],
  },
  {
    category: "Beverages",
    name: "Soft Drinks",
    description: "Coca-Cola, Sprite, Fanta, or Ginger Ale",
    price: 3.0,
    image: imageMap["Soft Drinks"],
  },

  // Wine
  {
    category: "Wine",
    name: "House Red",
    description: "Glass of Cabernet Sauvignon",
    price: 9.0,
    image: imageMap["House Red"],
  },
  {
    category: "Wine",
    name: "House White",
    description: "Glass of Pinot Grigio",
    price: 9.0,
    image: imageMap["House White"],
  },
  {
    category: "Wine",
    name: "Chianti Classico",
    description: "Full bottle Italian red wine",
    price: 45.0,
    image: imageMap["Chianti Classico"],
  },
  {
    category: "Wine",
    name: "Prosecco",
    description: "Full bottle Italian sparkling wine",
    price: 38.0,
    image: imageMap["Prosecco"],
  },
];

// Group menu items by category
export const menuCategories: Record<string, MenuItem[]> = menuItems.reduce(
  (acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  },
  {} as Record<string, MenuItem[]>
);

// Get popular items (those with "Popular" badge)
export const popularItems: MenuItem[] = menuItems.filter(
  (item) => item.badge === "Popular"
);

// Category order for menu navigation
export const CATEGORIES = [
  "Appetizers",
  "Salads",
  "Main Courses",
  "Pasta",
  "Pizza",
  "Desserts",
  "Beverages",
  "Wine",
] as const;

// Category descriptions for the menu book
export const categoryDescriptions: Record<string, string> = {
  Appetizers:
    "Start your culinary journey with our carefully crafted starters, designed to awaken your palate.",
  Salads:
    "Fresh, vibrant, and bursting with flavor. Our salads feature the finest seasonal ingredients.",
  "Main Courses":
    "The heart of our menu. From perfectly aged steaks to fresh seafood, each dish is a masterpiece.",
  Pasta:
    "Handcrafted pasta dishes that transport you to the streets of Italy with every bite.",
  Pizza:
    "Neapolitan-style pizzas baked to perfection in our wood-fired oven.",
  Desserts:
    "Sweet endings to complete your dining experience. Each dessert is a work of art.",
  Beverages:
    "Refreshing drinks to complement your meal, from house-made lemonades to artisan coffees.",
  Wine: "A curated selection of wines from renowned vineyards to enhance your dining experience.",
};

// Upcoming Events
export const upcomingEvents: Event[] = [
  {
    id: "friday-jazz",
    title: "Friday Jazz Night",
    description:
      "Live jazz performances featuring local New York artists. Enjoy smooth melodies with your meal.",
    date: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    image: "/images/friday-jazz.webp",
    recurring: true,
  },
  {
    id: "sunday-acoustic",
    title: "Sunday Acoustic Sessions",
    description:
      "Relaxed acoustic performances perfect for Sunday brunch and family gatherings.",
    date: "Every Sunday",
    time: "2:00 PM - 5:00 PM",
    image: "/images/sunday-acoustic.webp",
    recurring: true,
  },
];

// Hero image
export const heroImage = "/images/hero.webp";

// About page images
export const aboutImages = {
  founder: "/images/about-founder.webp",
  interior1: "/images/about-interior1.webp",
  interior2: "/images/about-interior2.webp",
  kitchen: "/images/about-kitchen.webp",
};
