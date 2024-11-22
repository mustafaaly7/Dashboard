import { BellRing, Check, EllipsisIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const notifications = [
  {
    title: "Phone Number",
    description: "+1 2018147156",
  },
  {
    title: "Email",
    description: "test@gmail.com",
  },
  {
    title: "Address",
    description: "test 123 streets california",
  },{
    title: "Emergency Contact",
    description: "Brother : Jonas Lucas",
    description: "+1 2018654356",
  },
]


export function CardDemo({ className, ...props }) {
  return (
    <Card
      className={cn(
        "w-full max-w-[380px] bg-gray-100",
        className
      )}
      {...props}
    >
      <CardHeader>
        <div className="flex justify-between">
        <CardTitle className={"text-xl"}>Contact Info</CardTitle>
        <EllipsisIcon />
        </div>
      </CardHeader>
        <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

