import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./sidebar"
import Header from '../header'

export default function Layout({ children }) {
  return (
    <div >
        <Header/>
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full px-2">
        <SidebarTrigger />
        
        {children}
      </main>
    </SidebarProvider>
    </div>
  )
}
