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

const infoCardDetail = {
  gender:"Female",
  age: "18 Years old",
  dateofbirth:"01-01-2004",
  occupation:"Software Developer",
  insurrance:"Health Plus"
}




export function Infocard({ className, ...props }) {
    return (
            <Card className={cn("w-full bg-gray-100" , className)} {...props}>
                <CardHeader>
                    <div className="flex justify-between">
                        <CardTitle className={"text-xl"}>General Info</CardTitle>
                        <EllipsisIcon />
                    </div>        
                </CardHeader>
                <CardContent className={"flex flex-col md:flex-row gap-4"}>
                    <div className="">
                        {/* section 1  */}
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-2 items-center">

                                <p className="text-sm font-medium ">Gender : </p>
                                <p className="text-sm text-muted-foreground">{infoCardDetail.gender}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm font-medium ">Age : </p>
                                <p className="text-sm text-muted-foreground">{infoCardDetail.age}</p>
                            </div>
                            <div className="flex gap-2 items-center">

                                <p className="text-sm font-medium ">Date Of Birth : </p>
                                <p className="text-sm text-muted-foreground">{infoCardDetail.dateofbirth}</p>
                            </div>
                            
                        </div>

                    </div>
                                            {/* Vertical Divider */}
                        <div className="w-[0.5px] bg-[#ccc] mx-4 hidden md:block" />
                    <div className="">
                        {/* section 12 */}
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-2 items-center">

                                <p className="text-sm font-medium ">Occupation : </p>
                                <p className="text-sm text-muted-foreground">{infoCardDetail.occupation}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm font-medium ">Insurrance : </p>
                                <p className="text-sm text-muted-foreground">{infoCardDetail.insurrance}</p>
                            </div>
                            
                        </div>

                    </div>
            
                   
                </CardContent>
             
            </Card>
    )
}
