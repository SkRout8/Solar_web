// src/data/projectData.js
import {
  Building2, Home, Landmark, Globe, Store, LayoutGrid
} from "lucide-react";

export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Govt Affiliates",
  "Exhibitions",
  "Stalls",
];

export const iconMap = {
  Residential: <Home className="text-blue-500 w-6 h-6" />,
  Commercial: <Building2 className="text-blue-500 w-6 h-6" />,
  "Govt Affiliates": <Landmark className="text-blue-500 w-6 h-6" />,
  Exhibitions: <Globe className="text-blue-500 w-6 h-6" />,
  Stalls: <Store className="text-blue-500 w-6 h-6" />,
  All: <LayoutGrid className="text-blue-500 w-6 h-6" />,
};
export const projects = [
  {
    id: 1,
    title: "Equality and Solidarity",
    category: "Residential",
    kwp: "N/A",
    image: "https://picsum.photos/id/1018/400/300"
  },
  {
    id: 2,
    title: "Windward Renewables",
    category: "Commercial",
    kwp: "N/A",
    image: "https://picsum.photos/id/1025/400/300"
  },
  {
    id: 3,
    title: "Jaquar Group: 1440 Kwp",
    category: "Govt Affiliates",
    kwp: "1440",
    image: "https://picsum.photos/id/1003/400/300"
  },
  {
    id: 4,
    title: "Bal Bharati Group of Education: 450 Kwp",
    category: "Govt Affiliates",
    kwp: "450",
    image: "https://picsum.photos/id/1005/400/300"
  },
  {
    id: 5,
    title: "Hindu Education Society: 800 Kwp",
    category: "Govt Affiliates",
    kwp: "800",
    image: "https://picsum.photos/id/1006/400/300"
  },
  {
    id: 6,
    title: "Orient Syntax: 1000 Kwp",
    category: "Commercial",
    kwp: "1000",
    image: "https://picsum.photos/id/1020/400/300"
  },
  {
    id: 7,
    title: "Skylark Group of Poultry: 1450 Kwp",
    category: "Commercial",
    kwp: "1450",
    image: "https://picsum.photos/id/1016/400/300"
  },
  {
    id: 8,
    title: "O.S Cool Home: 100 Kwp",
    category: "Residential",
    kwp: "100",
    image: "https://picsum.photos/id/1021/400/300"
  },
  {
    id: 9,
    title: "R.K. Rayon: 100 Kwp (Roof Top)",
    category: "Residential",
    kwp: "100",
    image: "https://picsum.photos/id/1024/400/300"
  },
  {
    id: 10,
    title: "Wind Whisper Energy",
    category: "Exhibitions",
    kwp: "N/A",
    image: "https://picsum.photos/id/1033/400/300"
  },
  {
    id: 11,
    title: "Sun Breeze Power",
    category: "Stalls",
    kwp: "N/A",
    image: "https://picsum.photos/id/1044/400/300"
  }
];

