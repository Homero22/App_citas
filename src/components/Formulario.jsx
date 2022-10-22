import React from 'react'

const Formulario = () => {
  return (
    <div className=' md:w-1/2 lg:w2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-5'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Adminístralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 uppercase	'>
              Nombre Mascota
            </label>
            <input
              id='mascota'
              type="text" 
              placeholder='Nombre de la Mascota'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md'
            />
        </div>
        <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 uppercase	'>
              Nombre Propietario
            </label>
            <input
              id='propietario'
              type="text" 
              placeholder='Nombre del Propietario'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md'
            />
        </div>
        <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase	'>
              Email
            </label>
            <input
              id='email'
              type="email" 
              placeholder='Email Contacto Propietario'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md'
            />
        </div>
        <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 uppercase	'>
              Alta
            </label>
            <input
              id='alta'
              type="date" 
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md'
            />
        </div>
        <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase	'>
              Síntomas
            </label>
            <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounder-md'
            placeholder='Describe los síntomas'
            /> 
            
        </div>

        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold
           hover:bg-indigo-700 cursor-pointer transition-all'
          value='Agregar Paciente'
        />
      </form>
    </div>
  )
}

export default Formulario
