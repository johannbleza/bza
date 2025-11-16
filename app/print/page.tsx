import { Card, CardContent } from "@/components/ui/card";
const PrintPage = () => {
  return (
    <div className="my-4  flex flex-col">
      <h1 className="text-4xl font-bold">Print Shipping</h1>
      <div className="grid grid-cols-2 mt-4">
        <Card>
          <CardContent>
            <p>BZA Dry Trading Goods</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default PrintPage;
