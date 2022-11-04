import styles from './surface.module.scss';

/* eslint-disable-next-line */
export interface SurfaceProps {
  plus?: number;
  children?: React.ReactNode;
  className?: string;
}

export function Surface(props: SurfaceProps) {
  const plus = props.plus || 0;

  return (
    <div
      className={`${styles[`plus--${plus}`]}
      ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default Surface;
