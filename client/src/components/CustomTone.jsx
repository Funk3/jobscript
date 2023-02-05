import React from 'react'

export default function CustomTone(){
  return(
    <section className="custom-tone">
    <h3>What tone would you like it to have?</h3>
    <select>
    <option>Default</option>
    <option>Friendly</option>
    <option>Professional</option>
    </select>
    </section>
  )
}