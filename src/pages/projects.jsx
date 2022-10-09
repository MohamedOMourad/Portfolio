import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import workout from '@/images/logos/workout.jpg'
import chat from '@/images/logos/chat.png'
import ecom from '@/images/logos/e-commerce.png'
import food from '@/images/logos/food.png'
import JWT from '@/images/logos/JWT.png'

const projects = [
  {
    name: 'Wunderman Thompson',
    description: ' Wunderwomen Platform Women represents 56% of Wunderman Thompson&apos;s Family, in which each single women has contributed one way or another in the success WT has achieved nowadays.',
    logo: JWT,
    link: { href: 'https://jwt-coral.vercel.app/', label: 'JWT' },
    github: { front: 'https://github.com/MustafaElgmal/JWT', back: '' }
  },
  {
    name: 'Workout Tracker App',
    description:
      'Tracking workouts or exercises puts an interesting spin on a regular scheduling app. You can do this with any type of recurring hobby',
    link: { href: 'https://workout-next-r4v0fmhh1-moustafa.vercel.app/', label: 'github.com' },
    logo: workout,
    github: { front: 'https://github.com/MohamedOMourad/workout-app', back: '' }

  },
  {
    name: 'E-Commerce App',
    description:
      'Do you dream of eventually selling things through your full stack application ideas? Consider building an e-commerce app to do so. An e-commerce app is just a digital storefront',
    link: { href: '#', label: 'github.com' },
    logo: ecom,
    github: { front: 'https://github.com/MohamedOMourad/Ecommerce-app', back: '' }

  },
  {
    name: 'Chat app',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: chat,
    github: { front: 'https://github.com/MohamedOMourad/chat-app-frontend', back: 'https://github.com/MohamedOMourad/chat-app-API' }

  },
  {
    name: 'Application for food delivery',
    description:
      'This app able to act as a link between cafes and customers. Restaurant proprietors  able to  display their menu items, as well as their prices.',
    link: { href: 'https://restaurants-app-frontend.vercel.app/', label: 'github.com' },
    logo: food,
    github: { front: 'https://github.com/MohamedOMourad/Restaurants-App-frontend', back: 'https://github.com/MohamedOMourad/Restaurant-app-API' }
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {

  return (
    <>
      <Head>
        <title>Projects - Mohamed Mourad</title>
        <meta
          name="description"
          content="Things I&apos;ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I&apos;ve made trying to put my dent in the universe."
        intro="I&apos;ve worked on many of little projects but these are the ones that I&apos;m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-10 w-10"

                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className=" z-10 mt-6 flex text-sm font-medium text-zinc-400 transition  dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <a href={project.github.front} target="blank" className="mr-10 hover:text-teal-500">{project.github.back ? "front" : "github"}</a>
                <a href={project.github.back} target="blank" className="mr-10 hover:text-teal-500">{project.github.back && "back"}</a>
                <LinkIcon className="h-6 w-6 flex-none" />
                <a href={project.link.href} target="blank" className=" hover:text-teal-500">Take a Look!</a>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
