'use client'

import { useStore } from '../store/useStore'
import ComponentLibrary from '../components/ComponentLibrary'
import Canvas from '../components/Canvas'
import PropertyEditor from '../components/PropertyEditor'
// import CodePreview from '../components/CodePreview'
import CompactCodePreview from '../components/code-preview'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'

export default function Home() {
  const { undo, redo } = useStore()
  return (
    <div className="flex h-screen">
      <ComponentLibrary />
      <div className="flex flex-col flex-grow">
        <div className="flex p-2 gap-2 bg-white">
          <Button onClick={undo}>Undo</Button>
          <Button onClick={redo}>Redo</Button>
          <Link className={buttonVariants({ variant: "outline" })}
            href="/code-preview">Code Preview</Link>
        </div>
        <div className="flex flex-grow">
          <Canvas />
          <PropertyEditor />
        </div>
        {/* <CodePreview /> */}
        <CompactCodePreview />
      </div>
    </div>
  )
}