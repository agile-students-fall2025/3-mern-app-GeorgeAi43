import { useEffect, useState } from 'react'
import axios from 'axios'
import './About.css'

const About = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`).then(res => {
      setData(res.data)
    })
  }, [])

  return (
    <section className="About">
      <h1>{data?.title || 'About Us'}</h1>
      {data?.imageUrl && (
        <img className="About-photo" src={data.imageUrl} alt="About" />
      )}
      {Array.isArray(data?.bio) && (
        <div className="About-bio">
          {data.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
    </section>
  )
}

export default About
