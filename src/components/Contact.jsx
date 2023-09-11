import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://api.getform.io/v1/forms/c58af095-94d6-410d-8e57-089eb0a33ff1?token=WVuNGcZsVwDZ67PB4USUH1qUkA77qY99wenF2UDfwB9nbWdZqqUAVCy7xO2X" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contacto</p>
                <p className='text-gray-300 py-4'>// Contacteme para que trabajemos juntos </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nombre' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Mensaje'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Trabajemos juntos</button>
        </form>
    </div>
  )
}

export default Contact