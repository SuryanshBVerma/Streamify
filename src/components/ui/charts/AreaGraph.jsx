'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

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


const chartData = [
  { month: 'January', totalUsers: 186, activeUsers: 80 },
  { month: 'February', totalUsers: 305, activeUsers: 200 },
  { month: 'March', totalUsers: 237, activeUsers: 120 },
  { month: 'April', totalUsers: 73, activeUsers: 190 },
  { month: 'May', totalUsers: 209, activeUsers: 200 },
  { month: 'June', totalUsers: 200, activeUsers: 140 },
  { month: 'July', totalUsers: 280, activeUsers: 160 },
  { month: 'August', totalUsers: 320, activeUsers: 250},
  { month: 'September', totalUsers: 200, activeUsers: 220 },
  { month: 'October', totalUsers: 350, activeUsers: 300 },
  { month: 'November', totalUsers: 415, activeUsers: 200 },
  { month: 'December', totalUsers: 450, activeUsers: 290 }
];


const chartConfig = {
  totalUsers: {
    label: 'Total Users',
    color: 'hsl(var(--chart-1))'
  },
  activeUsers: {
    label: 'Active Users',
    color: 'hsl(var(--chart-2))'
  }
};

export function AreaGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth Chart</CardTitle>
        <CardDescription>
          Total users and active users
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            
            <Area
              dataKey="activeUsers"
              type="natural"
              fill="var(--color-activeUsers)" 
              fillOpacity={0.4}
              stroke="var(--color-activeUsers)" 
              stackId="a"
            />
            
            <Area
              dataKey="totalUsers" 
              type="natural"
              fill="var(--color-totalUsers)" 
              fillOpacity={0.4}
              stroke="var(--color-totalUsers)" 
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
