import { FC } from 'react'
import styles from './ArtistBanner.module.scss'
import classNames from 'classnames/bind'
import { Verified } from '@/assets/icons'

const cx = classNames.bind(styles)

interface ArtistBannerProps {
  name: string
  avatar: string
  followerNumber?: number
  dominantColor?: string
  monthlyListeners: number
  bgBannerOpacity?: number
  isVerified?: boolean
}

const ArtistBanner: FC<ArtistBannerProps> = (props) => {
  const {
    name,
    monthlyListeners,
    dominantColor,
    bgBannerOpacity,
    isVerified
  } = props

  return (
    <div className={cx('wrapper')}>
      <div className={cx('main')}>
        <div className={cx('avatar')}></div>
        <div className={cx('info')}>
          {isVerified && <div className={cx('verified')}>
            <span className={cx('icon')}>
              <Verified />
              <div className={cx('check-white')}></div>
            </span>
            <span className={cx('text')}>Verified Artist</span>
          </div>}
          <h1 className={cx('name')}>{name}</h1>
          <span className={cx('monthly-listener')}>
            {monthlyListeners?.toLocaleString()} monthly listeners
          </span>
        </div>
      </div>
      <div
        className={cx('blur')}
        style={{ backgroundColor: dominantColor, opacity: bgBannerOpacity }}
      ></div>
    </div>
  )
}

export default ArtistBanner
