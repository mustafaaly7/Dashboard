import { Box, Calendar, DollarSign, HeartPulseIcon, Home, Inbox, Phone, Search, Settings, Stethoscope } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Apointments",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Patients",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Doctors",
    url: "#",
    icon: HeartPulseIcon,
  },
  {
    title: "Departments",
    url: "#",
    icon: Stethoscope,
  },
  {
    title: "Payment",
    url: "#",
    icon: DollarSign,
  },  {
    title: "Inventory",
    url: "#",
    icon: Box,
  },  {
    title: "Message",
    url: "#",
    icon: Phone,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
        
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>WellNest</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className=" my-5 flex flex-col justify-center items-center gap-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
