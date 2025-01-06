import "@/style/transStyle.css"
import Image from "next/image"

const people = [
  {
    id:"1",
    name: 'Ali Sabori',
    email: '1.525 g',
    role: 'Deposit',
    imageUrl:
      '/pic/deposit.png',
    lastSeen: '1403/08/11 12:48',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id:"2",
    name: 'reza Rahim',
    email: '526 g',
    role: 'Withdraw',
    imageUrl:
      '/pic/withdraw.png',
    lastSeen: '1403/08/10 22:48',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id:"3",
    name: 'Ali Sabori',
    email: '1.525 g',
    role: 'Deposit',
    imageUrl:
      '/pic/deposit.png',
    lastSeen: '1403/08/11 12:48',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id:"4",
    name: 'reza Rahim',
    email: '526 g',
    role: 'Withdraw',
    imageUrl:
      '/pic/withdraw.png',
    lastSeen: '1403/08/10 22:48',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id:"5",
    name: 'Ali Sabori',
    email: '1.525 g',
    role: 'Deposit',
    imageUrl:
      '/pic/deposit.png',
    lastSeen: '1403/08/11 12:48',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id:"6",
    name: 'reza Rahim',
    email: '526 g',
    role: 'Withdraw',
    imageUrl:
      '/pic/withdraw.png',
    lastSeen: '1403/08/10 22:48',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
]

export default function TransPage() {
  return (
    <ul role="list" className="divide-y w-3/5 mx-auto trans-list" >
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5 border-trans" >
          <div className="flex min-w-0 gap-x-4">
            <Image key={person.id} alt={person.name} src={person.imageUrl} width={64} height={64} className="size-12 flex-none rounded-lg" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-100">{person.name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-300">{person.email}</p>
            </div>
          </div>
          <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-100">{person.role}</p>
            {
              <p className="mt-1 text-xs/5 text-gray-300">
                Date <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
           }
          </div>
        </li>
      ))}
    </ul>
  )
}
