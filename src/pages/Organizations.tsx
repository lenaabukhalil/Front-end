import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { PageTabs } from "@/components/shared/PageTabs";
import { DataTable } from "@/components/shared/DataTable";
import { FormPlaceholder } from "@/components/shared/FormPlaceholder";
import { EmptyState } from "@/components/shared/EmptyState";
import { fetchOrganizations } from "@/services/api";
import type { Organization } from "@/types";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "reports", label: "Reports" },
  { id: "add", label: "Add Organizations" },
];

const columns = [
  { key: "id" as const, header: "ID" },
  { key: "name" as const, header: "Name" },
  { 
    key: "amount" as const, 
    header: "Amount",
    render: (org: Organization) => `$${org.amount.toLocaleString()}`,
  },
  { 
    key: "energy" as const, 
    header: "Energy",
    render: (org: Organization) => `${org.energy.toLocaleString()} kWh`,
  },
];

const Organizations = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  useEffect(() => {
    fetchOrganizations().then(setOrganizations);
  }, []);

  const getBreadcrumb = () => {
    switch (activeTab) {
      case "add":
        return "ION Dashboard / Organizations / Add Organizations";
      case "reports":
        return "ION Dashboard / Organizations / Reports";
      default:
        return "ION Dashboard / Organizations";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Organizations</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Manage all organizations
          </p>

          <PageTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="text-xs text-muted-foreground pb-4 border-b border-border">
            {getBreadcrumb()}
          </div>
        </div>

        <div className="pt-2">
          {activeTab === "overview" && (
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <DataTable columns={columns} data={organizations} />
            </div>
          )}
          {activeTab === "reports" && (
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <EmptyState 
                title="Reports" 
                description="Organization reports will be available here."
              />
            </div>
          )}
          {activeTab === "add" && (
            <FormPlaceholder 
              title="Add Organization" 
              description="Create a new organization to manage charging stations."
            />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Organizations;
