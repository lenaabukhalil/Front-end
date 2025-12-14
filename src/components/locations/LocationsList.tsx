import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const LocationsList = () => {
  const locations = [
    { name: "Gravity Gate", name_ar: "بوابة الجاذبية", chargers: "ION", payment: "Cash", availability: "coming_soon", visibility: 0 },
    { name: "North Ajman Gas-station", name_ar: "محطة وقود شمال عجمان", chargers: "ION", payment: "Cash", availability: "available", visibility: 1 },
    { name: "South Location", name_ar: "الموقع الجنوبي", chargers: "ION", payment: "Card", availability: "available", visibility: 1 },
    { name: "East Hub", name_ar: "المركز الشرقي", chargers: "ION", payment: "Cash", availability: "maintenance", visibility: 0 },
  ];

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
      {/* Search Bar */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Search" 
          className="pl-10"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Name</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">name_ar</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Chargers</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Payment</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Availability</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Visibility</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, idx) => (
              <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50">
                <td className="py-4 px-4">{location.name}</td>
                <td className="py-4 px-4" dir="rtl">{location.name_ar}</td>
                <td className="py-4 px-4">{location.chargers}</td>
                <td className="py-4 px-4">{location.payment}</td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    location.availability === 'available' 
                      ? 'bg-success/10 text-success' 
                      : location.availability === 'coming_soon'
                      ? 'bg-amber-500/10 text-amber-600'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {location.availability}
                  </span>
                </td>
                <td className="py-4 px-4">{location.visibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>Items per page:</span>
          <div className="w-12 h-1 bg-muted rounded" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">1-10 of 36</span>
          <button className="px-2 py-1 text-muted-foreground hover:text-foreground disabled:opacity-50" disabled>‹</button>
          <button className="px-2 py-1 text-muted-foreground hover:text-foreground disabled:opacity-50" disabled>‹</button>
          <button className="px-2 py-1 text-muted-foreground hover:text-foreground">›</button>
          <button className="px-2 py-1 text-muted-foreground hover:text-foreground">›</button>
        </div>
      </div>
    </div>
  );
};
