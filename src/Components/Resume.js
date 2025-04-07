import React, { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../RESUME 2(SEM-6-SAHIL).pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const Resume = () => {
  const[wid, setwid]=useState(window.innerWidth);

  const handleResize=()=>{
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  return (
    <div className='ResumePage'>

      <Document file={pdf} className="resumeview">
          <Page pageNumber= {1} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1.5}/>
      </Document>

      <a href={pdf} target='_blank' download="Sahil's Resume">
        <button className='lex gap-2 bg-[#431f47] text-xl items-center justify-center p-3 rounded-xl hover:bg-[#d9f02a] hover:text-black font-bold mt-5'  type='button'>
          <h3 className='flex items-center'><BsDownload/>&nbsp; Download Resume</h3>
        </button>
      </a>

    </div>
  )
}

export default Resume