import {
    LuLayoutDashboard,
    LuHandCoins,
    LuWalletMinimal,
    LuLogOut,
} from "react-icons/lu";
import { 
  HiOutlineViewGrid,
  HiOutlineCurrencyDollar,
  HiOutlineCreditCard,
  HiOutlineLightBulb,
  HiOutlineLogout
} from "react-icons/hi";

export const SIDE_MENU_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icon: LuLayoutDashboard,
        path: "/dashboard",
    },
    {
        id: "02",
        label: "Income",
        icon: LuWalletMinimal,
        path: "/income",
    },
    {
        id: "03",
        label: "Expense",
        icon: LuHandCoins,
        path: "/expense",
    },
    {
    label: "AI Insights",
    path: "/ai-insights",
    icon: HiOutlineLightBulb,
    },
    {
        id: "06",
        label: "Logout",
        icon: LuLogOut,
        path: "/logout",
    },
    
];