export interface MenuItem {
  category: string;
  name: string;
  description: string;
  price: number;
  badge?: "Popular" | "Vegetarian" | "Vegan" | "Spicy" | "Chef's Choice" | "Premium";
  image: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  recurring?: boolean;
}

export interface ReservationData {
  name: string;
  partySize: string;
  dateTime: string; // ISO datetime string
}
