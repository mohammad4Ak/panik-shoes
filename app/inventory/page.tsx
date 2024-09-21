'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from 'lucide-react'

export default function InventoryManagement() {
    const [inventory] = useState([
        { id: 1, name: 'اسپرت وان', quantity: 20, threshold: 10 },
        { id: 2, name: 'دواسمال', quantity: 15, threshold: 8 },
        { id: 3, name: 'کالج', quantity: 25, threshold: 12 },
        { id: 4, name: 'نیم بوت', quantity: 5, threshold: 12 },
    ])
    const [searchTerm, setSearchTerm] = useState('')

    const filteredInventory = inventory.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>مدیریت انبار</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between mb-4">
                    <Input
                        placeholder="جستجو در انبار"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm"
                    />
                    <Button>افزودن کفش جدید</Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="rtl:text-right">نام</TableHead>
                            <TableHead className="rtl:text-right">تعداد</TableHead>
                            <TableHead className="rtl:text-right">آستانه مصرف</TableHead>
                            <TableHead className="rtl:text-right">وضعیت</TableHead>
                            <TableHead className="rtl:text-right">اقدام</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredInventory.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.threshold}</TableCell>
                                <TableCell>
                                    {item.quantity <= item.threshold ? (
                                        <span className="flex items-center text-yellow-500">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      اتمام موجودی
                    </span>
                                    ) : (
                                        <span className="text-green-500">موجود در انبار</span>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Button variant="outline" className="mx-2">نوسازی</Button>
                                    <Button variant="destructive" className="mx-2">حذف</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}