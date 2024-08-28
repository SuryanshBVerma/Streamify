'use client';
import { useMemo, useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart, Cell } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const fetchRevenueData = async () => {
  // Simulating a fetch from a JSON file
  return [
    { source: 'Subscriptions', revenue: 275000, fill: 'hsl(var(--chart-1))' },
    { source: 'Ads', revenue: 200000, fill: 'hsl(var(--chart-2))' },
    { source: 'One-time Purchases', revenue: 150000, fill: 'hsl(var(--chart-3))' },
    { source: 'Partnerships', revenue: 100000, fill: 'hsl(var(--chart-4))' },
    { source: 'Other', revenue: 75000, fill: 'hsl(var(--chart-5))' }
  ];
};

export function PieGraph() {
  const [chartData, setChartData] = useState([]);
  const [selectedSource, setSelectedSource] = useState(null);

  useEffect(() => {
    fetchRevenueData().then(setChartData);
  }, []);

  const totalRevenue = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.revenue, 0);
  }, [chartData]);

  const chartConfig = useMemo(() => {
    const config = {
      revenue: { label: 'Revenue' }
    };
    chartData.forEach(item => {
      config[item.source] = {
        label: item.source,
        color: item.fill
      };
    });
    return config;
  }, [chartData]);

  const handlePieClick = (entry) => {
    setSelectedSource(entry.source);
  };

  const filteredData = selectedSource ? chartData.filter(item => item.source === selectedSource) : chartData;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue Distribution</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="revenue"
              nameKey="source"
              innerRadius={60}
              strokeWidth={5}
              onClick={handlePieClick}
              className='cursor-pointer'
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          ${(totalRevenue / 1000000).toFixed(2)}M
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Revenue
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Revenue up by 8.7% this quarter <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing revenue distribution for the last 6 months
        </div>
      </CardFooter>
      <CardContent>

        <Table className="border">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Source</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.source}>
                <TableCell>{item.source}</TableCell>
                <TableCell className="text-right">${item.revenue.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </CardContent>
    </Card>
  );
}