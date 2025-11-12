import { columns, Buyer } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Buyer[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Johann Bleza",
      address: "B3B L5 PH9B",
      contact_no: "09693286947",
      orders: 0,
    },
    {
      id: "728ed52f",
      name: "Mahalia Jimenez Maypa",
      address: "B3B L5 PH9B Greenwoods Village Paliparan 1 Dasmarinas, Cavite",
      contact_no: "09693286947",
      orders: 0,
    },
    {
      id: "728ed52f",
      name: "Johann Bleza",
      address: "B3B L5 PH9B",
      contact_no: "09693286947",
      orders: 0,
    },
  ];
}

export default async function OrdersPage() {
  const data = await getData();

  return (
    <div className="py-4 flex flex-col">
      <h1 className="text-4xl font-bold">Buyers</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
