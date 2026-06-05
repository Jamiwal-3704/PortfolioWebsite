import React from 'react';
import { useEffect } from 'react';
import ProjectBox from './ProjectBox';
import image from '../images/image.png'
import topcourses from '../images/top-courses.png'
import './Project.css';
import weather from '../images/weather.png'
import password from '../images/password.png'
import blog from '../images/blog.png'
import vnote from '../images/vnote.png'
import prepdeck from '../images/prepdeck.png'
import tripunite from '../images/tripunite.png'
import hungryhub from '../images/hungryhub.png'
import Tilt from 'react-parallax-tilt';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import slideAnime from '../LottieFiles/Animation - 1725975411559.json'
import Lottie from "lottie-react";

const Projects = () => {
 
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) 
    }
  }, [emblaApi])


  return (
    <div className='projectContainer' >
    <div className='inline-flex items-center justify-center mx-auto w-[100%]'>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <p className='mt-16 ml-6'>swipe to see</p>
      <Lottie className="mt-16 w-16" animationData={slideAnime} loop={true} /> 
    </div>
      

      <div className='project-head' ref={emblaRef}>
      <div className='project' >
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={topcourses} projectName="Top Courses"/>
          </Tilt>
        </div>       
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={weather} projectName="Weather Details" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={vnote} projectName="v-note" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={image} projectName="Random Gif Generator" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={password} projectName="password Generator" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={blog} projectName="blog website" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={prepdeck} projectName="PrepDeck MCQ Studio" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={tripunite} projectName="TripUnite" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={hungryhub} projectName="HungryHub" />
          </Tilt>
        </div>

        </div>
      </div>

    </div>
  )
}



export default Projects