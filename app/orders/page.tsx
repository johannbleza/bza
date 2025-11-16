import { DataTable } from "@/components/data-table/data-table";
import { columns } from "./columns";
import { Item } from "@/lib/types/item";

async function getData(): Promise<Item[]> {
  // Fetch data from your API here.

  return [
    {
      name: "Graphic Tee",
      source: "Shopee",
      retail_price: 350,
      sale_price: 700,
      stock: 12,
    },
    {
      name: "Denim Jacket",
      source: "Lazada",
      retail_price: 1200,
      sale_price: 1800,
      stock: 5,
    },
    {
      name: "Running Shoes",
      source: "Amazon",
      retail_price: 2500,
      sale_price: 3200,
      stock: 8,
    },
    {
      name: "Wireless Earbuds",
      source: "eBay",
      retail_price: 800,
      sale_price: 1500,
      stock: 20,
    },
    {
      name: "Leather Wallet",
      source: "Etsy",
      retail_price: 400,
      sale_price: 900,
      stock: 7,
    },
    {
      name: "Smartwatch",
      source: "Walmart",
      retail_price: 2000,
      sale_price: 2800,
      stock: 4,
    },
    {
      name: "Phone Case",
      source: "AliExpress",
      retail_price: 100,
      sale_price: 250,
      stock: 30,
    },
    {
      name: "Backpack",
      source: "Tokopedia",
      retail_price: 700,
      sale_price: 1300,
      stock: 10,
    },
    {
      name: "Portable Charger",
      source: "MercadoLibre",
      retail_price: 450,
      sale_price: 950,
      stock: 15,
    },
    {
      name: "Sunglasses",
      source: "Flipkart",
      retail_price: 300,
      sale_price: 650,
      stock: 9,
    },
  ];
}

export default async function BuyersPage() {
  const data = await getData();

  return (
    <div className="my-4  flex flex-col">
      <h1 className="text-4xl font-bold">Items</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
