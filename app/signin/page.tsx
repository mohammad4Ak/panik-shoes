"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Mail, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically handle the sign-in logic
        console.log('Signing in with:', email, password)
        // For now, we'll just redirect to the dashboard
        router.push('/')
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8" dir="rtl">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <Card className="w-full shadow-lg">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-center mb-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <Package className="h-12 w-12 text-primary" />
                            </motion.div>
                        </div>
                        <CardTitle className="text-2xl sm:text-3xl font-bold text-center text-primary">کفش پانیک</CardTitle>
                        <CardDescription className="text-center text-gray-500 dark:text-gray-400">وارد حساب کاربری خود شوید</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-right">ایمیل</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m.example@mail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="pl-10 pr-3"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2 mt-4">
                                <Label htmlFor="password" className="text-right">رمز عبور</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="pl-10 pr-3"
                                    />
                                </div>
                            </div>
                            <Button className="w-full mt-6 bg-primary hover:bg-primary/90" type="submit">
                                ورود
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button variant="link" className="w-full text-sm text-primary hover:text-primary/90">
                            رمز عبور خود را فراموش کرده‌اید؟
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}