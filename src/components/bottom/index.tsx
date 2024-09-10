import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Home from '../icons/home';
import Refferal from '../icons/refferal';
import Task from '../icons/task';
import Wallet from '../icons/wallet';

type NavigationRoute = {
  route: string;
  name: string;
  icon: React.ComponentType<{ active: boolean }>;
};

const Bottom = () => {
  const ListNavigation: NavigationRoute[] = [
    { route: '/', name: 'Home', icon: Home },
    { route: '/task', name: 'Task', icon: Task },
    { route: '/referral', name: 'Referral', icon: Refferal },
    { route: '/wallet', name: 'Wallet', icon: Wallet },
  ];

  const [currentRoute, setCurrentRoute] = useState(ListNavigation[0]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: '0px', width: '25%' });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeRoute = ListNavigation.find((route) => route.route === currentPath);
    if (activeRoute) {
      setCurrentRoute(activeRoute);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const activeIndex = ListNavigation.findIndex((route) => route.route === currentRoute.route);
      const containerWidth = containerRef.current.offsetWidth;
      const tabWidth = containerWidth / ListNavigation.length;

      setIndicatorStyle({
        left: `${activeIndex * tabWidth}px`,
        width: `${tabWidth}px`,
      });
    }
  }, [currentRoute, containerRef]);

  return (
    <div ref={containerRef} className="relative flex w-full flex-row items-center justify-around pb-2">
      <div
        style={indicatorStyle}
        className="absolute top-0 transition-all duration-300 ease-in-out"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="27" viewBox="0 0 104 27" fill="none" preserveAspectRatio="none">
          <g filter="url(#filter0_f_2021_128)">
            <ellipse cx="52" cy="0" rx="34.5" ry="7" fill="url(#paint0_radial_2021_128)" />
          </g>
          <line x1="7.25" y1="0.5" x2="97.25" y2="0.5" stroke="url(#paint1_linear_2021_128)" />
          <defs>
            <filter id="filter0_f_2021_128" x="-2.75" y="-27" width="109" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_2021_128" />
            </filter>
            <radialGradient id="paint0_radial_2021_128" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52) rotate(90) scale(7 34.25)">
              <stop offset="0.309974" stopColor="#FFDB6F" />
              <stop offset="1" stopColor="#FFDB6F" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="paint1_linear_2021_128" x1="7.25" y1="1.5" x2="97.25" y2="1.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FFF1CC" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {ListNavigation.map((route, index) => (
        <Link
          to={route.route}
          key={index}
          onClick={() => setCurrentRoute(route)}
          className="flex w-full flex-col items-center justify-center gap-2 pt-2"
        >
          <route.icon active={currentRoute.route === route.route} />
          <div
            className={`text-xs ${currentRoute.route === route.route ? 'text-[#FFF1C4]' : 'text-[#807C71]'
              }`}
          >
            {route.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Bottom;