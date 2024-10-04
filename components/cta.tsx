'use client'
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import AnimatedShinyText from '@/components/ui/shimmer-text';
import TextBlur from '@/components/ui/text-blur';
import { containerVariants, itemVariants } from '@/lib/animation-variants';

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-6xl flex-col gap-2"
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
          className="text-center text-xl font-medium tracking-tighter sm:text-6xl"
          text="AI co-pilot for Engneering Managers"
        />
        {/* <TextBlur
          className="text-center text-xl font-medium tracking-tighter sm:text-6xl"
          text="Engineering Managers"
        /> */}
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto pt-1.5 text-center text-base text-zinc-500 sm:text-2xl"
          text="Engineering managers are often burdened with tasks that pull them away from high-impact initiatives. Now, imagine having a co-pilot to manage scrums, track projects, address ad-hoc queries by learning from your expertise, and handle daily operations—allowing you to concentrate on delivering results."
          duration={0.8}
        />
      </motion.div>

      <TextBlur
        className="mx-auto max-w-[27rem] mt-10 text-center text-xl font-medium tracking-tighter sm:text-3xl"
        text="Reserve Your Spot Now !"
      />

    </motion.div>
  );
}
