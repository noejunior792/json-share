"use client";

import React, { useState } from "react";
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

  const [refreshKey, setRefreshKey] = useState(0);

  const handleSave = async (jsonData: string, jsonName: string) => {
    const response = await fetch("/api/json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: jsonName, content: jsonData }),
    });

    if (response.ok) {
      setRefreshKey((prevKey) => prevKey + 1); 
      console.log("Data successfully added!.");
    } else {
      console.log("Something went wrong!.");
    }
  };

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
          <JsonDataTable key={refreshKey}/>
        </CardContent>
        <CardFooter>
          <AddJsonDialog onSave={handleSave} />
        </CardFooter>
      </Card>
    </div>
  );
}
