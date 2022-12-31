import {FC} from "react";


type TProps = { name?: string, imgSrc?: string };


export const Avatar: FC<TProps> = ({name, imgSrc}) => {
  const children = imgSrc ? (
    <img
      className={"h-6 w-6"}
      src={imgSrc}
      alt={name || "Avatar"} />
  ) : (
    <span className={"text-xs font-semibold text-white"}>
      {name
        ?.split(" ")
        .map((p) => p.charAt(0).toUpperCase())
        .join("")}
    </span>
  );

  return (
    <div className={"kuttle-gradient w-6 h-6 rounded-full overflow-hidden flex justify-center items-center"}>
      {children}
    </div>
  );
};
