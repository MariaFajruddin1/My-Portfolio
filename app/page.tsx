import Link from 'next/link'
import React from 'react'
import NavBar from './components/navBar'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'
import Form from './components/form'
import About from './components/about'

export default function page() {
  return (
    <>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </>
  )
}
