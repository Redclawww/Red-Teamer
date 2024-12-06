import React from 'react'

const cyberSecurity = [
    {
        src: "cyberDiv.png",
        title: 'Web Penetration Testing',
        description: "Identifies vulnerabilities in web applications to enhance security defenses.",
    },
    {
        src: "cyberDiv.png",
        title: 'Mobile Penetration Testing',
        description: "Assesses mobile apps (Android/IOS) for security flaws and potential exploitation risks.",
    },
    {
        src: "cyberDiv.png",
        title: 'Container Security Assessment',
        description: "Evaluates container vulnerabilities to ensure secure application deployment environments.",
    },
    {
        src: "cyberDiv.png",
        title: 'Active Directory Penetration Testing',
        description: "Identifies AD weaknesses to prevent unauthorized access and privilege escalation.",
    },
]

const BestCyberSecurity = () => {
    return (
        <div className='min-h-screen bg-[#030014] py-10 pt-20' >
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl font-light text-white text-center pt-8'>We Offer Best Cyber Security Services</h1>
                <p className='text-[#918EA0] text-[16px] leading-[24px] font-medium text-center mt-10 md:w-[800px] w-[320px]' >We believe in making today more secure than yesterday. With our resilient cybersecurity programs, you can avert maximum attacks and recover promptly from any that succeeded. Integrate cybersecurity to your organization’s very core with our services.</p>
            </div>
            <div className='grid grid-cols-1 mt-20 gap-10 md:grid-cols-4 md:mt-24 px-10 md:gap-y-28'>
                {cyberSecurity.map((item, index) => (
                    <div className='bg-[#1E1E1F] hover:bg-gradient-to-br hover:from-purple-700 hover:duration-500 hover:to-black  min-h-[320px] rounded-3xl hover:scale-110 transition-all w-[320px] px-8 py-6 flex hover: flex-col text-white text-center'>
                        <img
                            src={item.src}
                            alt=""
                            width={100}
                            className='mt-[-70px] mb-4 flex items-center justify-center mx-auto'
                        />
                        <div className={`flex flex-col gap-y-8 mt-6`}>
                            <h1 className='font-bold text-2xl'>{item.title}</h1>
                            <p className='font-semibold text-sm'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestCyberSecurity