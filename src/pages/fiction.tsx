import React from 'react';
import { CtaButtonModel } from '../components/CtaButton';
import Tile, { TileModel } from '../components/Tile';

let newsletterCta: CtaButtonModel = {
  ctaText: "subscribe",
  ctaLink: "https://sherryyuan.substack.com/",
}
let newsletter: TileModel = {
  title: "Flash Fiction Newsletter",
  description: "Sporadic doses of flash fiction.",
  ctaButton: newsletterCta,
}

let mooncakeCta: CtaButtonModel = {
  ctaText: "read",
  ctaLink: "https://translunartravelerslounge.com/2023/08/15/mooncake-by-sherry-yuan/",
}

let mooncake: TileModel = {
  title: "Mooncake",
  description: "A young werewolf tries to leave a good impression at her boyfriend's family's Mid-Autumn Festival dinner, despite the full moon.",
  timestamp: "Translunar Travelers Lounge #9 (August 2023)",
  ctaButton: mooncakeCta,
}

let bestCroissantsCta: CtaButtonModel = {
  ctaText: "get a copy",
  ctaLink: "https://habitatspress.com/products/habitats-volume-1",
}
let bestCroissants: TileModel = {
  title: "The Best Croissants in This Quadrant of the Universe",
  description: "An intergalactic superhero pursues his passion for baking.",
  timestamp: "Habitats #1 (Spring 2023)",
  ctaButton: bestCroissantsCta,
}

let crowntailCichlidsCta: CtaButtonModel = {
  ctaText: "get a copy",
  ctaLink: "https://snarljournal.square.site/product/pre-order-issue-four-fall-2022/16?cp=true&sa=true&sbp=false&q=false",
}
let crowntailCichlids: TileModel = {
  title: "Crowntail Cichlids",
  description: "A Chinese-Canadian college freshman discovers there’s more to his roommate than meets the eye.",
  timestamp: "Snarl #4 (Fall 2022)",
  ctaButton: crowntailCichlidsCta,
}

let externalProcessorsCta: CtaButtonModel = {
  ctaText: "read",
  ctaLink: "https://lunastationquarterly.com/story/external-processors/",
}
let externalProcessors: TileModel = {
  title: "External Processors",
  description: "A near future where people can purchase additional brain processing power through an app. ",
  timestamp: "Luna Station Quarterly Issue #51 (Fall 2022)",
  ctaButton: externalProcessorsCta,
}

let memoriesInAmberCta: CtaButtonModel = {
  ctaText: "get a copy",
  ctaLink: "https://www.infiniteworldsmagazine.com/store/p/infinite-worlds-8-direct-edition-pre-order",
}
let memoriesInAmber: TileModel = {
  title: "Memories In Amber",
  description: "A race against time to fix a bug in a widely-used memory aide device.",
  timestamp: "Infinite Worlds Issue #8 (Summer 2021)",
  ctaButton: memoriesInAmberCta,
}

let starseedsCta: CtaButtonModel = {
  ctaText: "get a copy",
  ctaLink: "https://www.hadrosaur.com/ExchangeStudents.php",
}
let starseeds: TileModel = {
  title: "Starseeds",
  description: "Reishi waits for her extended family to whisk her away from her dreary life on Earth.",
  timestamp: "Exchange Students Anthology (Summer 2020)",
  ctaButton: starseedsCta,
}

let lsqInterviewCta: CtaButtonModel = {
  ctaText: "read",
  ctaLink: "https://lunastationquarterly.com/issue-051-author-interview-sherry-yuan-and-external-processors/",
}
let lsqInterview: TileModel = {
  title: "Luna Station Quarterly Interview",
  description: "Talking about the ideas behind External Processors.",
  timestamp: "(Fall 2022)",
  ctaButton: lsqInterviewCta,
}

const stories = [
  newsletter,
  mooncake,
  bestCroissants,
  crowntailCichlids,
  externalProcessors,
  memoriesInAmber,
  starseeds,
  lsqInterview,
]



export default function Fiction() {
  return (
    <div className="bg-white pb-8">
      {FictionHeader()}

      <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-start">
          {stories.map((story) => (
            Tile(story)
          ))
          }
        </div>
      </div>
    </div>
  )
}

function FictionHeader() {
  return (
    <div className="bg-indigo-50 p-8 flex flex-row place-content-center">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex text-5xl font-serif pb-12">
          <p>Fiction</p>
        </div>
        <p className="lg:w-3/5 flex text-l text-start leading-loose">
          I've published a few short stories so far, mostly speculative fiction,
          and one of my life goals is to publish a novel.
          To me, programming and fiction writing are symbiotic creative hobbies -
          there are many parallels in the processes of planning a feature or story,
          writing code or narrative, receiving feedback, and revising.
        </p>
      </div>
    </div>
  )
}