import React from 'react'

const FormsparkEmailCapture = () => {
  return (
    <div className='flex gap-4 w-screen justify-center'>
      <form className='flex gap-4'  action="https://submit-form.com/mZvzIkjH">
            {/* <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required={false} /> */}
            {/* <label htmlFor="email">Email</label> */}
            <input className='px-8 w-80 rounded-full text-black' type="email" id="email" name="email" placeholder="email" required={true} />
   
            <button className='px-8 py-3 tiertaryBg  bg-blue-600 hover:bg-blue-500 rounded-full' type="submit">Get in Touch</button>
        </form>

    </div>
  )
}

export default FormsparkEmailCapture
