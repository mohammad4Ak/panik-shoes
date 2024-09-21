'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductionTracking() {
    const [productionLogs, setProductionLogs] = useState([
        { id: 1, date: '2023-06-01', product: 'Black Stiletto', quantity: 10 },
        { id: 2, date: '2023-06-02', product: 'Red Pumps', quantity: 15 },
        { id: 3, date: '2023-06-03', product: 'Beige Flats', quantity: 20 },
    ])
    const [newLog, setNewLog] = useState({ product: '', quantity: '' })

    const handleAddLog = () => {
        if (newLog.product && newLog.quantity) {
            setProductionLogs([...productionLogs, {
                id: productionLogs.length + 1,
                date: new Date().toISOString().split('T')[0],
                product: newLog.product,
                quantity: parseInt(newLog.quantity) // Ensure quantity is a number
            }])
            setNewLog({ product: '', quantity: '' })
        }
    }


    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Production Tracking</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4 mb-4">
                    <Input
                        placeholder="Product"
                        value={newLog.product}
                        onChange={(e) => setNewLog({ ...newLog, product: e.target.value })}
                    />
                    <Input
                        type="number"
                        placeholder="Quantity"
                        value={newLog.quantity}
                        onChange={(e) => setNewLog({ ...newLog, quantity: e.target.value })}
                    />
                    <Button onClick={handleAddLog}>Add Production Log</Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="rtl:text-right">Date</TableHead>
                            <TableHead className="rtl:text-right">Product</TableHead>
                            <TableHead className="rtl:text-right">Quantity Produced</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {productionLogs.map((log) => (
                            <TableRow key={log.id}>
                                <TableCell>{log.date}</TableCell>
                                <TableCell>{log.product}</TableCell>
                                <TableCell>{log.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}