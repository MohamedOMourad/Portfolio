import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Mohamed Mourad</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I&apos;m being productive when I&apos;m really just procrastinating. Here&apos;s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Development tools">
            <Tool title="Visual studio code">
              It has all of the fancy IDE features
              everyone else relies on, VS the best text
              editor ever made.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects.
            </Tool>
          </ToolsSection>
          <ToolsSection title="preferred weapons">
            <Tool title="NextJs/React">
              I find Next js an awesome tool to create Web Applications, but you have to be familiar with react and you are looking forward diving more into the React ecosystem,
              in particular server-side rendering.
            </Tool>
            <Tool title="Node Js">
              Node.js shines in real-time web apps that employ push technology over WebSocket.Node&apos;s real-time,
              two-way connections—where the client and server can each initiate communication—enable the freer exchange of data.
            </Tool>
            <Tool title="SQL/PostgreSQL">
              My first time dealing with database was SQL and work on microsoft sql server and it&apos;s help me to get familiar with PostgreSQL, also known as Postgres, is a flexible open-source object relational database management system.
              PostgreSQL can handle a huge variety of use cases, from single machines to data warehouses to web services with many concurrent users.
            </Tool>
            <Tool title="TypeORM">
              My first time dealing with database was SQL and work on microsoft sql server and it&apos;s help me to get familiar with PostgreSQL, also known as Postgres, is a flexible open-source object relational database management system.
              PostgreSQL can handle a huge variety of use cases, from single machines to data warehouses to web services with many concurrent users.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it&apos;s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It&apos;s not the newest kid on the block but it&apos;s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Reflect">
              Using a daily notes system instead of trying to keep things
              organized by topics has been super powerful for me. And with
              Reflect, it&apos;s still easy for me to keep all of that stuff
              discoverable by topic even though all of my writing happens in the
              daily note.
            </Tool>
            <Tool title="SavvyCal">
              Great tool for scheduling meetings while protecting my calendar
              and making sure I still have lots of time for deep work during the
              week.
            </Tool>
            <Tool title="Focus">
              Simple tool for blocking distracting websites when I need to just
              do the work and get some momentum going.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
