import { DataTable } from "@/components/data-table/data-table";
import { columns } from "./columns";
import { Buyer } from "@/lib/types/buyer";

async function getData(): Promise<Buyer[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f-1",
      name: "Johann Bleza",
      address: "B3B L5 PH9B",
      contact_no: "09693286947",
      orders: 0,
    },
    {
      id: "8a3f1c22-2",
      name: "Mahalia Jimenez Maypa",
      address: "Greenwoods Village Paliparan 1, Dasmariñas, Cavite",
      contact_no: "09171234567",
      orders: 2,
    },
    {
      id: "c4b9d7e3-3",
      name: "Carlos Mendoza",
      address: "Unit 12, Malvar St., Makati City",
      contact_no: "09981239876",
      orders: 5,
    },
    {
      id: "d9e2a6b4-4",
      name: "Ana Santos",
      address: "Blk 4 Lot 9, Brgy. San Isidro, Quezon City",
      contact_no: "09334567890",
      orders: 1,
    },
    {
      id: "f1a7b8c9-5",
      name: "Miguel Rivera",
      address: "23 Rizal Ave., Cebu City",
      contact_no: "09781233455",
      orders: 3,
    },
    {
      id: "a2b3c4d5-6",
      name: "Lea Gonzales",
      address: "3F Oakridge Bldg., Mandaue",
      contact_no: "09561239876",
      orders: 4,
    },
    {
      id: "b6c7d8e9-7",
      name: "Rafael Cruz",
      address: "Lot 45, Camella Homes, Tagaytay",
      contact_no: "09051234567",
      orders: 0,
    },
    {
      id: "c1d2e3f4-8",
      name: "Sofia Lopez",
      address: "45 J. P. Rizal St., Iloilo City",
      contact_no: "09191239876",
      orders: 7,
    },
    {
      id: "e5f6a7b8-9",
      name: "Daniel Ortega",
      address: "Unit 5, Horizon Residences, Bacoor",
      contact_no: "09671234500",
      orders: 6,
    },
    {
      id: "f2e3d4c5-10",
      name: "Maria Velasco",
      address: "Poblacion 2, Lipa City, Batangas",
      contact_no: "09451230011",
      orders: 8,
    },
  ];
}

export default async function BuyersPage() {
  const data = await getData();

  return (
    <div className="py-4 flex flex-col">
      <h1 className="text-4xl font-bold">Buyers</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
