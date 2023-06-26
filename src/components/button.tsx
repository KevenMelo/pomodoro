import React from 'react';

interface props {
  text: string;
  onClick?: () => void;
  className?: string;
}

export function Button(props: props): JSX.Element {
  return (
    <button className={props.className} onClick={props.onClick}>{props.text}</button>
  );
}
