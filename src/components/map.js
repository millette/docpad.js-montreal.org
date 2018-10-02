// npm
import React from 'react'

export default ({ no }) => !no && (
  <div>
    <h2>Location<br />
      <small>
        La Gare: A beautiful collaborative workspace in the Mile End.
      </small>
    </h2>
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.209998637545!2d-73.5951137!3d45.52597949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9197db3c9d971%3A0x8ac257f1bb298902!2sLa+Gare!5e0!3m2!1sen!2sus!4v1444236563802'
      width='100%'
      height='450'
      style={{ border: 0 }}
      allowfullscreen
      title='Google Map to La Gare'
    />
  </div>
)
