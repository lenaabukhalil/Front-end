export const SessionTables = () => {
  const ionSessions = [
    { date: "10/09/2025, 05:23", id: "8b5c2d9e", location: "Gravity Gate", charger: "ION PRIME - 07", connector: "GBT AC", energy: "12.4 kWh" },
    { date: "10/09/2025, 04:15", id: "7a3f1c8d", location: "North Ajman", charger: "ION PRIME - 03", connector: "CCS DC", energy: "45.2 kWh" },
    { date: "10/09/2025, 03:42", id: "9d2e4b6f", location: "Gravity Gate", charger: "ION PRIME - 07", connector: "GBT AC", energy: "8.7 kWh" },
  ];

  const localSessions = [
    { date: "Invalid Date", id: "N/A", location: "-", charger: "-", connector: "-" },
    { date: "10/09/2025, 02:30", id: "local_001", location: "Gravity Gate", charger: "Local-01", connector: "Type 2" },
    { date: "10/09/2025, 01:15", id: "local_002", location: "North Ajman", charger: "Local-02", connector: "CCS" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Active Sessions</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* ION Sessions Table */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="text-sm font-semibold mb-4">ION Sessions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Start Date/Time</th>
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Session ID</th>
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Location</th>
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Charger</th>
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Connector</th>
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Energy</th>
                </tr>
              </thead>
              <tbody>
                {ionSessions.map((session, idx) => (
                  <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50">
                    <td className="py-3 px-2">{session.date}</td>
                    <td className="py-3 px-2 font-mono">{session.id}</td>
                    <td className="py-3 px-2">{session.location}</td>
                    <td className="py-3 px-2">{session.charger}</td>
                    <td className="py-3 px-2">{session.connector}</td>
                    <td className="py-3 px-2">{session.energy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Local Sessions Table */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="text-sm font-semibold mb-4">Local Sessions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Start Date/Time</th>
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Session ID</th>
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Location</th>
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Charger</th>
                  <th className="text-left py-2 px-2 font-medium text-muted-foreground">Connector</th>
                </tr>
              </thead>
              <tbody>
                {localSessions.map((session, idx) => (
                  <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50">
                    <td className="py-3 px-2">{session.date}</td>
                    <td className="py-3 px-2 font-mono">{session.id}</td>
                    <td className="py-3 px-2">{session.location}</td>
                    <td className="py-3 px-2">{session.charger}</td>
                    <td className="py-3 px-2">{session.connector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
