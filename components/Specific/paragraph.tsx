type Props = {
  text: string;
};

export const Paragraph = (props: Props) => {
  return (
    <p>{props.text}</p>
  );
};

