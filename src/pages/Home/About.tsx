import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { t } = useTranslation();
  type Skill = {
    label: string;
    icon: string;
    link: string;
  };
  const skills: Skill[] = [
    {
      label: 'HTML',
      icon: 'akar-icons:html-fill',
      link: '',
    },
    {
      label: 'CSS',
      icon: 'fa6-brands:css3-alt',
      link: '',
    },
    {
      label: 'Sass',
      icon: 'vscode-icons:file-type-scss',
      link: '',
    },
    {
      label: 'Javascript',
      icon: 'cib:javascript',
      link: '',
    },
    {
      label: 'Python',
      icon: 'codicon:python',
      link: '',
    },
    {
      label: 'React.js',
      icon: 'teenyicons:react-outline',
      link: '',
    },

    {
      label: 'Bootstrap',
      icon: 'fa-brands:bootstrap',
      link: '',
    },
    {
      label: 'TailwindCSS',
      icon: 'fa7-brands:tailwind-css',
      link: '',
    },
    {
      label: 'Github',
      icon: 'mage:github',
      link: '',
    },
    {
      label: 'Typescript',
      icon: 'simple-icons:typescript',
      link: '',
    },
    {
      label: 'React Query',
      icon: 'simple-icons:reactquery',
      link: '',
    },

    {
      label: 'Next.js',
      icon: 'teenyicons:nextjs-solid',
      link: '',
    },
    {
      label: 'Vite.js',
      icon: 'file-icons:vite',
      link: '',
    },
    {
      label: 'Redux',
      icon: 'fontisto:redux',
      link: '',
    },
    {
      label: 'Zustand',
      icon: 'devicon:zustand',
      link: '',
    },
    {
      label: 'Figma',
      icon: 'akar-icons:figma-fill',
      link: '',
    },
  ];
  return (
    <>
      <div
        id="about"
        className="mx-auto my-14 grid h-full max-w-6xl grid-cols-1 items-center justify-center gap-5 overflow-hidden bg-black/80 p-4 lg:grid-cols-[70%_30%]"
      >
        {/* info */}
        <div className="flex flex-col items-start gap-6 md:ms-8 md:p-5">
          {/* ABOUT ME */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-main flex items-baseline gap-3 text-4xl font-bold md:text-6xl">
              <span className="h-7 w-2 rounded-3xl bg-white text-white md:h-10 md:text-5xl"></span>
              {t('common:ABOUTpage.ABOUT_ME')}
            </h1>
            <p className="text-sec-title px-5 py-4 sm:px-9">
              {t('common:ABOUTpage.DESCRIPTION')}
            </p>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="flex items-baseline gap-2 text-2xl font-bold text-white">
              <span className="h-5 w-1 rounded-3xl bg-white text-white md:h-7 md:w-1"></span>
              <span className="text-main text-2xl font-bold md:text-3xl">
                {t('common:ABOUTpage.SKILL')}
              </span>
              {t('common:ABOUTpage.TECHNOLOGIES')}
            </h2>
            {/* tec */}
            <div className="sm:grid-cols-3 mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {skills.map((skill, i) => (
                <a
                  key={i}
                  href={skill.link}
                  className="group flex w-fit items-center gap-2"
                >
                  <Icon
                    icon={skill.icon}
                    className="text-gray-300 opacity-50 grayscale-100 group-hover:opacity-100"
                  />

                  <span className="group-hover:text-main text-sm tracking-[1.5px] text-white brightness-50 transition duration-200 group-hover:brightness-125">
                    {skill.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* img */}
        <motion.div
          className="order-first flex items-center justify-center object-contain lg:order-1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/img/me.webp"
            alt=""
            className="flex w-50 justify-center rounded-2xl"
            loading="lazy"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </>
  );
};

export default About;
