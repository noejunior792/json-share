import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import JsonDataTable from './json-data-table';
import AddJsonDialog from './add-json-dialog';

export default function JsonEditor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved JSON Data</CardTitle>
        <CardDescription>View and share your saved JSON data.</CardDescription>
      </CardHeader>
      <CardContent>
        <JsonDataTable />
      </CardContent>
      <CardFooter>
        <AddJsonDialog />
      </CardFooter>
    </Card>
  );
}
