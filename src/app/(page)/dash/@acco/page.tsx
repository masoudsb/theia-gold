import "@/style/accoStyle.css"
import Image from "next/image"

const people = [
  {
    id:'1',
    name: 'Account Type',
    role: 'Wholesaler',
    imageUrl:'/AT.png',
  },
  {
    id:'2',
    name: 'Stock',
    role: '2875.560 g',
    imageUrl:'/pic/stock.png',
  },
  {
    id:'3',
    name: 'Deposit In Last 30 Day',
    role: '875.500 g',
    imageUrl:'/pic/deposit.png',
  },
  {
    id:'4',
    name: 'Withdraw In Last 30 Day',
    role: '1075.500 g',
    imageUrl:'/pic/withdraw.png',
  },
  {
    id:'5',
    name: 'Transaction Limit In Day',
    role: '300 g',
    imageUrl:'/pic/lock.png',
  },
  {
    id:'6',
    name: 'Account ID Number ',
    role: '1234-4321-5678-8765',
    imageUrl:'/pic/card.png',
  },
]

export default function AccountPage() {
  return (
    <div className=" py-16 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl content-center mx-auto">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl">
          Account Informantion
          </h2>
          <p className="mt-6 text-lg/8 text-gray-200">
          Your general account information can be viewed here.
          </p>
        </div>
        <ul role="list" className="grid gap-x-20 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name} className="acco-li ">
              <div className="flex items-center gap-x-6 mb-4">
                <Image key={person.id} alt={person.name} src={person.imageUrl} width={64} height={64} className="size-16 object-cover rounded-lg" />
                <div className="acco-det">
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-100">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
