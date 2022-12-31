import {BellRing} from "../../icons/BellRing";
import {Avatar} from "../avatar";
import {Logo} from "../logo";


export const Header: React.FC = () => {
  return (
    <div className="bg-blueDark flex justify-between items-center p-3">
      <Logo />
      <div className={"flex items-center gap-3 pr-1.5"}>
        <BellRing
          size={24}
          fill="#fff"
          ringing={false} />
        <Avatar name="John Smith" />
      </div>
    </div>
  );
};
