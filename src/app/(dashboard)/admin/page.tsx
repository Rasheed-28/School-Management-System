import UserCard from "@/components/UserCard";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row text-black">
      {/* Left Pane */}
      <div className="w-full lg:w-2/3">
        {/* User Cards Container */}
        <div className="flex gap-4 justify-between flex-wrap">
          {["student", "teacher", "parent", "staff"].map((type) => (
            <UserCard
              key={type}
              type={type as "student" | "teacher" | "parent" | "staff"}
            />
          ))}
        </div>
      </div>
      {/* Right Pane */}
      <div className="w-full lg:w-1/3">Right Pane</div>
    </div>
  );
}
