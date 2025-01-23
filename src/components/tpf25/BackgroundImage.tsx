import Image from 'next/image'
import clsx from 'clsx'

import backgroundImage from '@/images/tech_podfest_secen.jpg'

export function BackgroundImage25({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div
      className={clsx(
        'absolute inset-0 overflow-hidden bg-indigo-50',
        className,
      )}
    >
      <Image
        className={clsx('absolute top-0 w-full')}
        src={backgroundImage}
        alt=""
        width={918}
        height={1495}
        priority
        unoptimized
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </div>
  )
}
