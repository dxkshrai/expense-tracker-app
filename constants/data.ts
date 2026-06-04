import { CategoryType, ExpenseCategoriesType } from "@/types";
import { colors } from "./theme";

import * as Icons from "phosphor-react-native"; // Import all icons dynamically

export const expenseCategories: ExpenseCategoriesType = {
  groceries: {
    label: "Groceries",
    value: "groceries",
    icon: Icons.ShoppingCartIcon,
    bgColor: "#131fcaff", // Royal Blue
  },
  rent: {
    label: "Rent",
    value: "rent",
    icon: Icons.HouseLineIcon,
    bgColor: "#075985", // Dark Blue
  },
  utilities: {
    label: "Utilities",
    value: "utilities",
    icon: Icons.LightbulbIcon,
    bgColor: "#028dddff", // Sky Blue
  },
  transportation: {
    label: "Transportation",
    value: "transportation",
    icon: Icons.CarIcon,
    bgColor: "#b45309", // Dark Orange-Red
  },
  entertainment: {
    label: "Entertainment",
    value: "entertainment",
    icon: Icons.FilmSlateIcon,
    bgColor: "#ff00a2ff", // Baby Pink
  },
  dining: {
    label: "Dining",
    value: "dining",
    icon: Icons.ForkKnifeIcon,
    bgColor: "#8a0023ff", // Maroon
  },
  health: {
    label: "Health",
    value: "health",
    icon: Icons.HeartbeatIcon,
    bgColor: "#e11d48", // Pinkish Red
  },
  gambling: {
    label: "Gambling",
    value: "gambling",
    icon: Icons.CoinsIcon,
    bgColor: "#ff0000ff", // Red
  },
  insurance: {
    label: "Insurance",
    value: "insurance",
    icon: Icons.ShieldCheckIcon,
    bgColor: "#4b5563ff", // Mid Gray
  },
  savings: {
    label: "Savings",
    value: "savings",
    icon: Icons.PiggyBankIcon,
    bgColor: "#065F46", // Deep Teal Green
  },
  clothing: {
    label: "Clothing",
    value: "clothing",
    icon: Icons.TShirtIcon,
    bgColor: "#7c3aed", // Violet
  },
  personal: {
    label: "Personal",
    value: "personal",
    icon: Icons.UserIcon,
    bgColor: "#f4380aff", // Orange
  },
  others: {
    label: "Others",
    value: "others",
    icon: Icons.DotsThreeOutlineIcon,
    bgColor: "#a19e13ff", // Dark Yellow
  },
};

export const incomeCategory: CategoryType = {
  label: "Income",
  value: "income",
  icon: Icons.CurrencyDollarIcon,
  bgColor: "#14aa4bff", // Green
};

export const transactionTypes = [
  { label: "Expense", value: "expense" },
  { label: "Income", value: "income" },
];
