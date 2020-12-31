import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'

const BASE_URL = 'https://dummyapi.io/data/api'
const APP_ID = '5fee01794f76fea2288457f5'

const ProfileView = ({ data }) => {
    const router = useRouter()
    const { profileID } = router.query

    const [loading, setLoading] = useState(false)
    const [data2, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios
            .get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setData(data))
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <Head>
                <title>
                  {data?.firstName}
                </title>
                <meta property="og:image" content={data?.picture}/>
                <meta property="og:description" content={data?.email}/>
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="600" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>User ID: {profileID}</p>
            <br/>
            <div>users list (client rendered) : {JSON.stringify(data2)}</div>
            <br/>
            <div>users data (server rendered) : {JSON.stringify(data)}</div>
            <img src={data?.picture} width="300" height="300"/>
        </>
    )
}

export default ProfileView

export async function getServerSideProps({params}) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await axios.get(`${BASE_URL}/user/${params.profileID}`, { headers: { 'app-id': APP_ID } })
  const { data } = res

  // Pass post data to the page via props
  return { props: { data } }
}
