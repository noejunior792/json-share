import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import JsonDataTable from "./json-data-table";
import AddJsonDialog from "./add-json-dialog";

export default function JsonEditor() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Saved Json Data</CardTitle>
          <CardDescription>
            View and share your saved JSON data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <JsonDataTable />
        </CardContent>
        <CardFooter>
          <AddJsonDialog />
        </CardFooter>
      </Card>
    </div>
  );
}
