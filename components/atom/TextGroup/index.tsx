import { useMemo, FC } from 'react';

// styles

// type
interface TextGroupProps {
  containerStyle?: string;
  title: string;
  data: string[];
}

export const TextGroup: FC<TextGroupProps> = (props) => {
  const { containerStyle, title, data } = props;

  const textList = useMemo(() => {
    return data.map((dat, i) => {
      return <p key={i}>{dat}</p>;
    });
  }, [data]);

  return (
    <div className={containerStyle}>
      <p className='font-bold'>{title}</p>
      {textList}
    </div>
  );
};
