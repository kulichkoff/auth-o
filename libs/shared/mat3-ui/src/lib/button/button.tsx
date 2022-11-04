import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  icon?: 'plus';
  type?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
  disabled?: boolean;

  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${styles['btn']} ${styles[`btn--${props.type || 'filled'}`]}`}
      type="button"
    >
      <div className={styles['overlay']}></div>
      <span>{props.children}</span>

      {props.icon && <div></div>}
    </button>
  );
}

export default Button;
