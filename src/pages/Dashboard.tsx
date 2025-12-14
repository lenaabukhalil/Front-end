import { DashboardLayout } from "@/components/DashboardLayout";
import { GlanceChart } from "@/components/dashboard/GlanceChart";
import { KpiCards } from "@/components/dashboard/KpiCards";
import { SessionTables } from "@/components/dashboard/SessionTables";
import { BottomCards } from "@/components/dashboard/BottomCards";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <GlanceChart />
        <KpiCards />
        <SessionTables />
        <BottomCards />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
