import React from 'react'

const Cart = () => {
  return (
    <main>
      <section className='container min-h-screen grid place-items-center'>
        <div className="image-container relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="shoe banner"
          />
          <div class="overlay"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h4 className="shoe-bannerText text-center w-full font-bold mb-4 text-2xl md:text-3xl lg:text-5xl text-white">
              Hang Tight! We're Fetching Your Cart...
            </h4>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart
