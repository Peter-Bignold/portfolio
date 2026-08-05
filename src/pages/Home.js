import React from 'react';
import CompactProjectLink from 'components/CompactProjectLink.js';
import IconLink from 'components/IconLink.js';
import SkillChip from 'components/SkillChip.js';
import Slideshow from 'components/Slideshow.js';

const Home = () => {
  const socials = [
    {href: 'https://www.linkedin.com/in/peter-bignold-b507171b1/', icon: require('assets/images/home/linkedin1.png'), alt: 'LinkedIn'},
    {href: 'https://github.com/Peter-Bignold', icon: require('assets/images/home/github1.png'), alt: 'GitHub'},
    {href: 'https://www.youtube.com/@noodle_games', icon: require('assets/images/home/youtube1.png'), alt: 'YouTube'},
    {href: 'https://www.artstation.com/peter_bignold', icon: require('assets/images/home/artstation1.png'), alt: 'ArtStation'},
    {href: 'https://noodlegames.itch.io/', icon: require('assets/images/home/itch1.png'), alt: 'itch.io'},
  ];

  const skills = [
    'C', 'C++', 'C#', 'Python', 'Java', 'Haskell', 'Bash / Shell', 'SQL', 'MySQL', 'SQLite', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Git', 'React',
    'Vue', 'Vue Options API', 'Vue Composition API', 'Vuex', 'Redux', 'Node', 'NPM', 'Expo', 'Tailwind', 'Bootstrap', 'PowerBI', 'Logic Apps',
    'Office', 'Unity', 'Unreal Engine 4/5', 'Blueprints', 'Blender', 'GIMP', 'Audacity', 'OpenGL', 'PhysX', 'ElasticSearch', 'DynamoDB', 'Lambda',
    'Cloudfront', 'S3',
  ];

  const featuredProjects = [
    {to: 'games/circuitry', logo: require('assets/images/circuitry/logo1.png'), title: 'Circuitry', meta: '2025 • React Native'},
    {to: 'games/flocking_evolution', logo: require('assets/images/flocking_evolution/logo1.png'), title: 'Flocking Evolution', meta: '2023 • Unity'},
    {to: 'games/space_salvagers', logo: require('assets/images/space_salvagers/logo1.png'), title: 'Super Space Salvagers', meta: '2023 • C++'},
    {to: 'games/mini_racer', logo: require('assets/images/mini_racer/logo1.png'), title: 'Mini Racer', meta: '2022 • Unreal Engine 5'},
    {to: 'games/apogee', logo: require('assets/images/apogee/logo1.png'), title: 'Apogee', meta: '2021 • Unreal Engine 4'},
    {to: 'games/pinata_clicker', logo: require('assets/images/pinata_clicker/logo1.png'), title: 'Pinata Clicker', meta: '2020 • Unreal Engine 4'},
    {to: 'games/misfire', logo: require('assets/images/misfire/logo1.png'), title: 'Misfire', meta: '2019 • Unreal Engine 4'},
  ];

  return (
    <div className="relative flex flex-col bg-slate-950">
      <div className="fixed inset-0 w-full opacity-10">
        <img className="mt-8 w-full animate-fade-in-1" src={require('assets/images/home/helmet1.jpg')} alt="Background"></img>
      </div>

      <div className="relative flex flex-col">
        <div className="mx-[5%] flex flex-col items-center px-[5%] text-center">
          <h1 className="mt-[120px] mb-[10px] text-[50px] font-normal animate-fade-in-1 md:text-[80px]">Peter Bignold</h1>
          <h2 className="text-[20px] font-light text-neutral-300 animate-fade-in-2 md:text-[30px]">Software Engineer &#x2022; Digital Creator &#x2022; Race Driver</h2>
          <div className="flex items-center justify-center animate-fade-in-3">
            {socials.map((social) => (
              <IconLink key={social.href} href={social.href} icon={social.icon} alt={social.alt}></IconLink>
            ))}
          </div>
        </div>

        <div className="mx-[5%] mb-[100px] mt-10 flex flex-row flex-wrap-reverse items-center justify-center gap-x-10 gap-y-8 text-center text-left">
          <img className="h-[325px] w-[325px] rounded-full" src={require('assets/images/home/headshot3.jpg')} alt="Peter Bignold"></img>
          <div className="mb-10 flex max-w-[860px] flex-col items-center px-10 text-center md:items-start md:text-left">
            <h3 className="my-4 text-[40px] font-normal md:text-[55px]">Hey There!</h3>
            <p className="max-w-[820px] text-xl font-light leading-[1.3] md:text-2xl">
              I'm a <b>computer scientist</b> experienced in <b>web</b> and <b>app development</b>,
              striving to create innovative and impactful products. With proficiency
              in modern development frameworks and a strong problem-solving foundation, 
              I'm excited to bring my skills to meaningful projects and collaborate with
              creative teams.
            </p>
          </div>
        </div>

        <div className="mx-[5%] mb-[100px] flex flex-col items-center text-center">
          <h3 className="my-4 text-[40px] font-normal md:text-[55px]">I'm Familiar With...</h3>
          <div className="flex max-w-[1200px] flex-wrap items-center justify-center">
            {skills.map((skill) => (
              <SkillChip key={skill}>{skill}</SkillChip>
            ))}
          </div>
        </div>

        <div className="mx-[5%] mb-[100px] flex flex-col items-center text-center">
          <h3 className="my-4 text-[40px] font-normal md:text-[55px]">Software Development</h3>
          <p className="max-w-[1000px] text-xl font-light leading-[1.3] md:text-2xl">
          During my free time I create apps, games and real-time simulations. I've worked in React Native, UE4, UE5, Unity, and raw C++ for my projects, and upload my prototypes, game jams, and full games to&nbsp;
          <a className="font-semibold text-neutral-300 hover:text-neutral-100" href="https://noodlegames.itch.io/" target="_blank" rel="noreferrer">itch.io</a>
          </p>
          <div className="flex w-full max-w-[1256px] flex-wrap items-stretch justify-center">
            {featuredProjects.map((project) => (
              <CompactProjectLink key={project.to} to={project.to} logo={project.logo} title={project.title} meta={project.meta}></CompactProjectLink>
            ))}
          </div>
        </div>

        <div className="mx-[5%] flex flex-col items-center text-center">
          <h3 className="my-4 text-[40px] font-normal md:text-[55px]">Digital Artwork</h3>
          <p className="max-w-[1000px] text-xl font-light leading-[1.3] md:text-2xl">
          I've practiced 3D vehicle modelling since 2016, combining my interests in motorsports and graphics. Blender is my program of 
          choice for creating models and I use GIMP for textures and editing. My digital artwork can be viewed on&nbsp; 
          <a className="font-semibold text-neutral-300 hover:text-neutral-100" href="https://www.artstation.com/peter_bignold" target="_blank" rel="noreferrer">Artstation</a>
          </p>
        </div>

        <Slideshow/>
      </div>
    </div>
  )
}

export default Home;