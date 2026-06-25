import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Boxes,
  Users,
  Briefcase,
  Search,
  Server,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/services-data";

export const serviceIcons: Record<Service["icon"], LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  layoutDashboard: LayoutDashboard,
  boxes: Boxes,
  users: Users,
  briefcase: Briefcase,
  search: Search,
  server: Server,
};
