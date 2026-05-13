import { motion } from 'framer-motion';
import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import ParticlesComponent from '@/assets/AnimatedBG';
import { ROUTES } from '@/routes/routes';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import About from './About';

const Home: FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section>
      <div className="absolute inset-0 -z-10">
        <ParticlesComponent />
      </div>

      <div className="mx-auto flex min-h-screen items-center overflow-hidden px-4 md:max-w-7xl md:px-8">
        {/* info */}
        <motion.div
          className="bg-black-glass flex flex-col items-start gap-4 rounded-xl p-6 shadow-xl md:px-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, duration: 1 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-6xl lg:text-7xl">
            &lt;{t('common:HOMEpage.NAME')}/&gt;
          </h2>

          <div className="flex items-center gap-2 text-lg font-bold whitespace-nowrap text-white uppercase md:text-3xl">
            {t('common:HOMEpage.I_WAS')}
            <span className="text-main animate-pulse text-xl drop-shadow-[0_0_15px_main] md:text-4xl">
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

          <p className="max-w-lg leading-7 text-white/50">
            Welcome to my digital world where lines of code meet the art of
            design. Together, let's craft remarkable and high-performance
            digital experiences. (Ahmed Elazap)
          </p>

          <div className="my-4 flex flex-wrap gap-4">
            <Link
              to={ROUTES.WORKS}
              className="border-main bg-main hover:text-main rounded-full border-2 px-4 py-2 text-lg font-light text-black transition duration-150 hover:bg-transparent md:px-6 md:py-4"
            >
              {t('common:HOMEpage.EXPLORE_WORKS')}
            </Link>
            <a
              href={'#about'}
              className="border-main text-main hover:bg-main rounded-full border-2 bg-transparent px-4 py-2 transition duration-150 hover:text-black md:px-6 md:py-4"
            >
              {t('common:HOMEpage.VIEW_RESUME')}
            </a>
          </div>
        </motion.div>
      </div>
      {/* About */}
      <About />
    </section>
  );
};

export default Home;
