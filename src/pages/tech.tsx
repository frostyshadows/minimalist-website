import React from 'react';
import { CtaButtonModel } from '../components/CtaButton';
import Tile, { TileModel } from '../components/Tile';
import LinkWithIcon, { LinkWithIconModel } from '../components/LinkWithIcon';

let mediumCta: CtaButtonModel = {
  ctaText: "read it",
  ctaLink: "https://medium.com/@sherryyuan",
}
let mediumBlog: TileModel = {
  title: "Medium Blog",
  description: "My articles cover Android development, Kotlin, mobile interviews, and tech career. I've been published in Droidcon and Android Weekly.",
  ctaButton: mediumCta,
}

let emomTimerCta: CtaButtonModel = {
  ctaText: "get it on google play",
  ctaLink: "https://play.google.com/store/apps/details?id=com.sherryyuan.emomtimer&hl=en_US&gl=US",
}
let emomTimer: TileModel = {
  title: "EmomTimer",
  description: "Easy-to-use app allowing you to create EMOM workouts and time them.",
  ctaButton: emomTimerCta,
}

let coffeeAndCodingCta: CtaButtonModel = {
  ctaText: "listen",
  ctaLink: "https://coffeeandcodingpod.com/s1-e8-8-working-with-internal-libraries-why-theyre-useful-writing-open-source-software-dependency-injection-declarative-ui-frameworks-with-sherry-yuan/",
}
let coffeeAndCoding: TileModel = {
  title: "Coffee & Coding Interview",
  description: "I discuss working with internal libraries, dependency injection, and declarative UI frameworks.",
  timestamp: "Coffee & Coding Podcast S1E8 (Summer 2020)",
  ctaButton: coffeeAndCodingCta,
}

let tapiaCta: CtaButtonModel = {
  ctaText: "read event description",
  ctaLink: "https://tapia.harmonyapp.com/schedule/friday-september-18-2020/130pm-215pm/fueling-your-career-with-coffee-chats/",
}
let tapia: TileModel = {
  title: "TAPIA Conference Workshop",
  description: "An early-career workshop with tips on how to Fuel Your Career With Coffee Chats.",
  timestamp: "Fall 2020",
  ctaButton: tapiaCta,
}

const projects = [
  mediumBlog,
  emomTimer,
  coffeeAndCoding,
  tapia,
]

let androidWeekly: LinkWithIconModel = {
  linkText: "Android Weekly newsletter",
  linkUrl: "https://androidweekly.net/",
  icon: "/assets/icon-feed.png",
}
let kotlinWeekly: LinkWithIconModel = {
  linkText: "Kotlin Weekly newsletter",
  linkUrl: "http://www.kotlinweekly.net/",
  icon: "/assets/icon-feed.png",
}
let swlw: LinkWithIconModel = {
  linkText: "Software Leed Weekly newsletter",
  linkUrl: "https://softwareleadweekly.com/",
  icon: "/assets/icon-feed.png",
}
let androidSchool: LinkWithIconModel = {
  linkText: "Yelp Android School repo",
  linkUrl: "https://github.com/Yelp/android-school",
  icon: "/assets/icon-github.png",
}

const resources = [
  androidWeekly,
  kotlinWeekly,
  swlw,
  androidSchool,
]

export default function Tech() {
  return (
    <div className="bg-white pb-8">
      {TechHeader()}

      <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start">
          {projects.map((project) => (
            Tile(project)
          ))
          }
        </div>
        {TechResources()}
      </div>
    </div>
  )
}

function TechHeader() {
  return (
    <div className="bg-indigo-50 p-8 flex flex-row place-content-center">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex text-5xl font-serif pb-12">
          <p>Tech</p>
        </div>
        <p className="lg:w-3/5 flex text-l text-start leading-loose">
          I started programming in college. My interest in technology began when the first iPhone came out and
          I discovered mobile gaming. I was lucky to land an Android engineering position for my first co-op
          placement in 2017, where I learned Kotlin 1.0 and participated in upgrading RxJava from 1 to 2 and
          Dagger from 1 to 2. I've focused on Android ever since.
          My favorite way to keep learning is through writing guides and tutorials for the developer community.
        </p>
      </div>
    </div>
  )
}

function TechResources() {
  return (
    <div className="p-8">
      <div className="flex text-4xl font-serif pb-4">
        <div>
          <p>Resources</p>
          <div className="h-4 ml-2 -mr-2 -mt-4 bg-indigo-200" />
        </div>
      </div>
      <p className="w-3/5 flex text-l text-start leading-loose italic">
        My favorite resources for learning and staying on top of software engineering.
      </p>
      <div className="grid grid-cols-1 items-start">
        {resources.map((resource) => (
          LinkWithIcon(resource)
        ))
        }
      </div>
    </div>
  )
}