import Image from "next/image"

const callouts = [
  {
    name: '',
    description: 'Account Balance',
    imageSrc: "/AB.png",
    imageAlt: 'Account Balance',
    href: '#',
  },
  {
    name: '',
    description: 'Important Resource Value',
    imageSrc: '/IRV.png',
    imageAlt: 'Important Resource Value.',
    href: '#',
  },
  {
    name: '',
    description: 'Account Type',
    imageSrc: '/AT.png',
    imageAlt: 'Account Type.',
    href: '#',
  },
]

export default function dashPage() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none ">
          <h2 className="text-2xl font-bold text-slate-100">General Information</h2>

          <div className="mt-28 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <Image
                  key={callout.name}
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  width={160} 
                  height={160}
                  className="w-3/5 rounded-lg object-cover group-hover:opacity-75  bg-transparent justify-self-center"
                />
                <h3 className="mt-6 text-sm text-slate-100">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-slate-100">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
