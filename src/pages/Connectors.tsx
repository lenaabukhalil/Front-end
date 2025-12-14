import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { PageTabs } from "@/components/shared/PageTabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
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
  ocpiFormatOptions,
  ocpiStandardOptions,
  connectorTypeOptions,
  powerUnitOptions,
} from "@/services/api";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "add", label: "Add Connector" },
];

const Connectors = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnabled, setIsEnabled] = useState(true);
  const [stopAt80, setStopAt80] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Connectors</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Manage connector configurations and settings
          </p>

          <PageTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="text-xs text-muted-foreground pb-4 border-b border-border">
            ION Dashboard / Connectors / {activeTab === "overview" ? "Overview" : "Add Connector"}
          </div>
        </div>

        <div className="pt-2">
          {activeTab === "overview" && (
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <h2 className="text-lg font-semibold mb-4">Connector Overview</h2>
              <p className="text-muted-foreground text-sm">
                Select "Add Connector" tab to configure a new connector or manage existing ones.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Total Connectors</div>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">10</div>
                  <div className="text-sm text-muted-foreground">Active</div>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-destructive">2</div>
                  <div className="text-sm text-muted-foreground">Inactive</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "add" && (
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <form className="space-y-6">
                {/* Row 1: Organization & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Organization *</Label>
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
                    <Label>Location *</Label>
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
                    <Label>Charger *</Label>
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
                </div>

                {/* Row 2: OCPI Settings */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>OCPI Tariff IDs</Label>
                    <Input placeholder="e.g., TARIFF-001" />
                  </div>

                  <div className="space-y-2">
                    <Label>OCPI Format</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        {ocpiFormatOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>OCPI Standard</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select standard" />
                      </SelectTrigger>
                      <SelectContent>
                        {ocpiStandardOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Connector Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {connectorTypeOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 3: Electrical Specs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Max Voltage (V)</Label>
                    <Input type="number" placeholder="e.g., 400" />
                  </div>

                  <div className="space-y-2">
                    <Label>Max Amperage (A)</Label>
                    <Input type="number" placeholder="e.g., 32" />
                  </div>

                  <div className="space-y-2">
                    <Label>Power Unit</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {powerUnitOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Power Limit (kW)</Label>
                    <Input type="number" step="0.1" placeholder="e.g., 7.2" />
                  </div>
                </div>

                {/* Row 4: Time & PIN */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>PIN Entry</Label>
                    <Input type="password" placeholder="Enter PIN" maxLength={6} />
                  </div>

                  <div className="space-y-2">
                    <Label>Time Limit (minutes)</Label>
                    <Input type="number" placeholder="e.g., 120" />
                  </div>
                </div>

                {/* Row 5: Toggles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                    <div>
                      <Label className="text-base">Stop Charging at 80%</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically stop when battery reaches 80%
                      </p>
                    </div>
                    <Switch
                      checked={stopAt80}
                      onCheckedChange={setStopAt80}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                    <div>
                      <Label className="text-base">Enable Connector</Label>
                      <p className="text-sm text-muted-foreground">
                        Toggle connector availability
                      </p>
                    </div>
                    <Switch
                      checked={isEnabled}
                      onCheckedChange={setIsEnabled}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                  <Button type="submit">+ Add Connector</Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Connectors;
