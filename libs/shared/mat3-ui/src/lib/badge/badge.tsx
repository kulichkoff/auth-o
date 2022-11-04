import styles from './badge.module.scss';

/* eslint-disable-next-line */
export interface BadgeProps {
  count?: number;
}

export function Badge(props: BadgeProps) {
  return (
    <div className={styles['badge']}>
      {props.count &&
        <p>
          {props.count}
        </p>
      }
    </div>
  );
}

export default Badge;
