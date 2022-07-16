import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CreateAccount from './auth/create_account'

const Home: NextPage = () => {
  return (
   <CreateAccount />
  )
}

export default Home
