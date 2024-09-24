'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useState } from 'react';

export default function AddJsonDialog() {
  const [jsonName, setJsonName] = useState('');
  const [jsonData, setJsonData] = useState('');

  const handleSave = () => {
    return {
      jsonName,
      jsonData,
    };
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add JSON Data</Button>
      </DialogTrigger>
      <DialogContent className='max-w-4xl'>
        <DialogHeader>
          <DialogTitle>JSON Editor</DialogTitle>
          <DialogDescription>Edit and save your JSON data.</DialogDescription>
        </DialogHeader>

        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label>JSON Name</Label>
            <Input
              value={jsonName}
              placeholder='Enter JSON Name'
              className='rounded-none'
              onChange={(e) => setJsonName(e.target.value)}
            />
          </div>
          <div className='grid gap-2'>
            <Label>JSON Data</Label>
            <CodeMirror
              value={jsonData}
              height='400px'
              extensions={[json()]}
              onChange={(value) => setJsonData(value)}
              className='border shadow-sm'
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type='button' variant='secondary'>
                Close
              </Button>
            </DialogClose>
            <Button disabled={!jsonName || !jsonData} onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
