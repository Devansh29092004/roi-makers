// "use client";

// import React from "react";
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconBrandInstagram,
//   IconBrandLinkedin,
//   IconBrandYoutube,
//   IconBrandFacebook,
//   IconBrandTiktok,
//   IconBrandPinterest,
//   IconBrandReddit,
//   IconBrandSnapchat,
//   IconBrandDiscord,
//   IconBrandWhatsapp,
//   IconBrandTelegram,
//   IconBrandMedium,
// } from "@tabler/icons-react";

// type Body = {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   size: number;
//   el: HTMLAnchorElement | null;
//   rot: number;
//   scale: number;
// };

// type BallpitProps = {
//   height?: number | string;
//   gravity?: number;
//   damping?: number;
//   repelStrength?: number;
//   maxSpeed?: number;
//   iconSize?: number;
//   repeats?: number;
//   followCursor?: boolean;
//   repelOuterRadius?: number;
//   airFriction?: number;
//   repelRadius?: number;
//   hardRepelImpulse?: number;
//   shakeRadius?: number;
//   shakeStrength?: number;
//   maxTiltDeg?: number;
// };

// const ICONS_BASE: Array<{
//   key: string;
//   href: string;
//   label: string;
//   bg: string;
//   fg?: string;
//   render: (size: number, color?: string) => React.ReactNode;
// }> = [
//   {
//     key: "github",
//     href: "https://github.com",
//     label: "GitHub",
//     bg: "#181717",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandGithub size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "x",
//     href: "http://x.com/roimakers",
//     label: "X (Twitter)",
//     bg: "#000000",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandX size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "instagram",
//     href: "https://www.instagram.com/roimakers/",
//     label: "Instagram",
//     bg: "#E4405F",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandInstagram size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "linkedin",
//     href: "https://www.linkedin.com/company/roimakers/",
//     label: "LinkedIn",
//     bg: "#0A66C2",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandLinkedin size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "youtube",
//     href: "https://youtube.com",
//     label: "YouTube",
//     bg: "#FF0000",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandYoutube size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "facebook",
//     href: "https://www.facebook.com/roimakersin",
//     label: "Facebook",
//     bg: "#1877F2",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandFacebook size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "tiktok",
//     href: "https://tiktok.com",
//     label: "TikTok",
//     bg: "#69C9D0",
//     fg: "#000000",
//     render: (s, c = "#000000") => <IconBrandTiktok size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "pinterest",
//     href: "https://pinterest.com",
//     label: "Pinterest",
//     bg: "#E60023",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandPinterest size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "reddit",
//     href: "https://reddit.com",
//     label: "Reddit",
//     bg: "#FF4500",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandReddit size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "snapchat",
//     href: "https://snapchat.com",
//     label: "Snapchat",
//     bg: "#FFFC00",
//     fg: "#000000",
//     render: (s, c = "#000000") => <IconBrandSnapchat size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "discord",
//     href: "https://discord.com",
//     label: "Discord",
//     bg: "#5865F2",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandDiscord size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "whatsapp",
//     href: "https://whatsapp.com",
//     label: "WhatsApp",
//     bg: "#25D366",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandWhatsapp size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "telegram",
//     href: "https://telegram.org",
//     label: "Telegram",
//     bg: "#26A5E4",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandTelegram size={s} stroke={1.8} color={c} />,
//   },
//   {
//     key: "medium",
//     href: "https://medium.com",
//     label: "Medium",
//     bg: "#00AB6C",
//     fg: "#ffffff",
//     render: (s, c = "#ffffff") => <IconBrandMedium size={s} stroke={1.8} color={c} />,
//   },
// ];

// const ICONS = (repeats: number) =>
//   Array.from({ length: Math.max(1, repeats) }).flatMap((_, idx) =>
//     ICONS_BASE.map((icon) => ({
//       ...icon,
//       key: `${icon.key}-${idx}`,
//     }))
//   );

// const Ballpit: React.FC<BallpitProps> = ({
//   height = 420,
//   gravity = 1,
//   damping = 0.6,
//   repelStrength = 100000,
//   maxSpeed = 500,
//   iconSize = 48,
//   repeats = 3,
//   followCursor = true,
//   repelOuterRadius = 120,
//   airFriction = 0.08,
//   repelRadius = 3,
//   hardRepelImpulse = 1000,
//   shakeRadius = 100,
//   shakeStrength = 100,
//   maxTiltDeg = 8,
// }) => {
//   const containerRef = React.useRef<HTMLDivElement | null>(null);
//   const rafRef = React.useRef<number | null>(null);
//   const bodiesRef = React.useRef<Body[]>([]);
//   const pointerRef = React.useRef<{ x: number; y: number } | null>(null);
//   const reducedMotion = usePrefersReducedMotion();

