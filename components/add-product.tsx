'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function AddProductDialog() {
    const [open, setOpen] = useState(false)
    const [sizes, setSizes] = useState<string[]>([])
    const [newSize, setNewSize] = useState('')

    const handleAddSize = () => {
        if (newSize && !sizes.includes(newSize)) {
            setSizes([...sizes, newSize])
            setNewSize('')
        }
    }

    const handleRemoveSize = (sizeToRemove: string) => {
        setSizes(sizes.filter(size => size !== sizeToRemove))
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        // Handle form submission here
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>افزودن محصول جدید</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]" dir="rtl">
                <DialogHeader>
                    <DialogTitle className="text-right mt-4">افزودن محصول جدید</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-right block">نام کفش</Label>
                        <Input id="name" placeholder="نام کفش را وارد کنید" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="code" className="text-right block">کد محصول</Label>
                        <Input id="code" placeholder="کد محصول را وارد کنید" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="picture" className="text-right block">تصویر محصول</Label>
                        <div className="flex items-center justify-between p-2 border rounded-md bg-background">
                            <span className="text-sm text-muted-foreground">No file chosen</span>
                            <Label htmlFor="picture" className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-md text-sm">
                                Choose File
                            </Label>
                            <Input id="picture" type="file" accept="image/*" className="hidden" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="count" className="text-right block">تعداد موجودی</Label>
                        <Input id="count" type="number" min="0" placeholder="تعداد موجودی را وارد کنید" />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-right block">سایزهای موجود</Label>
                        <div className="flex flex-wrap justify-center gap-2">
                            {sizes.map(size => (
                                <span key={size} className="relative max-w-[70%] rounded-3xl px-2 py-1 bg-[#f4f4f4] dark:text-slate-900 dark:bg-token-main-surface-secondary">
                  {size}
                                    <button type="button" onClick={() => handleRemoveSize(size)} className="text-destructive font-bold">
                    ×
                  </button>
                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <Input
                                value={newSize}
                                onChange={(e) => setNewSize(e.target.value)}
                                placeholder="سایز جدید"
                                className="flex-grow"
                            />
                            <Button type="button" onClick={handleAddSize}>افزودن</Button>
                        </div>
                    </div>

                    <Button type="submit" className="w-full">ثبت محصول</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}