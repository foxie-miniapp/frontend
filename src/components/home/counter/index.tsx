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
      // Only animate if value is not zero
      if (value !== 0) {
        motionValue.set(direction === 'down' ? 0 : value)
      } else {
        // If value is zero, set it directly without animation
        if (ref.current) {
          ref.current.textContent = '0'
        }
      }
    }
  }, [motionValue, isInView, value, direction])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat(locale).format(
          Number(latest.toFixed(0))
        )
      }
    })

    // Set initial value to ensure something is always displayed
    if (ref.current) {
      ref.current.textContent = Intl.NumberFormat(locale).format(0)
    }

    return unsubscribe
  }, [springValue, locale])

  return <span className={className} ref={ref} />
}
