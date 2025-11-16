import { DataTable } from "@/components/data-table/data-table";
import { columns } from "./columns";
import { Order } from "@/lib/types/order";

async function getData(): Promise<Order[]> {
  // Fetch data from your API here.

  return [
    {
      items: "Tshirt, Mug",
      buyer: "Alice Johnson",
      amount: 120.5,
      balance: 0,
      status: "paid",
    },
    {
      items: "Notebook (3), Sticker Pack (1)",
      buyer: "Bob Smith",
      amount: 45.0,
      balance: 0,
      status: "shipped",
    },
    {
      items: "Wireless Headphones (1), USB-C Cable (2)",
      buyer: "Carla Reyes",
      amount: 320.0,
      balance: 120.0,
      status: "partial",
    },
    {
      items: "Gift Card",
      buyer: "Dmitri Ivanov",
      amount: 0,
      balance: 0,
      status: "cancelled",
    },
    {
      items: "Water Bottle (1), Cap (1)",
      buyer: "Ella Zhang",
      amount: 89.99,
      balance: 0,
      status: "paid",
    },
    {
      items: "Office Chair (1)",
      buyer: "Faisal Khan",
      amount: 150.0,
      balance: 150.0,
      status: "pending",
    },
    {
      items: "Bluetooth Speaker (1)",
      buyer: "Grace Lee",
      amount: 200.0,
      balance: 0,
      status: "refunded",
    },
    {
      items: "Sneakers (1), Socks (3-pack)",
      buyer: "Hiro Tanaka",
      amount: 75.25,
      balance: 25.25,
      status: "partial",
    },
    {
      items: "Laptop (1)",
      buyer: "Isabella Rossi",
      amount: 999.99,
      balance: 0,
      status: "paid",
    },
    {
      items: "Phone Case (1), Screen Protector (1)",
      buyer: "Jonah Brown",
      amount: 49.5,
      balance: 49.5,
      status: "pending",
    },
  ];
}

export default async function BuyersPage() {
  const data = await getData();

  return (
    <div className="my-4  flex flex-col">
      <h1 className="text-4xl font-bold">Orders</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
