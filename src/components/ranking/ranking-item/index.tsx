import Avatar from '@/components/avatar'

export type RankingItemProps = {
  username: string
  points: number
  rank: number
  firstName?: string
  lastName?: string
  photoUrl?: string
  isMe?: boolean
  isTop1?: boolean
}

const RankingItem = ({
  isMe,
  isTop1,
  rank,
  photoUrl,
  firstName,
  lastName,
  username,
  points
}: RankingItemProps) => {
  return (
    <div
      className={`relative flex items-center gap-3 rounded-2xl px-3 py-4 ${
        isMe === true
          ? 'bg-[linear-gradient(90deg,rgba(255,219,112,0.30)_0%,rgba(139,136,122,0.30)_100%)]'
          : 'bg-[rgba(241,236,212,0.08)]'
      }
      ${isMe === true && 'border border-[#FE9738]'}
      `}
    >
      <Avatar
        src={photoUrl || ''}
        alt={username}
        size="md"
        fallback={
          firstName && lastName ? `${firstName[0]}${lastName[0]}` : username[0]
        }
      />
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-center gap-2">
          <h2 className="truncate text-sm text-[#FFF1C4]">{username}</h2>
          {isMe === true && (
            <div className="rounded bg-[rgba(249,145,33,0.20)] px-2 text-xs font-medium text-[#FF9524]">
              You
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <img src="/icons/logo.svg" className="h-4 w-4" alt="logo" />
          <p className="text-sm font-medium text-[#FFB625]">{points}</p>
        </div>
      </div>
      {isTop1 === true ? (
        <img
          src="/images/ranking/top1.svg"
          alt="top1"
          className="absolute right-3 top-0"
        />
      ) : (
        <h1 className="text-sm font-medium text-[#FFB625]">#{rank}</h1>
      )}
    </div>
  )
}

export default RankingItem
