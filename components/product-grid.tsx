import React, { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NextImage from 'next/image';
import { Product } from "@/data/productData";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProductCardProps {
    product: Product;
    onImageClick: (image: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onImageClick }) => (
    <Card className="overflow-hidden">
        <CardContent className="p-0">
            <div className="relative w-full h-64 cursor-pointer" onClick={() => onImageClick(product.image)}>
                <NextImage
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                    }}
                />
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                    <Badge className="bg-green-500 text-white">{product.discount}٪-</Badge>
                    {product.isNew && <Badge className="bg-red-500 text-white">جدید</Badge>}
                </div>
                <div className="absolute bottom-2 left-2 flex gap-1">
                    <Button size="icon" variant="secondary" className="rounded-full bg-white dark:bg-gray-900 dark:text-white">
                        <ShoppingCart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full bg-white dark:bg-gray-900 dark:text-white">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-sm font-medium mb-2 h-10 overflow-hidden">{product.name}</h3>
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice.toLocaleString()} تومان</span>
                    <span className="text-green-600 font-bold">{product.discountedPrice.toLocaleString()} تومان</span>
                </div>
            </div>
        </CardContent>
    </Card>
);

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div>
            {selectedImage && (
                <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                    <DialogContent>
                        <div className="mt-5"> {/* Added margin-top to move image down */}
                            <NextImage
                                src={selectedImage}
                                alt="Product Image"
                                width={800}
                                height={600}
                                objectFit="contain"
                                className="rounded w-full h-auto"
                            />
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" dir="rtl">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onImageClick={setSelectedImage}/>
                ))}
            </div>
        </div>
    );
}


