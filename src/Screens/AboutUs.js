import React from 'react'
import Layout from '../Layout/Layout'
import Head from '../Components/Head'

function AboutUs() {
  return (
    <Layout >
      <div className="container min-height-screen mx-auto px-2 my-6">
        <Head title="About us " />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl-grid-cols-2 gap-4 xl-gap-16 items-center">
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                Welcome to my Kinzooo App
              </h3>
              <div className='flex mt-3 text-sm leading-8 text-text'>
                <p>
                  Lorem leçpzjprisihixfyioSKN
                  EKJHFIDSOIZ IERHYI ? EZIRHEIRH RIERY9PIHJqifiqdh
                  izdhy_erhiqdih_thdkisxh dfgkiocihqiotrngiodhqgon
                  ifoinrk tgkjlfb qsf fisqhoibtnkZHUO LIHDUQLNIHCG DIHOIHIEKRK ihjdosiht
                </p>
                <p>
                  Lorem leçpzjprisihixfyioSKN
                  EKJHFIDSOIZ IERHYI ? EZIRHEIRH RIERY9PIHJqifiqdh
                  izdhy_erhiqdih_thdkisxh dfgkiocihqiotrngiodhqgon
                  ifoinrk tgkjlfb qsf fisqhoibtnkZHUO LIHDUQLNIHCG DIHOIHIEKRK ihjdosiht
                </p>
              </div>
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
                <div className='p-8 bg-subMain rounded-lg'>
                  <span className='text-3xl block font-extrabold mt-4'>
                    10K
                  </span>
                  <h4 className='text-lg font-bold mb-1'>Listed Movies</h4>
                  <p className='mb-0 text-text leading-7 text-sm'> 
                  fiieijre eirjeijn roejpajaoj 
                  </p>
                </div>
                <div className='p-8 bg-subMain rounded-lg'>
                  <span className='text-3xl block font-extrabold mt-4'>
                    8K
                  </span>
                  <h4 className='text-lg font-bold mb-1'>Lovely</h4>
                  <p className='mb-0 text-text leading-7 text-sm'> 
                  fiieijre eirjeijn roejpajaoj 
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-10 mg:mt-0'>
              <img 
              src="https://img.nrj.fr/o8CGwJjeu84yS5XHiV6OFBzlIMw=/medias/2021/04/elite-saison-4_6075542fb193d.jpg"
              alt="aboutus" 
              className='w-full h-header hidden xl:block rounded-lg object-cover' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs