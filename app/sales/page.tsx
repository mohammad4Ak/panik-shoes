'use client'

import {useState} from 'react'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'
import {Component as CustomBarChart} from '@/components/chart/bar-chart'

export default function SalesOverview() {
    const [topProducts] = useState([
        {id: 1, name: 'اسپرت وان', sales: 50},
        {id: 2, name: 'دواسمال', sales: 45},
        {id: 3, name: 'کالج', sales: 40},
        {id: 4, name: 'نیم بوت', sales: 35},
        {id: 5, name: 'صندلی', sales: 30},
    ])

    return (
        <div className="space-y-4">
            <CustomBarChart/>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle>محصولات پرفروش</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="rtl:text-right">نام محصول</TableHead>
                                <TableHead className="rtl:text-right">فروش</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {topProducts.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.sales}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Button>گزارش کامل</Button>
        </div>
    )
}