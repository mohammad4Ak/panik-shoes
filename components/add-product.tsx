"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface AddProductProps {
    onProductAdded: () => void;
}

export default function AddProduct({ onProductAdded }: AddProductProps) {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock: ''
    })
    const [notification, setNotification] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setProduct(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the data to your backend
        console.log('Submitting product:', product)
        setNotification(`تمت إضافة ${product.name} إلى المخزون.`)
        // Reset form
        setProduct({ name: '', description: '', price: '', stock: '' })
        // Notify parent component that a product has been added
        onProductAdded()
        // Clear notification after 3 seconds
        setTimeout(() => setNotification(null), 3000)
    }

    return (
        <div dir="rtl">
            {notification && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <span className="block sm:inline">{notification}</span>
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="name">نام</Label>
                    <Input
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="description">توضیحات</Label>
                    <Textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="price">قیمت</Label>
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        min="0"
                        step="0.01"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="stock">تعداد</Label>
                    <Input
                        id="stock"
                        name="stock"
                        type="number"
                        min="0"
                        value={product.stock}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Button type="submit">ثبت</Button>
            </form>
        </div>
    )
}