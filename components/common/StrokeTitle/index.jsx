import styles from './index.module.css'

export default function StrokeTitle({ children, strokedText }) {
  return (
    <h2
      before={strokedText}
      className={`${styles['stroked-title']} absolute text-[3.5rem] font-[500] text-[#5333ED] z-0 before:absolute before:bottom-[0.5625rem] before:left-0 before:w-full before:h-full before:text-[6rem] before:leading-[3.3125rem] before:-z-[1] before:content-[attr(before)]`}
    >
      {children}
    </h2>
  )
}
