import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row text-black">
      {/* Left Pane */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Cards Container */}
        <div className="flex gap-4 justify-between flex-wrap">
          {["student", "teacher", "parent", "staff"].map((type) => (
            <UserCard
              key={type}
              type={type as "student" | "teacher" | "parent" | "staff"}
            />
          ))}
        </div>
        {/* Middle Charts Container */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* Bottom Charts Container */}
        <div className=""></div>
      </div>
      {/* Right Pane */}
      <div className="w-full lg:w-1/3">Right Pane</div>
    </div>
  );
}
