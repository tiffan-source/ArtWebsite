import React from 'react';

function Contact() {
    return (
        <header className='min-h-[calc(100vh-10rem)] bg-contact-cover relative flex flex-col justify-center z-0 text-white gap-y-12'>
            {/* <div className='absolute top-0 left-0 w-full h-full bg-[#000a]'></div> */}
            <p className='text-center text-3xl font-bold'>CONTACT</p>
            <div>
                <div className='flex items-center gap-16 px-8 max-w-6xl2 my-0 mx-auto'>
                    <div className='flex flex-col gap-y-6 grow shrink basis-default'>
                        <h2 className='text-2xl font-bold'>The National Gallery</h2>
                        <div>
                            <h2 className='font-bold mb-4'>Address</h2>
                            <div>
                                <p>Trafalgar Square</p>
                                <p>London</p>
                                <p>WCGN SDN</p>
                            </div>
                        </div>

                        <div>
                            <h2 className='text-lg font-bold mb-4'>E-mail</h2>
                            <div>
                                <p>Trafalgar Square</p>
                                <p>London</p>
                                <p>WCGN SDN</p>
                            </div>
                        </div>
                    </div>

                    <div className='grow shrink basis-default'>
                        <iframe title='Titre' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.079686891052!2d2.361898815122739!3d6.383716326542762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023579d2d4bae77%3A0x42d798ee81569af6!2se-gbavou!5e0!3m2!1sfr!2sbj!4v1655209607656!5m2!1sfr!2sbj"
                            frameborder="0"
                            // width="400"
                            height="450"
                            // style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Contact