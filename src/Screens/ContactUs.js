import React from 'react'
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi'
import Head from '../Components/Head'
import Layout from '../Layout/Layout'

function ContactUs() {
    const ContactData = [
        {
            id: 1,
            title: 'Email Us',
            info: "Interactive",
            icon: FiMail,
            contact: "gbazialij@gmail.com"
        },
        {
            id: 2,
            title: 'Call Us',
            info: "Interactive",
            icon: FiPhoneCall,
            contact: "+33 7 49 00 81  60"
        },
        {
            id: 3,
            title: 'Location',
            info: "Longjumeau, France",
            icon: FiMapPin,
            contact: "gbazialij@gmail.com"
        }
    ]
    return (
        <Layout >
            <div className="container min-height-screen mx-auto px-2 my-6">
                <Head title="Contact Us " />
                <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">

                    {
                        ContactData.map((item) => (
                            <div key={item.id} className="border border-border flex-colo p-10 bg-dry rounded-lg text-center ">
                                <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-primary text-subMain text-2xl">
                                    <item.icon/>
                                </span>
                                <h5 className="font-semibold text-xl mb-2">{item.title}</h5>
                                <p className='mb-0 text-text text-sm leading-7'>
                                    <a href={`mailto:${item.contact}`} className="text-blue-600"> {item.contact}</a> {""}
                                    {item.info}
                                    </p>
                            </div>
                        ))


                    }
                </div>

            </div>
        </Layout>
    )
}

export default ContactUs