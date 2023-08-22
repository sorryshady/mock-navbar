import React, { useEffect, useState } from 'react'
import styles from './Dropdown.module.css'
import renters from '../images/renters.jpg'
import properties from '../images/properties.png'
const Dropdown = ({ type }) => {
  const [src, setSrc] = useState(null)
  useEffect(() => {
    if (type === 'properties') {
      setSrc(properties)
    } else {
      setSrc(renters)
    }
  }, [type])

  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <p className={`${styles.secondText} ${styles.heading}`}>How it Works</p>
        <p className={styles.regText}>Overview</p>
        <p className={styles.regText}>
          {type === 'properties' ? 'Resources' : 'FAQs'}
        </p>
        <p className={styles.regText}>Blogs</p>
      </section>
      <section className={styles.products}>
        <p className={`${styles.secondText} ${styles.heading}`}>Products</p>
        <div>
          <p className={styles.regText}>Jetty Deposit</p>
          <p className={`${styles.secondText} ${styles.subText}`}>
            The security deposit replacement.
          </p>
        </div>
        <div>
          <p className={styles.regText}>Jetty Rent</p>
          <p className={`${styles.secondText} ${styles.subText}`}>
            The flexible rent payment program.
          </p>
        </div>
        <div>
          <p className={styles.regText}>Jetty Credit</p>
          <p className={`${styles.secondText} ${styles.subText}`}>
            Build credit by paying rent.
          </p>
        </div>
        <div>
          <p className={styles.regText}>Jetty Protect</p>
          <p className={`${styles.secondText} ${styles.subText}`}>
            Modern renters insurance.
          </p>
        </div>
        <div className={`${styles.secondText} ${styles.cta} ${styles.heading}`}>
          <p>
            {type === 'properties'
              ? 'Jetty for your property?'
              : 'Already a member?'}
          </p>
          <button>{type === 'properties' ? 'Request Demo' : 'Sign In'}</button>
        </div>
      </section>
      <section className={styles.img}>
        <img src={src} alt={`${type} image`} />
      </section>
    </div>
  )
}

export default Dropdown
