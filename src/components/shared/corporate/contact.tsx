import { Container } from "../container";

export default function CorporateContact() {
    return (
        <section className="py-16 sm:py-20 second-scroll bg-[linear-gradient(to_bottom,#F4F8FD_50%,#e5e7eb_50%)]">
            <div
                className="
                    max-w-[1140px] w-full
                    px-6 sm:px-10 lg:px-[95px]
                    py-10 sm:py-14 lg:py-[65px]
                    mx-auto
                    bg-[#ff3f81]
                    rounded-2xl
                "
            >
                <span className="uppercase tracking-wide text-sm text-[#131632] font-semibold block mb-2">
                    Contact us
                </span>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Let's discuss your project?
                </h2>

                <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 sm:mb-10 max-w-[750px] text-white">
                    Leave your contact information so we can get in touch!
                    Take the first step toward growing your business.
                </p>

                <form className="select-none">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {["Name *", "Phone *", "Email *"].map((label, i) => (
                            <div key={i} className="flex flex-col">
                                <label className="text-sm font-semibold text-white">
                                    {label}
                                </label>
                                <input
                                    type="text"
                                    className="
                                        border-b border-white/70
                                        bg-transparent outline-none py-3
                                        text-white
                                        focus:border-white
                                        transition-all
                                    "
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col mt-5">
                        <input
                            type="text"
                            className="
                                border-b border-white/70
                                bg-transparent outline-none py-3
                                text-white
                                placeholder:text-white/70
                                focus:border-white
                                focus:placeholder:text-white
                                transition-all
                            "
                            placeholder="Ideas and comments"
                        />
                    </div>

                    <div
                        className="
                            mt-6
                            flex flex-col gap-4
                            lg:flex-row lg:items-center lg:justify-between
                        "
                    >
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="hidden peer" />

                            <span
                                className="
                                    w-4 h-4 flex items-center justify-center
                                    border border-white/70 rounded-sm
                                    peer-checked:bg-white peer-checked:border-white
                                    group-hover:border-white
                                    transition-all
                                "
                            >
                                <svg
                                    className="w-3 h-3 text-[#ff3f81]"
                                    viewBox="0 0 12 10"
                                    fill="none"
                                >
                                    <path
                                        d="M1 5L4.5 8.5L11 1.5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>

                            <span className="text-white/80 group-hover:text-white transition-colors text-sm sm:text-base">
                                Consent to the processing of personal data
                            </span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="file" className="hidden" />
                            <svg
                                className="w-4 h-4 text-white/70 group-hover:text-white transition-colors"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M21 12.5L12.5 21C10.567 22.933 7.433 22.933 5.5 21C3.567 19.067 3.567 15.933 5.5 14L14 5.5C15.381 4.119 17.619 4.119 19 5.5C20.381 6.881 20.381 9.119 19 10.5L11.5 18C10.671 18.829 9.329 18.829 8.5 18C7.671 17.171 7.671 15.829 8.5 15L15 8.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-white/80 group-hover:text-white transition-colors text-sm sm:text-base">
                                Attach file
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="
                                w-full lg:w-auto
                                px-6 py-3 rounded-xl
                                bg-white text-[#ff3f81]
                                font-semibold
                                hover:bg-white/90
                                transition
                            "
                        >
                            Contact us
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
