"use client";
import Image from "next/image";
import { CartesianGrid, Legend, LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Apr",
    income: 2400,
    expense: 2400,
  },
  {
    name: "May",
    income: 1398,
    expense: 2210,
  },
  {
    name: "Jun",
    income: 9800,
    expense: 2290,
  },
  {
    name: "Jul",
    income: 3908,
    expense: 2000,
  },
  {
    name: "Aug",
    income: 4800,
    expense: 2181,
  },
  {
    name: "Sep",
    income: 3800,
    expense: 2500,
  },
  {
    name: "Oct",
    income: 4300,
    expense: 2100,
  },
  {
    name: "Nov",
    income: 4300,
    expense: 2100,
  },
  {
    name: "Dec",
    income: 4300,
    expense: 2100,
  },
  {
    name: "Jan",
    income: 4300,
    expense: 2100,
  },
  {
    name: "Feb",
    income: 4300,
    expense: 2100,
  },
  {
    name: "Mar",
    income: 4300,
    expense: 2100,
  },
];

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title Container */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data} margin={{top:5, right:30, left:20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={10} />
            <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={20} />
            <Legend  
            align="center"
            verticalAlign="top"
            wrapperStyle={{
              paddingTop: "10px",
              paddingBottom: "30px"}} />
            <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
            <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
