import React, { Component } from 'react';
import { useRouter } from 'next/router'
import DetailsContainer from '../container/details';


const Details = () => {
  const router = useRouter()
  const { pid } = router.query
  return <DetailsContainer pid={pid}/>
}

export default Details