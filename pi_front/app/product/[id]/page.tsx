"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CartContext } from "@/context/CartContext";
import { getProdutoById } from "@/service/product";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function ProductPage() {
  const [product, setProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para controlar o índice da imagem principal
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProdutoById(id);
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  function handleAddToCart(product: any) {
    addToCart(product);
    router.push("/cart");
  }
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index); // Atualiza a imagem principal com a imagem clicada
  };

  return (
    <>
      <Header />
      <div className="text-gray-700 body-font overflow-hidden">
        <div className="container p-8 my-8 mx-auto bg-white">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-between">
            <div className="lg:w-2/5 w-full flex flex-col items-center">
              {/* Imagem principal */}
              <div className="relative w-full">
                <img
                  alt="ecommerce"
                  className="w-full object-cover object-center border-gray-200"
                  src={`http://localhost:8080${product?.imagens?.[currentImageIndex]?.diretorioDestino}`}
                />
              </div>
              {/* Miniaturas */}
              <div className="w-full mt-4 flex justify-center gap-4">
                {product?.imagens?.map((image: any, index: number) => (
                  <img
                    key={index}
                    src={`http://localhost:8080${image.diretorioDestino}`}
                    alt={`Imagem ${index + 1}`}
                    className={`w-20 h-20 object-cover cursor-pointer border-2 rounded ${index === currentImageIndex
                        ? "border-black"
                        : "border-gray-300"
                      }`}
                    onClick={() => handleImageClick(index)} // Altera a imagem principal ao clicar
                  />
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                MIKE
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.nome}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      fill={
                        index < product?.avaliacao ? "currentColor" : "none"
                      }
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-gray-900"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product?.descricao}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none cursor-pointer"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none cursor-pointer"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none cursor-pointer"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10 cursor-pointer">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $ {product?.preco},99
                </span>
                <button
                  className="flex ml-auto text-white border-0 py-2 px-6 focus:outline-none bg-black rounded transition duration-200 transform hover:scale-102 cursor-pointer"
                  disabled={!product}
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  Comprar agora
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 transition duration-200 transform hover:scale-102 cursor-pointer">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
