"use client"

import {TrendingUp} from "lucide-react"
import {Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
    {month: "فروردین", desktop: 186},
    {month: "اردیبهشت", desktop: 305},
    {month: "خرداد", desktop: 237},
    {month: "تیر", desktop: 73},
    {month: "مرداد", desktop: 209},
    {month: "شهریور", desktop: 214},
]

const chartConfig = {
    desktop: {
        label: "تعداد فروش",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function Component() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>نمودار فروش</CardTitle>
                <CardDescription>مرداد - شهریور 1403</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <ChartContainer config={chartConfig}>
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false}/>
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel/>}
                            />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}/>
                        </BarChart>
                    </ChartContainer>
                </ResponsiveContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    <TrendingUp className="h-4 w-4"/>افزایش 5.2 درصدی در این ماه
                </div>
                <div className="leading-none text-muted-foreground">
                    نمودار مجموع فروش در 6 ماه اخیر
                </div>
            </CardFooter>
        </Card>
    )
}
