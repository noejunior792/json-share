import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import JsonDataTable from "./json-data-table";

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
      </Card>
    </div>
  );
}
