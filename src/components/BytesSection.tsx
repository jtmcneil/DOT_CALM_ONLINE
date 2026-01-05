"use client";

import { useEffect, useState } from "react";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid } from "recharts";

interface BytesSectionProps {
    className?: string;
}

const chartData = [
    { value: 196 },
    { value: 305 },
    { value: 237 },
    { value: 73 },
    { value: 209 },
    { value: 214 },
    { value: 123 },
    { value: 12 },
    { value: 352 },
    { value: 124 },
    { value: 102 },
    { value: 89 },
];
const chartConfig = {
    value: {
        label: "",
        color: "#00ff00",
    },
} satisfies ChartConfig;

export default function BytesSection({ className }: BytesSectionProps) {
    const [data, setData] = useState(chartData);

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prevData) =>
                prevData.map(() => ({
                    value: Math.floor(Math.random() * 300),
                }))
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [data]);

    return (
        <section className={`flex flex-col ${className}`}>
            <div className="flex-1 flex">
                <ChartContainer config={chartConfig} className=" w-full">
                    <BarChart
                        accessibilityLayer
                        data={data.slice(data.length / 2)}
                    >
                        <CartesianGrid strokeDasharray="3" stroke="#00ff00" />
                        <Bar
                            dataKey="value"
                            fill="var(--color-value)"
                            radius={0}
                        />
                    </BarChart>
                </ChartContainer>
            </div>
            <div className="flex-1 flex">
                <ChartContainer config={chartConfig} className=" w-full">
                    <BarChart
                        accessibilityLayer
                        data={data.slice(0, data.length / 2)}
                    >
                        <CartesianGrid strokeDasharray="3" stroke="#00ff00" />
                        <Bar
                            dataKey="value"
                            fill="var(--color-value)"
                            radius={0}
                        />
                    </BarChart>
                </ChartContainer>
            </div>
        </section>
    );
}
