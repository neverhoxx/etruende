import { Container } from "./container";
import Link from "next/link";

export default function Footer() {
    return (
        <div className='h-[275px] py-20 bg-[#131632]'>
            <Container className="flex flex-wrap">
                <div className="w-1/2">
                    <Link href="/" className="max-w-[200px] flex-shrink-0 font-bold text-3xl text-white">
                        <span className="text-[#ff3f81]">E</span>truend<span className="text-[#ff3f81]">E</span>
                    </Link>

                    <p className="text-[16px] md:text-[20px] text-white font-semibold">
                        Premium web development for growing brands.
                    </p>
                </div>
                <div className="w-1/2 text-white text-right">
                    <div className="">
                        <span className="font-semibold">
                            +372 5364 5159
                        </span>
                        <br />
                        Mon–Fri · 10:00-20:00
                    </div>


                    <div className="font-semibold mt-10">
                        hello@etruende.com
                    </div>
                </div>
            </Container>
        </div>
    );
}