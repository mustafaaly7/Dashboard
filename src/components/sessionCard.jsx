import { CalendarRangeIcon, EllipsisIcon } from "lucide-react";










export default function SessionCard() {
    return (
        <div className="container mx-auto  p-6 bg-gray-100 border border-gray-100 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">



            <div className="flex justify-between flex-wrap ">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Session</h1>
                <EllipsisIcon className="font-normal text-gray-700 dark:text-gray-400" />

            </div>
            <h3 className="my-3 text-lg">28 March 2023</h3>

            {/* First card  */}
            <div>
                <div className=" my-2 bg-white border-opacity-75 p-6 rounded-lg">
                    <div className="flex flex-col gap-4">
                   <div className="flex justify-between flex-wrap">
                    <h3 className="text-gray-700 font-bold">Routine Checkup</h3>
                    <h4 className="p-1 bg-cyan-300 rounded text-sm">Confirmed</h4>
                   </div>
                    <h2 className=" my-6 text-sm  font-medium title-font mb-2">
                        Summary : Advise the patient to engage in light excercise and monitor blood pressure weekly 
                    </h2>
                    <div className=" my-4 flex gap-2 items-center">
                        <CalendarRangeIcon className="fon" />
                    <h3 className="leading-relaxed text-base">
                        Thursday 07- July -2028 -- 7:00 AM -- $97 
                    </h3>
                    </div>
                    </div>
                    
                </div>
                <h3 className="my-3 text-lg">04 May 2024</h3>

                {/* second card */}
                <div className=" my-2 bg-white border-opacity-75 p-6 rounded-lg">
                    <div className="flex flex-col gap-4">
                   <div className="flex justify-between flex-wrap">
                    <h3 className="text-gray-700 font-bold">Blood Test </h3>
                    <h4 className="p-1 bg-blue-600  text-white rounded text-sm">Completed</h4>
                   </div>
                    <h1 className="my-4 text-xl font-bold">Dr.Emily will</h1>
                    <div className=" my-2 flex gap-2 items-center">
                        <CalendarRangeIcon className="fon" />
                    <h3 className="leading-relaxed text-base">
                        Thursday 07- July -2028 -- 7:00 AM -- $97 
                    </h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}