import InfiniteLoading from "@/images/svg/infinityloading.svg";
import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="inset-0 bg-white flex justify-center items-center">
      <Image className="max-w-[80px]" src={InfiniteLoading} />
    </div>
  );
}
