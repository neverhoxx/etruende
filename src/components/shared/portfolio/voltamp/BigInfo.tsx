import { Container } from "../../container";

export default function VoltampBigInfoBlock() {
    return (
        <div className="py-10">
            <Container className="grid md:grid-cols-3 gap-10">
                <BigInfo
                    number="01"
                    title="Challenge"
                    text="Stand out in a competitive energy market and build immediate trust with B2B clients."
                />
                <BigInfo
                    number="02"
                    title="Approach"
                    text="Minimalistic design, strong UX hierarchy, and SEO-driven architecture."
                />
                <BigInfo
                    number="03"
                    title="Outcome"
                    text="A scalable digital platform that converts visitors into qualified leads."
                />
            </Container>

        </div>
    );
}

function BigInfo({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-2xl border border-[#ff3f81] p-10">
            <span className="text-[#ff3f81] text-7xl font-black tracking-widest select-none">
                {number}
            </span>
            <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
            <p className="mt-4 text-zinc-600 text-lg leading-relaxed">
                {text}
            </p>
        </div>
    );
}