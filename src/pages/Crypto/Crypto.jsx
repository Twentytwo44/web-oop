import React from 'react'
import { NavCrypto } from './CryptoComponent/NavCrypto'
import Nav2 from '/src/components/Nav2'
import { TableComponent } from './CryptoComponent/TableComponent'
import { CryptoProvider } from './context/CryptoContext'
import { Filters } from './CryptoComponent/Filters'

export const Crypto = () => {
  return (
    <>
    <CryptoProvider>
        <Nav2/>
        <NavCrypto/>
        <Filters/>
        <TableComponent/>
    </CryptoProvider>
   
    </>
  )
}