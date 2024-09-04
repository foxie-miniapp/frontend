import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { IoHome } from 'react-icons/io5'
import { BsFillPeopleFill } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'
import { PiListStarFill } from 'react-icons/pi'

import { Link } from 'react-router-dom'

type NavigationRoute = {
  route: String
  name: String
  icon: IconType
}

const Bottom = () => {
  const ListNavigation: NavigationRoute[] = [
    {
      route: '/',
      name: 'Home',
      icon: IoHome
    },
    {
      route: '/task',
      name: 'Task',
      icon: PiListStarFill
    },
    {
      route: '/referral',
      name: 'Referral',
      icon: BsFillPeopleFill
    },
    {
      route: '/wallet',
      name: 'Wallet',
      icon: IoWalletOutline
    }
  ]

  const [currentRoute, setCurrentRoute] = useState(ListNavigation[0])
  useEffect(() => {
    const currentPath = window.location.pathname
    const currentRoute = ListNavigation.find(
      (route) => route.route === currentPath
    )
    if (currentRoute) {
      setCurrentRoute(currentRoute)
    }
  }, [])
  return (
    <div className="flex w-full flex-row items-center justify-around py-4">
      {ListNavigation.map((route, index) => {
        return (
          <Link
            to={route.route.toString()}
            key={index}
            onClick={() => setCurrentRoute(route)}
            className="flex flex-col items-center justify-center gap-[2px]"
          >
            <route.icon
              className={` text-3xl ${
                currentRoute.route === route.route
                  ? 'text-white'
                  : 'text-white/50'
              }`}
            />

            <div
              className={`text-sm font-semibold ${
                currentRoute.route === route.route
                  ? 'text-white'
                  : 'text-white/50'
              }`}
            >
              {route.name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Bottom
