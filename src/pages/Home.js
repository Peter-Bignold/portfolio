import React, {startTransition, useEffect, useRef, useState} from 'react'
import CompactProjectLink from 'components/CompactProjectLink.js'
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
    'C', 'C++', 'C#', 'Python', 'Java', 'Haskell', 'Bash / Shell', 'SQL', 'MySQL', 'SQLite', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Git', 'React',
    'Vue', 'Vue Options API', 'Vue Composition API', 'Vuex', 'Redux', 'Node', 'NPM', 'Expo', 'Tailwind', 'Bootstrap', 'PowerBI', 'Logic Apps',
    'Office', 'Unity', 'Unreal Engine 4/5', 'Blueprints', 'Blender', 'GIMP', 'Audacity', 'OpenGL', 'PhysX', 'ElasticSearch', 'DynamoDB', 'Lambda',
    'Cloudfront', 'S3',
  ]

  const featuredProjects = [
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
      <div className="fixed inset-0 opacity-10">
        <img
          className="h-full w-full object-cover object-center animate-fade-in-1"
          src={require('assets/images/backgrounds/background1.jpg')}
          alt="Background"
        ></img>
      </div>

      <div className="sticky top-0 h-screen overflow-hidden pb-24 animate-fade-in-3">

        <section className="absolute inset-0 flex items-center justify-center px-[5%] py-12" style={getSceneStyle(0)}>
          <div className="flex w-full flex-col items-center text-center gap-6">
            <h1 className="text-5xl font-normal md:text-7xl">Peter Bignold</h1>
            <h2 className="text-xl font-light text-neutral-300 md:text-3xl">Software Engineer &#x2022; Digital Creator &#x2022; Racing Driver</h2>
            <div className="gap-4 flex items-center justify-center flex-wrap">
              {socials.map((social) => (
                <IconLink key={social.href} href={social.href} icon={social.icon} alt={social.alt} large></IconLink>
              ))}
            </div>
          </div>
        </section>

        <section className="absolute inset-0 flex items-center justify-center px-[5%] py-12" style={getSceneStyle(1)}>
          <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-10 text-center md:flex-row md:text-left">
            <img className="h-72 w-72 rounded-full border border-slate-700 object-cover shadow-2xl shadow-black/40 md:h-80 md:w-80" src={require('assets/images/home/headshot3.jpg')} alt="Peter Bignold"></img>
            <div className="flex max-w-3xl flex-col items-center md:items-start">
              <h3 className="my-4 text-4xl font-normal md:text-6xl">Hey There!</h3>
              <p className="text-xl font-light leading-[1.3] md:text-2xl">
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
          <div className="flex w-full max-w-6xl flex-col items-center text-center">
            <h3 className="my-4 text-4xl font-normal md:text-6xl">I'm Familiar With...</h3>
            <div className="mt-6 flex flex-wrap items-center justify-center">
              {skills.map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </div>
          </div>
        </section>

        <section className="absolute inset-0 flex items-center justify-center px-[5%] py-12" style={getSceneStyle(3)}>
          <div className="flex w-full max-w-7xl flex-col items-center text-center">
            <h3 className="mb-2 text-4xl font-normal md:text-6xl">Software Development</h3>
            <p className="max-w-5xl text-xl font-light leading-[1.3] md:text-2xl">
              During my free time I create apps, games and real-time simulations. I've worked in React Native, UE4, UE5, Unity, and raw C++ for my projects, and upload my prototypes, game jams, and full games to&nbsp;
              <a className="font-semibold text-neutral-300 hover:text-neutral-100" href="https://noodlegames.itch.io/" target="_blank" rel="noreferrer">itch.io</a>
            </p>
            <div className="mt-8 flex w-full max-w-7xl flex-wrap items-stretch justify-center">
              {featuredProjects.map((project) => (
                <CompactProjectLink key={project.to} to={project.to} logo={project.logo} title={project.title} meta={project.meta}></CompactProjectLink>
              ))}
            </div>
          </div>
        </section>

        <section className="absolute inset-0 flex items-center justify-center px-[5%] py-12" style={getSceneStyle(4)}>
          <div className="flex w-full max-w-7xl flex-col items-center text-center">
            <h3 className="mb-2 text-4xl font-normal md:text-6xl">Digital Artwork</h3>
            <p className="max-w-5xl text-xl font-light leading-[1.3] md:text-2xl">
              I've practiced 3D vehicle modelling since 2016, combining my interests in motorsports and graphics. Blender is my program of
              choice for creating models and I use GIMP for textures and editing. My digital artwork can be viewed on&nbsp;
              <a className="font-semibold text-neutral-300 hover:text-neutral-100" href="https://www.artstation.com/peter_bignold" target="_blank" rel="noreferrer">Artstation</a>
            </p>
            <div className="mt-8 w-full">
              <Slideshow/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home