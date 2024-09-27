import JsonEditor from '@/components/json-editor'
import React from 'react'

export default function DashboardPage() {
  return (
    <div>
        <div className='my-8'>
            <h1 className='text-3xl font-bold'>Dashboard</h1>
            <p className='text-muted-foreground'>
                Manage your data and share it with others.
                </p>
        </div>
        <JsonEditor />
    </div>
  )
}
