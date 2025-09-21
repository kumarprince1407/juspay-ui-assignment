// types.ts - TypeScript interfaces for the dashboard

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  submenu?: MenuItem[];
}

export interface MetricData {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  bgColor: string;
}

export interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

export interface Notification {
  id: string;
  type: "bug" | "user" | "activity";
  title: string;
  time: string;
  user?: {
    name: string;
    avatar: string;
  };
}

export interface Activity {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  time: string;
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  status?: "online" | "offline";
}

export interface ChartDataPoint {
  month: string;
  actual: number;
  projected: number;
}

export interface RevenueLocation {
  name: string;
  value: string;
}
