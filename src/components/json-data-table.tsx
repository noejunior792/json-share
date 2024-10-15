import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { JsonData } from "@prisma/client";
import { Link, ShareIcon } from "lucide-react";

export default function JsonDataTable() {
  const [jsonDataList, setJsonDataList] = useState<JsonData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fecthData = async () => {
    try {
      const response = await fetch("/api/json");
      const data = await response.json();

      setJsonDataList(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  if (loading) {
    return "loading...";
  }

  if (!jsonDataList.length) {
    return (
      <div className="text-center text-gray-500 mt-6">
        <p>No data avaliable, please add new entry </p>
      </div>
    );
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>
            <span className="sr-only">Share</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jsonDataList.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.content}</TableCell>
            <TableCell>
              {format(new Date(data.createdAt), "MMMM d, yyyy")}
            </TableCell>
            <Link href={`/${data.id}`}>
              <ShareIcon className="h-4 w-4" />
            </Link>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
