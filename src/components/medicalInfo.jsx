import { BellRing, Check, EllipsisIcon, PersonStanding, RulerIcon, Weight } from "lucide-react"

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








export default function MedicalinfoCard({ className, ...props }) {
    return (
        <div className="h-min-screen">
            <Card className={cn("w-[380px]", className)} {...props}>
                <CardHeader>
                    <div className="flex justify-around">
                        <CardTitle>
                            <div className="flex items-center justify-center gap-2">
                                <RulerIcon className="text-black bg-cyan-400 p-1" />
                                Body Height
                            </div>
                        </CardTitle>
                        <CardTitle >
                            <div className="flex items-center justify-center gap-2">

                                <Weight className="text-black bg-cyan-400 p-1" />
                                Body Weight
                            </div>

                        </CardTitle>
                         <CardTitle>
                            <div className="flex items-center justify-center gap-2">

                                <PersonStanding className="text-black bg-cyan-400 p-1" />
                                Body Mass Index
                                <p>5ft 1.5inc</p>
                            </div>

                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex justify-between gap-5">
                        {/* section 1  */}
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5  space-y-1">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />

                                <p className="text-sm font-medium leading-none">Gender : </p>
                                <p className="text-sm text-muted-foreground"> Female</p>
                            </div>
                            <div className="flex gap-5 space-y-1">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />

                                <p className="text-sm font-medium leading-none">Age : </p>
                                <p className="text-sm text-muted-foreground"> 56 Years old</p>
                            </div>
                            <div className="flex gap-5 space-y-1">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />

                                <p className="text-sm font-medium leading-none">Date of Birth : </p>
                                <p className="text-sm text-muted-foreground"> 19-4-1967</p>
                            </div>
                        </div>

                        {/* Vertical Divider */}
                        <div className="w-px bg-black mx-4 " />
                        {/* section 3 */}
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5  space-y-1">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />

                                <p className="text-sm font-medium leading-none">Occupation : </p>
                                <p className="text-sm text-muted-foreground"> Engineer</p>
                            </div>
                            <div className="flex gap-5 space-y-1">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />

                                <p className="text-sm font-medium leading-none">Insurrance : </p>
                                <p className="text-sm text-muted-foreground"> Health Plus</p>
                            </div>
                        </div>


                    </div>

                </CardContent>

            </Card>
        </div>


    )
}