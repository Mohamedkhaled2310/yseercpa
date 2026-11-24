import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export async function GET() {
  const logo = await readFile(join(process.cwd(), 'public/yseer-logo.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f7f5ef',
          padding: '64px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '28px',
            border: '2px solid #e6e2d6',
            borderRadius: '28px',
            display: 'flex',
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '22px',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '76px',
          }}
        >
          <img
            src={logoSrc}
            alt="يسير للاستشارات المهنية"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
