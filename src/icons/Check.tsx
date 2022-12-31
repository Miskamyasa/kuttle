import {FC} from "react";


export const CheckIcon: FC<{fill?: string}> = ({fill = "#000"}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.2071 8.72942C28.5976 9.11994 28.5976 9.75311 28.2071 10.1436L14.2071
        24.1436C13.8166 24.5342 13.1834 24.5342 12.7929 24.1436L5.79289 17.1436C5.40237
        16.7531 5.40237 16.1199 5.79289 15.7294C6.18342 15.3389 6.81658 15.3389 7.20711
        15.7294L13.5 22.0223L26.7929 8.72942C27.1834 8.33889 27.8166 8.33889 28.2071 8.72942Z"
        fill={fill} />
    </svg>
  );
};
