import Link from 'next/link'
import React from 'react'
import Heart from '../../../public/assets/icons/Heart.svg'
import Image from 'next/image'
import Favoritos from '@/pages/favoritos'

export const FavoriteButton = () => {
  return (
    <Link href='/favoritos'>
      <Image src={Heart} alt='Favoritos' />
    </Link>
  )
}
