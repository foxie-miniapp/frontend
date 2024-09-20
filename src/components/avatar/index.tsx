import { useState } from 'react'

type AvatarProps = {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  fallback?: string
  className?: string
}

const Avatar = (props: AvatarProps) => {
  const { src, alt, size = 'md', fallback, className } = props
  const [imageSrc, setImageSrc] = useState(src)

  const handleError = () => {
    setImageSrc('')
  }

  return imageSrc ? (
    <img
      src={imageSrc}
      alt={alt}
      className={`rounded-full object-cover object-center ${
        size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
      } ${className}`}
      onError={handleError}
    />
  ) : (
    <div
      className={`rounded-full ${
        size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
      } ${className} flex items-center justify-center bg-[#FEE45A] uppercase text-[#0F010B]`}
    >
      {fallback}
    </div>
  )
}

export default Avatar
