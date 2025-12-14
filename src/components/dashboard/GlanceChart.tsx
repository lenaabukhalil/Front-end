import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: '16:00', avg: 4, active: 3 },
  { time: '18:00', avg: 5, active: 4 },
  { time: '20:00', avg: 6, active: 7 },
  { time: '22:00', avg: 7, active: 8 },
  { time: '00:00', avg: 5, active: 4 },
  { time: '02:00', avg: 3, active: 2 },
  { time: '04:00', avg: 2, active: 1 },
  { time: '06:00', avg: 4, active: 3 },
  { time: '08:00', avg: 6, active: 7 },
  { time: '10:00', avg: 8, active: 9 },
  { time: '12:00', avg: 7, active: 6 },
  { time: '14:00', avg: 6, active: 5 },
  { time: '16:00', avg: 5, active: 4 },
];

export const GlanceChart = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
      <h2 className="text-lg font-semibold mb-6">Glance</h2>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            label={{ value: 'Sessions', angle: -90, position: 'insideLeft' }}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
          <Line 
            type="monotone" 
            dataKey="avg" 
            stroke="#ef4444" 
            strokeWidth={2}
            dot={false}
            name="avg"
          />
          <Line 
            type="monotone" 
            dataKey="active" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            dot={false}
            name="Active Sessions"
          />
        </LineChart>
      </ResponsiveContainer>
      
      <p className="text-center text-sm text-muted-foreground mt-4">Last 24 hours</p>
    </div>
  );
};
