import type { CSSProperties, FC } from 'react';

export type SectionSeparatorProps = {
  height?: CSSProperties['height'];
};

export const SectionSeparator: FC<SectionSeparatorProps> = ({ height = '3.5rem' }) => {
  return (
    <div className="w-full grid grid-cols-4 shadow-[9.33px_9.33px_13.32px_0px_#000000BF] bg-[#EDE2CF]">
      <div style={{ height: height }} className="bg-[#EDE2CF]"></div>
      <div style={{ height: height }} className="bg-[#FF97BF]"></div>
      <div style={{ height: height }} className="bg-[#008648]"></div>
      <div style={{ height: height }} className="bg-[#5C3FFF]"></div>
    </div>
  );
};
