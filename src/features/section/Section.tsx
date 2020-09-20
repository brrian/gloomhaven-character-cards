import React, { FC, MouseEvent } from 'react';
import styles from './Section.module.scss';

interface SectionAction {
  label: string;
  handler: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface SectionProps {
  actions?: SectionAction[];
  heading: string;
}

const Section: FC<SectionProps> = ({ actions, children, heading }) => {
  return (
    <section>
      <header className={styles.header}>
        <h2 className={styles.heading}>{heading}</h2>
        {!!actions?.length && (
          <div className={styles.buttons}>
            {actions.map(({ label, handler }, index) => (
              <button key={index} onClick={handler}>
                {label}
              </button>
            ))}
          </div>
        )}
      </header>
      {children}
    </section>
  );
};

export default Section;
