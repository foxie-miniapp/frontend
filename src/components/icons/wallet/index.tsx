
const Wallet = ({ active }: {
  active: boolean
}) => {
  return (
    <div className={active ? 'text-[#FFF1C4]' : 'text-[#807C71]'}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M6.75 10H10.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21.5833 11H18.9808C17.1965 11 15.75 12.3431 15.75 14C15.75 15.6569 17.1965 17 18.9808 17H21.5833C21.6667 17 21.7083 17 21.7435 16.9979C22.2828 16.965 22.7123 16.5662 22.7477 16.0654C22.75 16.0327 22.75 15.994 22.75 15.9167V12.0833C22.75 12.006 22.75 11.9673 22.7477 11.9346C22.7123 11.4338 22.2828 11.035 21.7435 11.0021C21.7083 11 21.6667 11 21.5833 11Z" stroke="currentColor" stroke-width="1.5" />
        <path d="M21.715 11C21.6373 9.1277 21.3866 7.97975 20.5784 7.17157C19.4069 6 17.5212 6 13.75 6H10.75C6.97876 6 5.09315 6 3.92157 7.17157C2.75 8.34315 2.75 10.2288 2.75 14C2.75 17.7712 2.75 19.6569 3.92157 20.8284C5.09315 22 6.97876 22 10.75 22H13.75C17.5212 22 19.4069 22 20.5784 20.8284C21.3866 20.0203 21.6373 18.8723 21.715 17" stroke="currentColor" stroke-width="1.5" />
        <path d="M6.75 6L10.4855 3.52313C11.5374 2.82562 12.9626 2.82562 14.0145 3.52313L17.75 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M18.7412 14H18.7502" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default Wallet