import { FC } from 'react';
import styles from './UnicodeItem.module.css';

interface UnicodeItemProps {
  id: number
  fontSize?: number
}

// const UnicodeItem: FC = (props: UnicodeItemProps) => {
function UnicodeItem (props: UnicodeItemProps) {
  const { id, fontSize = 80 } = props;
  const str = `&#${id};`;
  return (
    <>
      <div className={styles.char} style={{fontSize}} dangerouslySetInnerHTML={{__html: str}} />
      <p className='text-center'><span>{id}</span></p>
    </>
  )
}

export default UnicodeItem
