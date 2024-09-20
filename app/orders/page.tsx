'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OrderManagement() {
    const [orders, setOrders] = useState([
        { id: 1,date: '1403/05/10', customer: 'خلیل بحران', product: 'اسپرت وان', quantity: 2, status: 'Pending' },
        { id: 2,date: '1403/05/11', customer: 'جلیل بحران', product: 'دواسمال', quantity: 1, status: 'In Production' },
        { id: 3,date: '1403/05/12', customer: 'عاباس چخچی', product: 'کالج', quantity: 1, status: 'Ready for Shipping' },
        { id: 4,date: '1403/05/12', customer: 'جبران خلیل جبران', product: 'کالج', quantity: 1, status: 'Ready for Shipping' },
    ])
    const [searchTerm, setSearchTerm] = useState('')

    const filteredOrders = orders.filter(order =>
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.product.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleStatusChange = (orderId: number, newStatus: string) => {
        setOrders(orders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        ))
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>مدیریت سفارشات</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between mb-4">
                    <Input
                        placeholder="جستجوی سفارش ها ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm"
                    />
                    <Button>افزودن سفارش</Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="rtl:text-right">شماره سفارش</TableHead>
                            <TableHead className="rtl:text-right">نام مشتری</TableHead>
                            <TableHead className="rtl:text-right">نام محصول</TableHead>
                            <TableHead className="rtl:text-right">تعداد</TableHead>
                            <TableHead className="rtl:text-right">تاریخ ثبت</TableHead>
                            <TableHead className="rtl:text-right">وضیعت</TableHead>
                            <TableHead className="rtl:text-right">عملیات</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredOrders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell>{order.product}</TableCell>
                                <TableCell>{order.quantity}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>
                                    <Select
                                        value={order.status}
                                        onValueChange={(value) => handleStatusChange(order.id, value)}
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Pending">ثبت اولیه</SelectItem>
                                            <SelectItem value="In Production">در حال آماده سازی</SelectItem>
                                            <SelectItem value="Ready for Shipping">آماده برای ارسال</SelectItem>
                                            <SelectItem value="Shipped">ارسال شده</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outline" className="mx-2">ویرایش</Button>
                                    <Button variant="destructive" className="mx-2">لغو</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}