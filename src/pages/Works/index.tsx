import type { Websites } from '@/types';
import { motion } from 'framer-motion';
import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

const Works: FC = () => {
  const { t } = useTranslation();
  const WebSites: Websites[] = [
    {
      link: 'https://lepicurieux.azapdev.workers.dev/',
      img: '/img/works/website.jpg',
      label: t('common:WORKpage.PARAGRAPH1'),
    },
    {
      link: 'https://kllh.azapdev.workers.dev/',
      img: '/img/works/klh.jpg',
      label: t('common:WORKpage.PARAGRAPH2'),
    },
    {
      link: 'https://themightyspiceco.azapdev.workers.dev/',
      img: '/img/works/themightyspiceco.webp',
      label: t('common:WORKpage.PARAGRAPH3'),
    },
    {
      link: 'https://porty.azapdev.workers.dev/',
      img: '/img/works/porty.webp',
      label: t('common:WORKpage.PARAGRAPH4'),
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="my-14 w-full overflow-hidden p-4">
        <div className="my-12 flex flex-col flex-wrap items-start justify-between gap-2 py-18 md:mx-8 md:px-8">
          {/* WEBSITEs */}
          {WebSites.map(({ link, img, label }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              className="border-main my-6 flex w-full flex-col items-start justify-between gap-8 rounded-2xl border-s-4 bg-black p-4 px-4 py-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Left Side (Image + Text) */}
              <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8">
                <img
                  src={img}
                  alt={label}
                  className="h-fit w-80 rounded-2xl object-contain"
                />

                <p className="line-clamp-3 text-center text-sm text-gray-200 md:text-lg">
                  {label}
                </p>
              </div>

              {/* Button */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-main hover:text-main border-main w-full rounded-xl border py-2 text-center font-bold text-white transition duration-200 hover:bg-transparent md:w-70"
              >
                Visit Website
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;
