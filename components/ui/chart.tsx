"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import {
  CartesianGrid,
  Line,
  LineChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Area,
  AreaChart,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts"

import { cn } from "@/lib/utils"

const ChartContext = React.createContext<ChartContextType>({
  data: [],
  categories: [],
  index: "",
  type: "bar",
  yKeys: {},
})

type ChartContextType = {
  data: Record<string, any>[]
  categories: string[]
  index: string
  type: ChartType
  yKeys: Record<string, { stroke?: string; fill?: string }>
}

type ChartType = "line" | "bar" | "pie" | "radial" | "area" | "scatter" | "composed"

type ChartProps = {
  data: Record<string, any>[]
  categories: string[]
  index: string
  type?: ChartType
  yKeys?: Record<string, { stroke?: string; fill?: string }>
} & React.ComponentPropsWithoutRef<"div">

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ data, categories, index, type = "bar", yKeys = {}, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full h-96", className)} {...props}>
        <ChartContext.Provider value={{ data, categories, index, type, yKeys }}>
          <ResponsiveContainer width="100%" height="100%">
            {type === "line" && (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={index} />
                <YAxis />
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                {categories.map((category) => (
                  <Line
                    key={category}
                    dataKey={category}
                    stroke={yKeys[category]?.stroke || "#8884d8"}
                    fill={yKeys[category]?.fill || "#8884d8"}
                  />
                ))}
                {children}
              </LineChart>
            )}
            {type === "bar" && (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={index} />
                <YAxis />
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                {categories.map((category) => (
                  <Bar key={category} dataKey={category} fill={yKeys[category]?.fill || "#8884d8"} />
                ))}
                {children}
              </BarChart>
            )}
            {type === "pie" && (
              <PieChart>
                {categories.map((category) => (
                  <Pie
                    key={category}
                    dataKey={category}
                    nameKey={index}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill={yKeys[category]?.fill || "#8884d8"}
                    label
                  />
                ))}
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                {children}
              </PieChart>
            )}
            {type === "radial" && (
              <RadialBarChart innerRadius="10%" outerRadius="80%" data={data}>
                {categories.map((category) => (
                  <RadialBar key={category} dataKey={category} fill={yKeys[category]?.fill || "#8884d8"} />
                ))}
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                {children}
              </RadialBarChart>
            )}
            {type === "area" && (
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={index} />
                <YAxis />
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                {categories.map((category) => (
                  <Area
                    key={category}
                    type="monotone"
                    dataKey={category}
                    stroke={yKeys[category]?.stroke || "#8884d8"}
                    fill={yKeys[category]?.fill || "#8884d8"}
                  />
                ))}
                {children}
              </AreaChart>
            )}
            {type === "scatter" && (
              <ScatterChart>
                <CartesianGrid />
                <XAxis type="number" dataKey={index} name={index} />
                <YAxis type="number" dataKey={categories[0]} name={categories[0]} />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<ChartTooltip />} />
                <Legend />
                {categories.map((category) => (
                  <Scatter key={category} dataKey={category} fill={yKeys[category]?.fill || "#8884d8"} />
                ))}
                {children}
              </ScatterChart>
            )}
            {type === "composed" && (
              // For composed charts, children are expected to define the chart types (Line, Bar, Area, etc.)
              // The data, categories, and index from context will be used by the children.
              // Tooltip and Legend are included by default, but can be overridden by children.
              <div className="w-full h-full">{children}</div>
            )}
          </ResponsiveContainer>
        </ChartContext.Provider>
      </div>
    )
  },
)
Chart.displayName = "Chart"

const ChartTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 text-sm shadow-md">
        <p className="font-bold">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    )
  }

  return null
}

const ChartPrimitive = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Slot> & VariantProps<typeof chartVariants>
>(({ className, ...props }, ref) => {
  const { type } = useChart()
  const Comp = type === "composed" ? "div" : Slot
  return <Comp ref={ref} className={cn(chartVariants(), className)} {...props} />
})
ChartPrimitive.displayName = "ChartPrimitive"

const chartVariants = cva("w-full h-full")

const useChart = () => {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <Chart />")
  }
  return context
}

export { Chart, ChartPrimitive, useChart }
