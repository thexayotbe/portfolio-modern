import Ripple from "@/components/ui/ripple";
import SparklesText from "./sparkles-text";

const Loading = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-grayAccent md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-white">
        <div className="flex justify-center">
          <SparklesText text="Loading..." />
        </div>
      </p>
      <Ripple />
    </div>
  );
};

export default Loading;
