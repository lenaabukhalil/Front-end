import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { PageTabs } from "@/components/shared/PageTabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  organizationOptions,
  locationOptions,
  chargerOptions,
  connectorOptions,
  peakTypeOptions,
  statusOptions,
} from "@/services/api";

const tabs = [{ id: "add", label: "Add Tariffs" }];

const Tariffs = () => {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Tariffs</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Configure pricing and tariffs
          </p>

          <PageTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="text-xs text-muted-foreground pb-4 border-b border-border">
            ION Dashboard / Tariffs / Add Tariffs
          </div>
        </div>

        <div className="pt-2">
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <form className="space-y-6">
              {/* Row 1: Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <Label>Organization</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization" />
                    </SelectTrigger>
                    <SelectContent>
                      {organizationOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locationOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Charger</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select charger" />
                    </SelectTrigger>
                    <SelectContent>
                      {chargerOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Connector ID</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select connector" />
                    </SelectTrigger>
                    <SelectContent>
                      {connectorOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Peak Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select peak type" />
                    </SelectTrigger>
                    <SelectContent>
                      {peakTypeOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 2: Tariff IDs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tariff ID (Primary Key)</Label>
                  <Input placeholder="e.g., TRF-001" />
                </div>

                <div className="space-y-2">
                  <Label>Tariff ID (a_idcounter_tariffcount)</Label>
                  <Input placeholder="e.g., 1001" />
                </div>
              </div>

              {/* Row 3: Rates */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Buy Rate ($/kWh)</Label>
                  <Input type="number" step="0.01" placeholder="0.00" />
                </div>

                <div className="space-y-2">
                  <Label>Sell Rate ($/kWh)</Label>
                  <Input type="number" step="0.01" placeholder="0.00" />
                </div>

                <div className="space-y-2">
                  <Label>Transaction Fees ($)</Label>
                  <Input type="number" step="0.01" placeholder="0.00" />
                </div>
              </div>

              {/* Row 4: Percentages and Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Client Percentage (%)</Label>
                  <Input type="number" step="0.1" placeholder="0" />
                </div>

                <div className="space-y-2">
                  <Label>Partner Percentage (%)</Label>
                  <Input type="number" step="0.1" placeholder="0" />
                </div>

                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
                <Button type="submit">+ Add Tariff</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tariffs;
