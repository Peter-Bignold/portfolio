import React, {startTransition, useEffect, useRef, useState} from 'react'
import ProjectCardCompact from 'components/ProjectCardCompact.js'
import IconLink from 'components/IconLink.js'
import SkillChip from 'components/SkillChip.js'
import Slideshow from 'components/Slideshow.js'

const SCENE_COUNT = 5
const SCENE_STEP = 1.2
const SCENE_HOLD_RANGE = 0.24
const SCENE_FADE_RANGE = 0.34
const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const Home = () => {
  const homeRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const socials = [
    {href: 'https://www.linkedin.com/in/peter-bignold-b507171b1/', icon: require('assets/images/home/linkedin1.png'), alt: 'LinkedIn'},
    {href: 'https://github.com/Peter-Bignold', icon: require('assets/images/home/github1.png'), alt: 'GitHub'},
    {href: 'https://www.youtube.com/@noodle_games', icon: require('assets/images/home/youtube1.png'), alt: 'YouTube'},
    {href: 'https://www.artstation.com/peter_bignold', icon: require('assets/images/home/artstation1.png'), alt: 'ArtStation'},
    {href: 'https://noodlegames.itch.io/', icon: require('assets/images/home/itch1.png'), alt: 'itch.io'},
  ]

  const skills = [
    'JavaScript', 'C', 'C++', 'C#', 'Python', 'Java', 'SQL', 'MySQL', 'SQLite', 'PHP', 'HTML', 'CSS', 'Git', 'OAuth 2', 'React',
    'Vue 2', 'Vue 3', 'Vuex', 'Redux', 'Node', 'NPM', 'Expo', 'Tailwind', 'Bootstrap', 'Unity', 'UE5', 'Davinci Resolve', 'Blender', 
    'GIMP', 'Audacity', 'OpenGL', 'PhysX', 'ElasticSearch', 'DynamoDB', 'Lambda', 'Cloudfront', 'S3', 'Typesense'
  ]

  const featuredProjects = [
    {to: 'projects/trackfest', logo: require('assets/images/trackfest/logo1.png'), title: 'Trackfest', meta: '2026 • Vue + Strapi'},
    {to: 'projects/circuitry', logo: require('assets/images/circuitry/logo1.png'), title: 'Circuitry', meta: '2025 • React Native'},
    {to: 'projects/flocking_evolution', logo: require('assets/images/flocking_evolution/logo1.png'), title: 'Flocking Evolution', meta: '2023 • Unity'},
    {to: 'projects/space_salvagers', logo: require('assets/images/space_salvagers/logo1.png'), title: 'Super Space Salvagers', meta: '2023 • C++'},
    {to: 'projects/mini_racer', logo: require('assets/images/mini_racer/logo1.png'), title: 'Mini Racer', meta: '2022 • Unreal Engine 5'},
    {to: 'projects/apogee', logo: require('assets/images/apogee/logo1.png'), title: 'Apogee', meta: '2021 • Unreal Engine 4'},
    {to: 'projects/pinata_clicker', logo: require('assets/images/pinata_clicker/logo1.png'), title: 'Pinata Clicker', meta: '2020 • Unreal Engine 4'},
    {to: 'projects/misfire', logo: require('assets/images/misfire/logo1.png'), title: 'Misfire', meta: '2019 • Unreal Engine 4'},
  ]

  useEffect(() => {
    let frameId = null

    const updateSceneProgress = () => {
      frameId = null

      if (!homeRef.current) {
        return
      }

      const rect = homeRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const maxScroll = (SCENE_COUNT - 1) * SCENE_STEP * viewportHeight
      const relativeScroll = clamp(-rect.top, 0, maxScroll)

      startTransition(() => {
        setScrollProgress(relativeScroll / viewportHeight)
      })
    }

    const requestSceneUpdate = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(updateSceneProgress)
    }

    requestSceneUpdate()
    window.addEventListener('scroll', requestSceneUpdate, {passive: true})
    window.addEventListener('resize', requestSceneUpdate)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', requestSceneUpdate)
      window.removeEventListener('resize', requestSceneUpdate)
    }
  }, [])

  const getSceneStyle = (sceneIndex) => {
    const sceneCenter = sceneIndex * SCENE_STEP
    const distance = scrollProgress - sceneCenter
    const motionDistance = Math.sign(distance) * Math.max(Math.abs(distance) - SCENE_HOLD_RANGE, 0)
    const distanceFromHold = Math.max(Math.abs(distance) - SCENE_HOLD_RANGE, 0)
    const normalizedDistance = distanceFromHold / SCENE_FADE_RANGE
    const opacity = clamp(1 - normalizedDistance, 0, 1)

    return {
      opacity,
      transform: `translateY(${motionDistance * -56}px) scale(${1 - Math.min(Math.abs(motionDistance) * 0.03, 0.03)})`,
      pointerEvents: opacity > 0.6 ? 'auto' : 'none',
    }
  }

  return (
    <div ref={homeRef} className="relative bg-slate-950" style={{height: `${((SCENE_COUNT - 1) * SCENE_STEP + 1) * 100}vh`}}>
      <div className="fixed inset-0 opacity-10 pointer-events-none select-none">
        <img
          className="h-full w-full object-cover object-center animate-fade-in-1"
          src={require('assets/images/backgrounds/background1.jpg')}
          alt=""
        />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden pb-24 animate-fade-in-3">

        <section className="absolute inset-0 flex items-center justify-center px-[5%] py-12" style={getSceneStyle(0)}>
          <div className="flex w-full flex-col items-center text-center gap-6">
            <h1 className="text-5xl xl:text-7xl font-normal">Peter Bignold</h1>
            <h2 className="hidden md:block text-2xl xl:text-3xl font-light text-neutral-300 ">
              Software Engineer &#x2022; Digital Creator &#x2022; Racing Driver
            </h2>
            <h2 className="md:hidden text-2xl xl:text-3xl font-light text-neutral-300 ">
              Engineer &#x2022; Creator &#x2022; Driver
            </h2>
            <div className="gap-4 flex items-center justify-center flex-wrap">
              {socials.map((social) => (
                <IconLink 
                  key={social.href} 
                  href={social.href} 
                  icon={social.icon} 
                  alt={social.alt} 
                  large
                />
              ))}
            </div>
          </div>
        </section>

        <section className="absolute inset-0 flex items-center justify-center px-[5%] py-12" style={getSceneStyle(1)}>
          <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-8 text-center md:flex-row md:text-left">
            <img className="h-64 w-64 xl:h-80 xl:w-80 rounded-full border border-slate-700 object-cover shadow-2xl shadow-black/40" src={require('assets/images/home/headshot3.jpg')} alt="Peter Bignold"></img>
            <div className="flex max-w-3xl flex-col items-center md:items-start gap-4">
              <h3 className="text-5xl xl:text-6xl font-normal">Hey There!</h3>
              <p className="text-lg xl:text-2xl font-light">
                I'm a <b>computer scientist</b> experienced in <b>web</b> and <b>app development</b>,
                striving to create innovative and impactful products. With proficiency
                in modern development frameworks and a strong problem-solving foundation,
                I'm excited to bring my skills to meaningful projects and collaborate with
                creative teams.
              </p>
            </div>
          </div>
        </section>

        <section className="absolute inset-0 flex items-center justify-center px-[5%] py-12" style={getSceneStyle(2)}>
          <div className="flex w-full max-w-6xl flex-col items-center text-center gap-4">
            <h3 className="text-4xl xl:text-6xl font-normal">I'm Familiar With...</h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {skills.map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </div>
          </div>
        </section>

        <section className="absolute inset-0 flex items-center justify-center px-[5%] py-12" style={getSceneStyle(3)}>
          <div className="flex w-full max-w-7xl flex-col items-center text-center gap-2 xl:gap-4">
            <h3 className="text-4xl xl:text-6xl font-normal">Software Development</h3>
            <p className="max-w-5xl text-lg xl:text-2xl font-light">
              During my free time I create apps, games and real-time simulations. I've worked in React Native, UE4, UE5, Unity, and raw C++ for my projects, and upload my prototypes, game jams, and full games to&nbsp;
              <a className="font-semibold text-neutral-300 hover:text-neutral-100" href="https://noodlegames.itch.io/" target="_blank" rel="noreferrer">itch.io</a>
            </p>
            <div className="mt-2 flex w-full max-w-7xl flex-wrap items-stretch justify-center gap-2 overflow-hidden">
              {featuredProjects.map((project, index) => (
                <ProjectCardCompact 
                  key={project.to} 
                  to={project.to} 
                  logo={project.logo} 
                  title={project.title}
                  meta={project.meta}
                  className={index > 3 ? 'hidden md:flex' : ''}/>
              ))}
            </div>
          </div>
        </section>

        <section className="absolute inset-0 flex items-center justify-center px-[5%] py-12" style={getSceneStyle(4)}>
          <div className="flex w-full max-w-7xl flex-col items-center text-center gap-2 xl:gap-4">
            <h3 className="text-4xl xl:text-6xl font-normal">Digital Artwork</h3>
            <p className="max-w-5xl text-lg xl:text-2xl font-light">
              I've practiced 3D vehicle modelling since 2016, combining my interests in motorsports and graphics. Blender is my program of
              choice for creating models and I use GIMP for textures and editing. My digital artwork can be viewed on&nbsp;
              <a className="font-semibold text-neutral-300 hover:text-neutral-100" href="https://www.artstation.com/peter_bignold" target="_blank" rel="noreferrer">Artstation</a>
            </p>
            <div className="mt-2 w-full">
              <Slideshow/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home