"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { fetchProducts } from "../utils/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  return (
    <div style={{ padding: "0 20px" }}>
      <Head>
        <title>Discover Our Products</title>
        <link rel="icon" href="/favicon.ico" />
        {/* No need to include external font link as it's loaded locally */}
      </Head>

      <Header />

      <main style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "10px",
            fontFamily: "'Simplon Norm', sans-serif" // Use the locally loaded font
          }}
        >
          Discover Our Products
        </h1>
        <h3
          style={{
            fontSize: "18px",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto", // Center the text
            lineHeight: "1.6",
            fontFamily: "'Simplon Norm', sans-serif" // Apply the Simplon Norm font
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </h3>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <Sidebar />
          {loading ? <p>Loading...</p> : <ProductGrid products={products} />}
        </div>
      </main>

      <Footer />
    </div>
  );
}
