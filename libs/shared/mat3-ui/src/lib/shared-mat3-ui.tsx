import styles from './shared-mat3-ui.module.scss';

/* eslint-disable-next-line */
export interface SharedMat3UiProps {}

export function SharedMat3Ui(props: SharedMat3UiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedMat3Ui!</h1>
    </div>
  );
}

export default SharedMat3Ui;
