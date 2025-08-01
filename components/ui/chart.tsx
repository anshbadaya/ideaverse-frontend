"use client"

import type * as React from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  Bar,
  BarChart,
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

// Define a type for common chart props
interface CommonChartProps {
  data: Record<string, any>[]
  config: ChartConfig
  className?: string
}

// Line Chart Component
interface LineChartProps extends CommonChartProps {
  lineKeys: { key: string; stroke: string }[]
}

const CustomLineChart: React.FC<LineChartProps> = ({ data, config, lineKeys, className }) => (
  <ChartContainer config={config} className={cn("min-h-[200px] w-full", className)}>
    <LineChart accessibilityLayer data={data}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <YAxis tickLine={false} tickMargin={10} axisLine={false} />
      <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
      <ChartLegend content={<ChartLegendContent />} />
      {lineKeys.map((item) => (
        <Line key={item.key} dataKey={item.key} type="monotone" stroke={item.stroke} strokeWidth={2} dot={false} />
      ))}
    </LineChart>
  </ChartContainer>
)

// Bar Chart Component
interface BarChartProps extends CommonChartProps {
  barKeys: { key: string; fill: string }[]
}

const CustomBarChart: React.FC<BarChartProps> = ({ data, config, barKeys, className }) => (
  <ChartContainer config={config} className={cn("min-h-[200px] w-full", className)}>
    <BarChart accessibilityLayer data={data}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <YAxis tickLine={false} tickMargin={10} axisLine={false} />
      <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
      <ChartLegend content={<ChartLegendContent />} />
      {barKeys.map((item) => (
        <Bar key={item.key} dataKey={item.key} fill={item.fill} radius={8} />
      ))}
    </BarChart>
  </ChartContainer>
)

// Area Chart Component
interface AreaChartProps extends CommonChartProps {
  areaKeys: { key: string; fill: string; stroke: string }[]
}

const CustomAreaChart: React.FC<AreaChartProps> = ({ data, config, areaKeys, className }) => (
  <ChartContainer config={config} className={cn("min-h-[200px] w-full", className)}>
    <AreaChart accessibilityLayer data={data}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <YAxis tickLine={false} tickMargin={10} axisLine={false} />
      <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
      <ChartLegend content={<ChartLegendContent />} />
      {areaKeys.map((item) => (
        <Area key={item.key} dataKey={item.key} type="monotone" fill={item.fill} stroke={item.stroke} />
      ))}
    </AreaChart>
  </ChartContainer>
)

export {
  CustomLineChart,
  CustomBarChart,
  CustomAreaChart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ResponsiveContainer,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  LineChart,
  BarChart,
  AreaChart,
}
