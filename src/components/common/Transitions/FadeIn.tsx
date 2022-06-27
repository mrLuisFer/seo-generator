import { motion } from 'framer-motion'

export default function FadeIn({ children }: { children: any }) {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  )
}