//   const icons = React.useMemo(() => ICONS(repeats), [repeats]);

//   React.useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     const rect = el.getBoundingClientRect();
//     const W = rect.width;
//     const H = rect.height;

//     const pad = Math.max(24, Math.floor(iconSize * 0.75));
//     const bodies: Body[] = new Array(icons.length).fill(0).map(() => ({
//       x: Math.random() * (W - pad * 2) + pad,
//       y: Math.random() * (H - pad * 2) + pad,
//       vx: (Math.random() - 0.5) * 300,
//       vy: (Math.random() - 0.5) * 300,
//       size: iconSize + 16,
//       el: null,
//       rot: 0,
//       scale: 1,
//     }));
//     bodiesRef.current = bodies;

//     if (reducedMotion) {
//       bodies.forEach((b, i) => {
//         b.el = el.querySelector<HTMLAnchorElement>(`[data-body="${i}"]`);
//         if (!b.el) return;
//         const cols = Math.max(2, Math.round(W / 100));
//         const x = (i % cols) * (W / cols) + 40;
//         const y = Math.floor(i / cols) * 80 + 40;
//         b.el.style.transform = `translate(${Math.min(W - 40, Math.max(40, x))}px, ${Math.min(
//           H - 40,
//           Math.max(40, y)
//         )}px)`;
//       });
//       return;
//     }

//     let lastTime = performance.now();

//     const step = (t: number) => {
//       const dt = Math.min(0.032, (t - lastTime) / 1000);
//       lastTime = t;

//       const p = pointerRef.current;
//       const bounds = el.getBoundingClientRect();
//       const width = bounds.width;
//       const height = bounds.height;

//       bodies.forEach((b, index) => {
//         if (p) {
//           const dx = b.x - p.x;
//           const dy = b.y - p.y;
//           const dist2 = dx * dx + dy * dy;
//           const dist = Math.sqrt(dist2) || 1;
//           const ux = dx / dist;
//           const uy = dy / dist;

//           const radius = Math.max(1, repelOuterRadius);
//           if (dist < radius) {
//             const tNorm = Math.max(0, Math.min(1, dist / radius));
//             const smooth = 1 - (3 * tNorm * tNorm - 2 * tNorm * tNorm * tNorm);
//             const sign = followCursor ? -1 : 1;
//             const accel = (repelStrength * smooth) / (1 + dist2 * 0.002);
//             b.vx += sign * ux * accel * dt;
//             b.vy += sign * uy * accel * dt;
//           }

//           if (!followCursor && dist < Math.max(1, repelRadius)) {
//             const near = 1 - Math.max(0, dist) / Math.max(1, repelRadius);
//             const impulse = hardRepelImpulse * (1 + near);
//             b.vx += ux * impulse * dt;
//             b.vy += uy * impulse * dt;
//           }

//           const speed = Math.hypot(b.vx, b.vy);
//           if (speed > maxSpeed) {
//             const s = maxSpeed / speed;
//             b.vx *= s;
//             b.vy *= s;
//           }

//           const friction = Math.exp(-airFriction * dt);
//           b.vx *= friction;
//           b.vy *= friction;

//           const distCursor = dist;
//           if (distCursor < shakeRadius) {
//             const proximity = 1 - Math.min(1, distCursor / shakeRadius);
//             const jitterX = (Math.random() * 2 - 1) * shakeStrength * proximity;
//             const jitterY = (Math.random() * 2 - 1) * shakeStrength * proximity;
//             b.vx += (jitterX / 1000) * dt;
//             b.vy += (jitterY / 1000) * dt;

//             const tiltJitter = (Math.random() * 2 - 1) * 180 * dt * proximity;
//             b.rot = Math.max(-maxTiltDeg, Math.min(maxTiltDeg, b.rot + tiltJitter));
//             b.scale = 1 + 0.08 * proximity;
//           } else {
//             b.rot *= 1 - Math.min(1, 6 * dt);
//             b.scale += (1 - b.scale) * Math.min(1, 8 * dt);
//           }
//         } else {
//           b.rot *= 1 - Math.min(1, 6 * dt);
//           b.scale += (1 - b.scale) * Math.min(1, 8 * dt);
//         }

//         b.vy += gravity * dt;
//         b.x += b.vx * dt;
//         b.y += b.vy * dt;

