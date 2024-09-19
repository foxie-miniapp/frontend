import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
  value: number
  direction?: 'up' | 'down'
  className?: string
  locale?: string
}

export default function Counter({
  value,
  direction = 'up',
  className,
  locale = 'en-US'
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100
  })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value)
    }
  }, [motionValue, isInView, value, direction])

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat(locale).format(
            Number(latest.toFixed(0))
          )
        }
      }),
    [springValue, locale]
  )

  return <span className={className} ref={ref} />
}
