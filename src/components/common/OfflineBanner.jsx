import { MdOutlineSignalWifiOff } from "react-icons/md";

export default function OfflineBanner() {
  return (
    <div className="fixed w-full bottom-0 bg-red-500 text-white text-center text-sm z-99999">
      You are currently offline{" "}
      <MdOutlineSignalWifiOff size={20} className="inline-block mr-1.5" />
    </div>
  );
}
