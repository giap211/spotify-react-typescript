import { MainLayoutContext } from '@/contexts/MainLayoutContext'
import { dateFormatConvertor } from '@/utils'
import classNames from 'classnames/bind'
import React, { memo, useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Artists } from '../UIs'
import styles from './SongItem.module.scss'
import { PlayIcon } from '@/assets/icons'
import { SongItemProps } from '../../../types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import durationConvertor from '@/utils/durationConvertor'

const cx = classNames.bind(styles)

const SongItem: React.FC<SongItemProps> = ({
  songName,
  artists,
  thumb,
  duration = 0,
  order,
  isLoading = false,
  dateAdd,
  album,
  isExplicit = false,
  type = 'default',
}) => {
  const { width } = useContext(MainLayoutContext)

  return (
    <div
      className={cx({
        wrapper: true,
        'grid-md': width <= 780 && type !== 'album',
        'is-album-track': type === 'album',
        'is-search-result': type === 'search',
      })}
    >
      {type !== 'search' && (
        <div className={cx('order')}>
          {!isLoading && (
            <>
              <span className={cx('order-number')}>{order}</span>{' '}
              <button className={cx('order-icon')}>
                <PlayIcon />
              </button>
            </>
          )}
        </div>
      )}
      <div className={cx('main')}>
        {type !== 'album' && (
          <div className={cx('thumb')}>
            {!isLoading ? (
              <LazyLoadImage effect="blur" src={thumb} alt={songName} />
            ) : (
              <Skeleton height={'100%'} />
            )}
          </div>
        )}
        <div className={cx('title')}>
          {!isLoading ? (
            <>
              <p className={cx('name')}>{songName}</p>
              {type !== 'artist' && (
                <div className={cx('sub-title')}>
                  {isExplicit && <span className={cx('explicit')}>E</span>}
                  <Artists data={artists} />
                </div>
              )}
            </>
          ) : (
            <>
              <Skeleton borderRadius={50} height={'15px'} width={'200px'} />
              <Skeleton borderRadius={50} height={'10px'} width={'60px'} />
            </>
          )}
        </div>
      </div>
      {type !== 'album' && type !== 'search' && (
        <>
          <div className={cx('album')}>{!isLoading && album}</div>
          {width > 780 && (
            <div className={cx('date-add')}>
              {dateAdd !== '1970-01-01T00:00:00Z' && dateAdd
                ? dateFormatConvertor(dateAdd)
                : ''}
            </div>
          )}
        </>
      )}
      <div className={cx('duration')}>{!isLoading && durationConvertor(duration)}</div>
    </div>
  )
}

export default memo(SongItem)
