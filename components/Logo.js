import React from 'react'
import Image from 'next/image'
import amazonLogo from '../images/amazon-logo.png'

export default function Logo() {
  return <Image src={amazonLogo} alt="Amazon Logo" />
}
