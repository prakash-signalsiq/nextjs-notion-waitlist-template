'use client'
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import AnimatedShinyText from '@/components/ui/shimmer-text';
import TextBlur from '@/components/ui/text-blur';
import { containerVariants, itemVariants } from '@/lib/animation-variants';

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming soon!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/logo.svg"
        alt="logo"
        className="mx-auto h-24 w-24"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>


        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-8xl"
          text="AI EM at Work"
        />

        {/* <Typewriter
          options={{
            delay: 10,
            strings: ['No', 'Engineering metrics at finger tips', '', '', 'Tech Enthusiast'],
            autoStart: true,
            loop: true,
            wrapperClassName: '"mt-3 text-center text-xl font-medium tracking-tighter sm:text-3xl',
            cursorClassName: '"mt-3 text-center text-xl font-medium tracking-tighter sm:text-3xl'
          }} /> */}

        <TextBlur
          className="mt-3 text-center text-xl font-medium tracking-tighter sm:text-3xl"
          text="Supercharging Engineering Productivity and Management"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="Join the waitlist to get early access of the product and recieve updates on the progress!"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
