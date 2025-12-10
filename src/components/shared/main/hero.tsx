"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroParticles() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let DPR = Math.max(1, window.devicePixelRatio || 1);

        const particles: any[] = [];

        let PARTICLE_COUNT = window.innerWidth < 800 ? 120 : 250;
        let MAX_CONNECT_DISTANCE = 68;
        let MOUSE_RADIUS = 20;
        const MAX_CONNECTIONS = 6;

        const mouse = { x: null as number | null, y: null as number | null };

        function rand(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            r: number;
            mass: number;

            constructor(w: number, h: number) {
                this.x = rand(0, w);
                this.y = rand(0, h);
                const speed = rand(0.1, 1.2);
                const angle = rand(0, Math.PI * 2);
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.r = rand(1.2, 2.6);
                this.mass = this.r * 0.35;
            }

            update(dt: number, w: number, h: number) {
                this.x += this.vx * dt;
                this.y += this.vy * dt;

                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
            }
        }

        function resize() {
            DPR = Math.max(1, window.devicePixelRatio || 1);
            const w = Math.floor(window.innerWidth * DPR);
            const h = Math.floor(window.innerHeight * DPR);
            canvas.width = w;
            canvas.height = h;
            canvas.style.width = "100%";
            canvas.style.height = "100%";

            while (particles.length < PARTICLE_COUNT) particles.push(new Particle(w, h));
            while (particles.length > PARTICLE_COUNT) particles.pop();
        }

        const updateMouse = (e: any) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.touches ? e.touches[0].clientX : e.clientX;
            const y = e.touches ? e.touches[0].clientY : e.clientY;
            mouse.x = (x - rect.left) * DPR;
            mouse.y = (y - rect.top) * DPR;
        };

        window.addEventListener("mousemove", updateMouse);
        window.addEventListener("touchmove", updateMouse);

        let last = performance.now();
        function loop() {
            const dt = 0.5;

            const w = canvas.width;
            const h = canvas.height;

            ctx.clearRect(0, 0, w, h);

            for (let p of particles) {
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const d2 = dx * dx + dy * dy;
                    const r = MOUSE_RADIUS * DPR;
                    if (d2 < r * r && d2 > 0.001) {
                        const d = Math.sqrt(d2);
                        const strength = (1 - d / r) * 0.6;
                        p.vx += (dx / d) * strength * (0.9 / p.mass) * dt;
                        p.vy += (dy / d) * strength * (0.9 / p.mass) * dt;
                    }
                }

                const rot = 0.015;
                const vxOld = p.vx;
                const vyOld = p.vy;
                p.vx = vxOld * Math.cos(rot) - vyOld * Math.sin(rot);
                p.vy = vxOld * Math.sin(rot) + vyOld * Math.cos(rot);


                p.update(dt, w, h);
            }

            const maxConn = MAX_CONNECT_DISTANCE * DPR;
            const maxConn2 = maxConn * maxConn;

            for (let i = 0; i < particles.length; i++) {
                const a = particles[i];

                ctx.beginPath();
                ctx.fillStyle = "rgba(240,240,255,0.9)";
                ctx.arc(a.x, a.y, a.r * DPR, 0, Math.PI * 2);
                ctx.fill();

                let connections = 0;

                for (let j = i + 1; j < particles.length; j++) {
                    if (connections >= MAX_CONNECTIONS) break;

                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const d2 = dx * dx + dy * dy;

                    if (d2 < maxConn2) {
                        const alpha = 1 - Math.sqrt(d2) / maxConn;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(200,200,255,${alpha * 0.7})`;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();

                        connections++;
                    }
                }
            }


            requestAnimationFrame(loop);
        }

        resize();
        window.addEventListener("resize", resize);
        requestAnimationFrame(loop);
    }, []);

    return (
        <section
            className="
    relative w-full min-h-screen overflow-hidden 
    flex items-center justify-center text-center px-6

    pt-[100px]
  "
            style={{
                background: "linear-gradient(180deg, #131632 0%, #2a2f55 100%)"
            }}
        >

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            <div className="relative z-10 text-white flex flex-col items-center">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center max-w-[1000px]">
                    Websites That Drive
                    <span className="text-[#ff3f81]"> Traffic, Rankings, and Sales</span>
                </h1>
                <p className="text-lg sm:text-xl opacity-80 mb-6 max-w-[900px]">
                    At EtruendE, we design, develop, and upgrade websites optimized for SEO and conversions. Get a fast, modern website built to attract clients and grow your revenue.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="" className="select-none px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition">
                        Start your project with us
                    </Link>
                    <Link href="" className="select-none px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-xl hover:bg-gray-200 transition">
                        View projects
                    </Link>
                </div>
            </div>
        </section>
    );
}

