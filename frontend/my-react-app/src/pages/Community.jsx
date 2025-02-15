import React, { useState } from 'react'
import DiseaseDetection from './DiseaseDetection'
import Reports from './Reports';

function Community() {
  const [value,setValue]=useState("nthing yet");
  return (
    <>
    <DiseaseDetection value={value} setValue={setValue} />
    <Reports value={value}/>
    </>
  )
}

export default Community
