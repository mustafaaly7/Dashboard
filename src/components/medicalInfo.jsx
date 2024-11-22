import { BellRing, Check, EllipsisIcon, PersonStanding, RulerIcon, Weight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import MeasurementDropdown from "./dropdown";

const measurements = [
  "Heart Rate (bpm)",
  "Blood Pressure (mmHg)",
  "Respiratory Rate (breaths/min)",
  "Temperature (°C)",
  "Oxygen Saturation (%)",
];

const measurements1 = [
  "Small (S)",
  "Medium (M)",
  "Large (L)",
  "Extra Large (XL)",
  "Double Extra Large (XXL)",
];

const volumeMeasurements = ["Milliliters (ml)", "Liters (L)", "Cubic Centimeters (cc)", "Gallons (gal)", "Fluid Ounces (fl oz)"];
const durationMeasurements = ["Seconds (s)", "Minutes (min)", "Hours (h)", "Days", "Weeks"];

const medicalInstructions = [
  "Take with food",
  "Take before bedtime",
  "Take on an empty stomach",
  "Apply externally only",
  "Shake well before use",
];

export default function MedicalinfoCard({ className, ...props }) {
  return (
    <div className="container mx-auto p-4 over">
      <Card className={cn("w-full ", className)} {...props}>
        <CardHeader>
          <div className="flex flex-wrap justify-between gap-4 md:justify-around">
            <CardTitle className="flex items-center gap-2 text-center text-xl">
              <RulerIcon className="text-black bg-cyan-400 p-1 tex rounded-md" />
              <div>
                Body Height
                <p className="text-sm text-gray-500">5 ft 8 in</p>
              </div>
            </CardTitle>
            <CardTitle className="flex items-center gap-2 text-center text-xl">
              <Weight className="text-black bg-cyan-400 p-1 rounded-md" />
              <div>
                Body Weight
                <p className="text-sm text-gray-500">70 kg</p>
              </div>
            </CardTitle>
            <CardTitle className="flex items-center gap-2 text-center text-xl">
              <PersonStanding className="text-black bg-cyan-400 p-1 rounded-md" />
              <div>
                Body Mass Index
                <p className="text-sm text-gray-500">22.5</p>
              </div>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <h1 className="text-lg font-medium">Medication</h1>
            <div className="w-auto my-2">
              <Input placeholder="Enter medication name" />
            </div>
            <div className="flex flex-wrap justify-between items-center gap-3 my-4">
              <div className="border shadow p-2 w-full md:w-auto text-center hover:bg-gray-100 cursor-pointer">
                1. Pepcid AC
              </div>
              <MeasurementDropdown measurements={measurements} />
              <MeasurementDropdown measurements={measurements1} />
              <MeasurementDropdown measurements={volumeMeasurements} />
              <MeasurementDropdown measurements={durationMeasurements} />
              <MeasurementDropdown measurements={medicalInstructions} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
