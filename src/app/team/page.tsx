'use client'
import { motion } from 'framer-motion'
import TeamSection from '../components/TeamSection/TeamSection'

const TeamPage = () => {
	return (
		<motion.div
			className='pt-20 md:pt-32 h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 0.5 }}
		>
			<TeamSection />
		</motion.div>
	)
}

export default TeamPage
