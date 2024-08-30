'use client';

import { useState, useMemo, useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'Top Genres by Streams';

const fetchGenreData = async () => {
  return [
    { genre: "Pop", streams: 5000000 },
    { genre: "Hip Hop", streams: 4500000 },
    { genre: "Rock", streams: 3500000 },
    { genre: "Electronic", streams: 3000000 },
    { genre: "R&B", streams: 2500000 },
    { genre: "Country", streams: 2000000 },
    { genre: "Latin", streams: 1800000 },
    { genre: "Jazz", streams: 1000000 },
    { genre: "Classical", streams: 800000 },
    { genre: "Alternative", streams: 1200000 }
  ];
};

const chartConfig = {
  streams: {
    label: 'Total Streams'
  },
  genre: {
    label: 'Genre',
    color: 'hsl(var(--chart-1))'
  }
}

export function BarGraph() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGenreData()
      .then(data => {
        setChartData(data.sort((a, b) => b.streams - a.streams)); // Sort by streams in descending order
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching genre data:", error);
        setLoading(false);
      });
  }, []);

  const totalStreams = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.streams, 0);
  }, [chartData]);



  return (
    <Card className="h-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Top Genres by Streams</CardTitle>
          <CardDescription>
            Showing total streams for top music genres
          </CardDescription>
        </div>
        <div className="flex">
          <div className="relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              Total Streams
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {totalStreams.toLocaleString()}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6 mt-8">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 10,
              right: 12,
              top: 12,
              bottom: 24
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="genre"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              tick={{ fontSize: 12, angle: -45, textAnchor: 'end' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent 
                  className="w-[150px]"
                  nameKey="streams"
                  labelFormatter={(value) => value}
                  valueFormatter={(value) => `${(value / 1000000).toFixed(2)}M streams`}
                />
              }
            />
            <Bar dataKey="streams" fill={`var(--color-genre)`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}