//         const r = Math.max(20, Math.min(100, b.size / 2));

//         if (b.x < r) {
//           b.x = r;
//           b.vx = -b.vx * damping;
//         } else if (b.x > width - r) {
//           b.x = width - r;
//           b.vx = -b.vx * damping;
//         }

//         if (b.y < r) {
//           b.y = r;
//           b.vy = -b.vy * damping;
//         } else if (b.y > height - r) {
//           b.y = height - r;
//           b.vy = -b.vy * damping;
//         }

//         if (!b.el) {
//           b.el = el.querySelector<HTMLAnchorElement>(`[data-body="${index}"]`);
//         }
//         if (b.el) {
//           const zBoost = p
//             ? Math.max(
//                 0,
//                 1 - Math.min(1, Math.hypot(b.x - p.x, b.y - p.y) / Math.max(1, repelOuterRadius))
//               )
//             : 0;
//           b.el.style.transform = `translate(${b.x}px, ${b.y}px) rotate(${b.rot.toFixed(
//             2
//           )}deg) scale(${b.scale.toFixed(3)})`;
//           b.el.style.zIndex = String(100 + Math.round(zBoost * 1000));
//           b.el.style.willChange = "transform";
//         }
//       });

//       rafRef.current = requestAnimationFrame(step);
//     };

//     rafRef.current = requestAnimationFrame(step);

//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [
//     airFriction,
//     damping,
//     followCursor,
//     gravity,
//     hardRepelImpulse,
//     iconSize,
//     icons,
//     maxSpeed,
//     maxTiltDeg,
//     reducedMotion,
//     repelOuterRadius,
//     repelRadius,
//     repelStrength,
//     shakeRadius,
//     shakeStrength,
//   ]);

//   React.useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     const move = (clientX: number, clientY: number) => {
//       const rect = el.getBoundingClientRect();
//       const x = clientX - rect.left;
//       const y = clientY - rect.top;
//       if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
//         pointerRef.current = { x, y };
//       } else {
//         pointerRef.current = null;
//       }
//     };

//     const onMouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
//     const onMouseLeave = () => {
//       pointerRef.current = null;
//     };
//     const onTouchMove = (e: TouchEvent) => {
//       if (e.touches.length > 0) {
//         const t = e.touches[0];
//         move(t.clientX, t.clientY);
//       }
//     };
//     const onTouchEnd = () => {
//       pointerRef.current = null;
//     };

//     el.addEventListener("mousemove", onMouseMove);
//     el.addEventListener("mouseleave", onMouseLeave);
//     el.addEventListener("touchmove", onTouchMove, { passive: true });
//     el.addEventListener("touchend", onTouchEnd);

//     return () => {
//       el.removeEventListener("mousemove", onMouseMove);
//       el.removeEventListener("mouseleave", onMouseLeave);
//       el.removeEventListener("touchmove", onTouchMove);
//       el.removeEventListener("touchend", onTouchEnd);
//     };
//   }, []);

//   return (
//     <section aria-label="Social icons ballpit" className="relative w-full">
//       <div
//         ref={containerRef}
//   className="relative w-full overflow-hidden rounded-[var(--radius)] bg-background/40 outline-1 outline-border"
//         style={{
//           height: typeof height === "number" ? `${height}px` : height,
//           touchAction: "none",
//         }}
//         role="presentation"
//       >
//         {icons.map((icon, i) => (
//           <a
//             key={icon.key}
//             data-body={i}
//             href={icon.href}
//             aria-label={icon.label}
//             target="_blank"
//             rel="noreferrer noopener"
//             className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
//             style={{
//               transform: `translate(${40 + i * 30}px, ${40 + i * 30}px)`,
//               willChange: "transform",
//             }}
//           >
//             <span
//               className="grid place-items-center rounded-full shadow-sm outline-1 outline-border transition-transform hover:scale-[1.05] active:scale-[0.98]"
//               style={{
//                 width: iconSize + 16,
//                 height: iconSize + 16,
//                 backgroundColor: icon.bg,
//               }}
//             >
//               {icon.render(iconSize, icon.fg)}
//             </span>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// const usePrefersReducedMotion = () => {
//   const [prefers, setPrefers] = React.useState(false);
//   React.useEffect(() => {
//     const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
//     const handle = () => setPrefers(mq.matches);
//     handle();
//     mq.addEventListener("change", handle);
//     return () => mq.removeEventListener("change", handle);
//   }, []);
//   return prefers;
// };

// export default Ballpit;
