'use client';
import { CardType } from 'types/types';
import DisplayDate from './date';

export default function Card({ title, description, date }: CardType) {
  const handleOnClick = () => {};
  return (
    <div>
      <h2> {title}</h2>
      <p>{description}</p>
      <DisplayDate dateString={date} />
      <div>
        <button onClick={handleOnClick}>Go</button>
      </div>
    </div>
  );
}
