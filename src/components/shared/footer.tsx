import { Container } from "./container";
import Link from "next/link";

export default function Footer() {
    return (
        <div className='min-h-[275px] py-20 bg-[#131632]'>
            <Container className="flex flex-wrap justify-between gap-5">
                <div className="mx-auto md:mx-0 text-center md:text-left">
                    <Link href="/" className="max-w-[200px] flex-shrink-0 font-bold text-3xl text-white">
                        <span className="text-[#ff3f81]">E</span>truend<span className="text-[#ff3f81]">E</span>
                    </Link>

                    <p className="text-[16px] md:text-[20px] text-white font-semibold">
                        Modern web development focused on clarity and performance. <br />

                    </p>

                    <p className="text-[14px] md:text-[16px] text-white/70 font-semibold mt-2">
                        Based in Estonia · Working worldwide
                    </p>
                </div>
                <div className=" text-white text-center mx-auto md:mx-0 md:text-right">
                    <div className="">
                        <span className="font-semibold">
                            +372 5364 5159
                        </span>
                        <br />
                        Mon–Fri · 10:00–20:00 (EET)
                    </div>


                    <a href="mailto:etruendewebstudio@gmail.com" className="font-semibold mt-10">
                        etruendewebstudio@gmail.com
                    </a>

                    <p className="text-white/70 text-sm">
                        Official contact email
                    </p>

                    <p className="mt-2">
                        EtruendE - Independent Web Development Studio
                    </p>
                </div>
            </Container>
        </div>
    );
}