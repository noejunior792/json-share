"use client";

import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { JsonData } from "@prisma/client";

interface SharedJsonProps {
  params: {
    id: string;
  };
}

export default function SharedJson({ params }: SharedJsonProps) {
  const { id } = params;
  const [jsonData, setJsonData] = useState<JsonData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const response = await fetch("/api/json");
        const data = await response.json();

        setJsonData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    };

    fecthData();
  }, [id]);

  if (loading) {
    return <div className="mt-8">Loading...</div>;
  }

  return (
    <div className="mt-8 space-y-8">
      SharedJson
      <h1 className="text-2xl underline font-bold">{jsonData?.content}</h1>
      <CodeMirror
        value={jsonData?.name || ""}
        height="400px"
        className="shadow border-sm"
        editable={false}
        extensions={[json()]}
      />
    </div>
  );
}
