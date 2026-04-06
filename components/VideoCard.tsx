import Image from "next/image";
import { videoProps } from "@/types/video.type";
export default function VideoCard({src,icon}: videoProps){
    return (
        <div className="min-w-[250px] h-[250px] aspect-square rounded-xl overflow-hidden group relative cursor-point">
            <Image
            src={src}
            alt="edit"
            width={180}
            height={180}
            className="w-full h-full object-cover"
            />

            <Image
            src={icon}
            alt="play"
            width={70}
            height={40}
            />

            <div className="absolute inset-0 flex items-center justify-center transition group-hover:opacity-0">
                <Image src={icon} alt="play" width={50} height={50} />
            </div>

            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                <div className="border-2 border-purple-500 px-6 py-6 flex flex-col items-center gap-3">
                    <Image
                    src={icon}
                    alt="play"
                    width={60}
                    height={60}
                    />
                    <span className="text-white font-semibold tracking-wide">
                        PLAY VIDEO
                    </span>
                </div>
            </div>
        </div>
    )
}