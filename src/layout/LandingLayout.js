import React from 'react'
import { createUseStyles } from 'react-jss'
import { Outlet } from 'react-router-dom'

const useStyeles = createUseStyles(() => ({
  layout: {
    width: "95%",
    margin: "1rem auto",
    overflowX: 'none'
  }
}))

const LandingLayout = () => {
  const classes = useStyeles()
  return (
    <div className={classes.layout}>
        <Outlet />
    </div>
  )
}

export default LandingLayout