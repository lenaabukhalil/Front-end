import { MapPin, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export const AddLocationForm = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border max-w-5xl">
      <form className="space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-xs text-muted-foreground mb-2 block">
              Organization <span className="text-destructive">*</span>
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select organization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="igf2">IGF2</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-2 block">
              Location ID <span className="text-destructive">*</span>
            </label>
            <Input placeholder="e.g., LOC-001" />
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-2 block">
              Location Name (EN) <span className="text-destructive">*</span>
            </label>
            <Input placeholder="Enter location name in English" />
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-2 block">
              Location Name (AR) <span className="text-destructive">*</span>
            </label>
            <Input placeholder="أدخل اسم الموقع بالعربية" dir="ltr" />
          </div>
        </div>

        {/* Location Coordinates Section */}
        <div className="pt-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold">Location Coordinates</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-2 block">
                Latitude <span className="text-destructive">*</span>
              </label>
              <Input placeholder="e.g., 31.9539" type="number" step="any" />
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-2 block">
                Longitude <span className="text-destructive">*</span>
              </label>
              <Input placeholder="e.g., 35.9106" type="number" step="any" />
            </div>
          </div>
        </div>

        {/* Availability and Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div>
            <label className="text-xs text-muted-foreground mb-2 block">Availability Status</label>
            <Select defaultValue="available">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="coming_soon">Coming Soon</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end justify-between pb-2">
            <label className="text-xs text-muted-foreground">Visible to Users</label>
            <Switch defaultChecked />
          </div>
        </div>

        {/* Media & Branding Section */}
        <div className="pt-4">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold">Media & Branding</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-muted-foreground mb-3" />
              <p className="text-sm font-medium mb-1">Upload Logo</p>
              <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
            </div>

            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-muted-foreground mb-3" />
              <p className="text-sm font-medium mb-1">Upload Banner</p>
              <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-6 border-t border-border">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add Location
          </Button>
        </div>
      </form>
    </div>
  );
};
