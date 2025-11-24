"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Total",
    count: 2750,
    fill: "#fff",
  },
  {
    name: "Girls",
    count: 1325,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 1325,
    fill: "#C3EBFA",
  },
];
export default function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title Container */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* Chart Container */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      {/* Bottom Container */}
      <div className="flex justify-center gap-16">
        {/* Bottom Section 1 */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#C3EBFA] rounded-full" />
          <h1 className="font-bold">1,325</h1>
          <h2 className="text-xs text-gray-300">Boys (50%)</h2>
        </div>
        {/* Bottom Section 2 */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#FAE27C] rounded-full" />
          <h1 className="font-bold">1,125</h1>
          <h2 className="text-xs text-gray-300">Girls (50%)</h2>
        </div>
      </div>
    </div>
  );
}
