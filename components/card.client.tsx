'use client';
import { CardType } from 'types/types';

export default function Card({ title, description, date }: CardType) {
  const handleOnClick = () => {};
  return (
    <div>
      <h2> {title}</h2>
      <p>{description}</p>
      <time dateTime={date}>{date}</time>
      <div>
        <button onClick={handleOnClick}>Go</button>
      </div>
    </div>
  );
}
