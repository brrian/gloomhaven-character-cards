import React, { FC, MouseEvent } from 'react';
import styles from './CardsSection.module.scss';

interface SectionAction {
  label: string;
  handler: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface CardsSectionProps {
  actions?: SectionAction[];
  heading: string;
}

const CardsSection: FC<CardsSectionProps> = ({
  actions,
  children,
  heading,
}) => {
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

export default CardsSection;
