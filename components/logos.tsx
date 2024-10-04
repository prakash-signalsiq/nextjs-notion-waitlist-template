import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

import { containerVariants, itemVariants } from '@/lib/animation-variants';

import TextBlur from './ui/text-blur';

const logos = [
  { href: "https://signalsiq.ai", src: "/signalsiq-logo.svg", alt: "SignalsIQ Logo" },
  // { href: "https://notion.so", src: "/notion.svg", alt: "Notion Logo" },
  // { href: "https://resend.com", src: "/resend.svg", alt: "Resend Logo" },
  // { href: "https://upstash.com", src: "/upstash.svg", alt: "Upstash Logo" },
  // { href: "https://ui.shadcn.com", src: "/shadcn.svg", alt: "shadcn Logo" },
  // { href: "https://vercel.com", src: "/vercel.svg", alt: "Vercel Logo" },
];

export default function Logos() {
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-base text-zinc-300 sm:text-lg"
          text="Built by engineering experts from"
          duration={0.8}
        />
      </motion.div>

      <motion.div>
        <div className='flex flex-row my-3 justify-center'>
          <Image
            src={"/google.png"}
            alt={"Google"}
            width={50}
            height={50}
            className="h-16 w-16 opacity-85 mx-3"
          />
          <Image
            src={"/hotstar.png"}
            alt={"Disney+ Hotstar"}
            width={50}
            height={50}
            className="h-16 w-24 opacity-85 mx-3"
          />
          <Image
            src={"/samsung.svg"}
            alt={"Disney+ Hotstar"}
            width={50}
            height={50}
            className="h-16 w-32 opacity-85 mx-3"
          />
        </div>

      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center mt-5 text-xl font-medium tracking-tight text-zinc-200 md:text-xl"
          text="Powered by"
        />
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mt-4 flex flex-row items-center justify-center gap-4 md:mt-1">
        {logos.map((logo, index) => (
          <Link
            key={index}
            href={logo.href}
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-24 items-center justify-center rounded-lg border bg-zinc-900 p-8 transition-all duration-150 ease-in-out md:hover:border-zinc-700 md:hover:bg-accent">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={50}
              height={50}
              className="h-auto w-16 opacity-85"
            />
            <p className='text-zinc-200 text-2xl font-bold'>SignalsIQ.ai</p>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
