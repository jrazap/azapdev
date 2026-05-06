import { motion } from 'framer-motion';
import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import Typewriter from 'typewriter-effect';
import About from './About';

const Home: FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section>
      <div className="mx-auto my-14 grid grid-cols-1 items-start justify-center overflow-hidden px-1 md:max-w-5xl md:items-center md:px-8 lg:h-screen lg:grid-cols-[60%_45%]">
        {/* info */}
        <motion.div
          className="bg-black-glass flex max-w-xl flex-col items-start gap-3 rounded-xl p-6 shadow-xl md:px-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            &lt;{t('common:HOMEpage.NAME')}/&gt;
          </h2>

          <div className="flex items-baseline gap-2 text-lg font-bold whitespace-nowrap text-white uppercase md:ms-8 md:text-3xl">
            {t('common:HOMEpage.I_WAS')}
            <span className="text-main text-xl md:text-4xl">
              <Typewriter
                options={{
                  strings: [
                    t('common:HOMEpage.FRONT_END'),
                    t('common:HOMEpage.WEB_DEVELOPER'),
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  cursor: '|',
                }}
              />
            </span>
          </div>

          <div className="my-4">
            <a
              href={'#about'}
              className="text-main border-main hover:bg-main rounded-3xl border-2 px-8 py-2 text-lg font-bold tracking-wider uppercase transition duration-150 hover:text-white md:text-2xl"
            >
              {t('common:HOMEpage.RESUME')}
            </a>
            <a
              href={'CV/Ahmed Elazap - Frontend Developer.pdf'}
              className="border-main bg-main hover:text-main mx-2 rounded-3xl border-2 px-6 py-1 text-sm font-bold tracking-wider text-white uppercase transition duration-150 hover:bg-transparent md:text-xl"
            >
              Cv
            </a>
          </div>
        </motion.div>

        {/* logo */}
        <motion.img
          src="/img/logo.webp"
          alt=""
          className="order-first mx-auto h-auto w-90 animate-bounce object-contain  md:w-xl lg:order-last"
          loading="lazy"
          fetchPriority="high"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
      {/* Aboute */}
      <About />
    </section>
  );
};

export default Home;
