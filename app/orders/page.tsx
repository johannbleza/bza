import { columns, Orders } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Orders[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      items: "mk tote bag, mk cap plain, mk beltbag reversible",
      amount: 200,
      status: "pending",
      buyer: "Alma Rielo Amayun",
      balance: 100,
      date: "Nov 12, 2025",
    },
    {
      id: "728ed52f",
      items: "Adidas Adizero",
      amount: 100,
      status: "pending",
      buyer: "Mahalia Jimenez Maypa",
      balance: 2000,
      date: "Oct 12, 2025",
    },
    {
      id: "728ed52f",
      items: "mk tote bag, mk cap plain, mk beltbag reversible",
      amount: 200,
      status: "pending",
      buyer: "Alma Rielo Amayun",
      balance: 100,
      date: "Nov 10, 2025",
    },
    // ...
  ];
}

export default async function OrdersPage() {
  const data = await getData();

  return (
    <div className="py-4 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Orders</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
