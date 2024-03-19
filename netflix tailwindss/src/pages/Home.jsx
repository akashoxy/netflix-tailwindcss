import React from 'react'
import Link from '../components/Link'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Link />
      <Row rowID='1' title='Up Coming' fetchURL={requests.upcoming}/>
      <Row rowID='2' title='Popular' fetchURL={requests.popular}/>
      <Row rowID='3' title='Trending' fetchURL={requests.trending}/>
      <Row rowID='4' title='Top Rated' fetchURL={requests.topRated}/>
      <Row rowID='5' title='Horror' fetchURL={requests.horror}/>
    </>
  )
}

export default Home
