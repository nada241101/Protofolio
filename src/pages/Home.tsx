import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '@/sections/hero'

// Lazy Load Section Modules for Code Splitting & Maximum Lighthouse Performance
const About = lazy(() => import('@/sections/about'))
const Education = lazy(() => import('@/sections/education'))
const Projects = lazy(() => import('@/sections/projects'))
const Skills = lazy(() => import('@/sections/skills'))
const Competitions = lazy(() => import('@/sections/competitions'))
const Contact = lazy(() => import('@/sections/contact'))

// Minimalist Glass Loading Spinner Fallback
const SectionLoader: React.FC = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel text-xs font-mono font-semibold text-brand-500">
      <span className="w-4 h-4 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
      Loading Module...
    </div>
  </div>
)

export const Home: React.FC = () => {
  // JSON-LD Structured Data Schema for Person / Engineer
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nada Essam Mohammed Amin',
    jobTitle: 'AI Engineer & Data Analyst',
    url: 'https://github.com/ahes64033',
    email: 'mailto:ahes64033@gmail.com',
    telephone: '+201033689664',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Alexandria',
      addressCountry: 'Egypt',
    },
    almaMater: {
      '@type': 'EducationalOrganization',
      name: 'Kafr El-Sheikh University - Faculty of Artificial Intelligence',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'NLP',
      'Business Intelligence',
      'Power BI',
      'Data Analytics',
      'Flutter Development',
    ],
  }

  return (
    <>
      <Helmet>
        {/* Primary SEO Meta Tags */}
        <title>Nada Essam | AI Engineer & Data Analyst Portfolio</title>
        <meta name="title" content="Nada Essam | AI Engineer & Data Analyst Portfolio" />
        <meta
          name="description"
          content="Official portfolio of Nada Essam Mohammed Amin. AI Engineer, Data Analyst & Business Intelligence Specialist. Kafr El-Sheikh University (Faculty of AI, CGPA 3.41, Grad Project A+)."
        />
        <meta
          name="keywords"
          content="Nada Essam, AI Engineer, Machine Learning, Data Analyst, Business Intelligence, Power BI, Computer Vision, ViTs, RAG, Kafr El-Sheikh University, Alexandria Egypt, Flutter Developer"
        />
        <meta name="author" content="Nada Essam Mohammed Amin" />

        {/* OpenGraph / Facebook Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nada Essam | AI Engineer & Data Analyst Portfolio" />
        <meta
          property="og:description"
          content="AI Engineer specializing in Machine Learning, Business Intelligence, Computer Vision, and RAG architectures."
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nada Essam | AI Engineer & Data Analyst Portfolio" />
        <meta
          name="twitter:description"
          content="Explore enterprise AI platforms, manuscript restoration models, and BI analytics dashboards by Nada Essam."
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      {/* Hero Section (Loaded immediately for instant Paint) */}
      <Hero />

      {/* Lazy-Loaded Lazy Modules wrapped in Suspense */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Education />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Competitions />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </>
  )
}

export default Home
