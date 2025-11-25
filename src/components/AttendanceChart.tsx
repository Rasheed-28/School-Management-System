"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const data = [
  { name: "Mon", present: 1600, absent: 1150 },
  { name: "Tue", present: 1750, absent: 1000 },
  { name: "Wed", present: 1800, absent: 950 },
  { name: "Thu", present: 1850, absent: 900 },
  { name: "Fri", present: 1900, absent: 850 },
  { name: "Sat", present: 2000, absent: 750 },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          barSize={20}
          margin={{ right: 30, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "8px", borderColor: "lightgray" }}
          />

          {/* Legend at top with padding */}
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{
              paddingTop: "20px",
              paddingBottom: "40px",
            }}
            iconType="circle"
          />

          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
            activeBar={<Rectangle fill="#f7d04a" />}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
            activeBar={<Rectangle fill="#a0d8ed" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}