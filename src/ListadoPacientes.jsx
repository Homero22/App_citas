import React from 'react'
import Paciente from './components/Paciente'
function ListadoPacientes() {
  return (
     <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-center text-3xl'>Listado de Pacientes</h2>
      <p className='text-lg  mb-10 text-center'>
          Administra tus {''}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>

    </div>

   
  )
}

export default ListadoPacientes
