'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProductGrid from "@/components/product-grid"
import {products,products2} from "@/data/productData";

export default function ProductCatalog() {
/*    const [products, setProducts] = useState([
        { id: 1, name: 'اسپرت وان', sizes: '36,37,38,39', color: 'مشکی', quantity: 20 },
        { id: 2, name: 'دواسمال', sizes: '35,36,37,38,39', color: 'قرمز', quantity: 15 },
        { id: 3, name: 'کالج', sizes: '36,37,38,39,40', color: 'آبی', quantity: 25 },
    ])
    const [searchTerm, setSearchTerm] = useState('')

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )*/

    return (
        <Card className="w-full">
            {/*<CardHeader>
                <CardTitle>محصولات</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between mb-4">
                    <Input
                        placeholder="جستجو کفش ها ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm"
                    />
                    <Button>افزودن کفش</Button>
                </div>
                <Table className="text-justify">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="rtl:text-right">ID</TableHead>
                            <TableHead className="rtl:text-right">نام</TableHead>
                            <TableHead className="rtl:text-right">اندازه</TableHead>
                            <TableHead className="rtl:text-right">رنگ</TableHead>
                            <TableHead className="rtl:text-right">تعداد</TableHead>
                            <TableHead className="rtl:text-right">عملیات</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProducts.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.sizes}</TableCell>
                                <TableCell>{product.color}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>
                                    <Button variant="outline" className="mx-2">ویرایش</Button>
                                    <Button variant="destructive" className="mx-2">حذف</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>*/}
            <CardHeader>
                <CardTitle>محصولات</CardTitle>
            </CardHeader>
            <CardContent>
                <ProductGrid products={products2}/>
            </CardContent>
            <CardHeader>
                <CardTitle>سایر پوخ پوسور ها</CardTitle>
            </CardHeader>
            <CardContent>
                <ProductGrid products={products}/>
            </CardContent>

        </Card>

    )
}