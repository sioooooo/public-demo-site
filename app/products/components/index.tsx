"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "シンプルTシャツ",
    price: 3980,
    imageUrl: "https://picsum.photos/400",
  },
  {
    id: 2,
    name: "デニムパンツ",
    price: 5980,
    imageUrl: "https://picsum.photos/400",
  },
  {
    id: 3,
    name: "スニーカー",
    price: 9980,
    imageUrl: "https://picsum.photos/400",
  },
  {
    id: 4,
    name: "パーカー",
    price: 7980,
    imageUrl: "https://picsum.photos/400",
  },
];

export const ProductList = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">商品一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="overflow-hidden">
              <div className="relative w-full h-60">
                <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold truncate mb-1">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-3">¥{product.price.toLocaleString()}</p>
                <div className="flex items-center justify-end gap-3">
                  <Heart className="w-5 h-5 text-gray-500 hover:text-red-500 cursor-pointer" />
                  <ShoppingCart className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
