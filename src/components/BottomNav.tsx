'use client';
import { useRouter, usePathname } from 'next/navigation';

const navItems = [
  {
    id: 'dashboard',
    label: 'Home',
    href: '/dashboard',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.2" />
        <rect x="14" y="3" width="7" height="7" rx="1.2" />
        <rect x="3" y="14" width="7" height="7" rx="1.2" />
        <rect x="14" y="14" width="7" height="7" rx="1.2" />
      </>
    ),
  },
  {
    id: 'referral',
    label: 'Refer',
    href: '/referral',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
  {
    id: 'season',
    label: 'Season',
    href: '/season',
    center: true,
    icon: (
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    ),
  },
  {
    id: 'support',
    label: 'Support',
    href: '/support',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),
  },
  {
    id: 'profile',
    label: 'Profile',
    href: '/profile',
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <style>{`
        .vx-bottom-nav {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 9000;
          background: rgba(246,241,233,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(184,147,90,0.18);
          display: flex;
          align-items: stretch;
          height: 64px;
          padding: 0 4px;
          padding-bottom: env(safe-area-inset-bottom, 0px);
          box-shadow: 0 -4px 32px rgba(28,28,28,0.07);
        }

        .vx-nav-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border: none;
          background: none;
          cursor: pointer;
          padding: 6px 2px;
          position: relative;
          transition: all .2s ease;
          -webkit-tap-highlight-color: transparent;
          border-radius: 12px;
          margin: 6px 2px;
        }

        .vx-nav-btn:not(.center):hover {
          background: rgba(184,147,90,0.07);
        }

        .vx-nav-btn svg {
          width: 20px;
          height: 20px;
          transition: all .25s ease;
          stroke: var(--txt2, #6b6459);
          fill: none;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .vx-nav-btn.active svg {
          stroke: var(--gold, #b8935a);
          filter: drop-shadow(0 0 4px rgba(184,147,90,0.35));
        }

        .vx-nav-label {
          font-family: 'DM Sans', sans-serif;
          font-size: .57rem;
          letter-spacing: .06em;
          text-transform: uppercase;
          color: var(--txt2, #6b6459);
          transition: color .2s;
          line-height: 1;
        }

        .vx-nav-btn.active .vx-nav-label {
          color: var(--gold, #b8935a);
          font-weight: 500;
        }

        /* Active indicator dot */
        .vx-nav-btn.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gold, #b8935a);
          opacity: 0.7;
        }

        /* Center Season button */
        .vx-nav-btn.center {
          flex: 0 0 64px;
          margin: -8px 6px 6px;
          padding: 0;
          position: relative;
          z-index: 1;
        }

        .vx-center-bubble {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: var(--ink, #1c1c1c);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          box-shadow:
            0 -2px 20px rgba(184,147,90,0.25),
            0 6px 20px rgba(28,28,28,0.22),
            0 0 0 1px rgba(184,147,90,0.2);
          transition: all .25s ease;
          position: relative;
          overflow: hidden;
        }

        .vx-center-bubble::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(184,147,90,0.15), transparent 60%);
          pointer-events: none;
        }

        .vx-nav-btn.center:hover .vx-center-bubble,
        .vx-nav-btn.center.active .vx-center-bubble {
          background: var(--gold, #b8935a);
          box-shadow:
            0 -2px 24px rgba(184,147,90,0.45),
            0 6px 20px rgba(184,147,90,0.3);
          transform: translateY(-2px) scale(1.04);
        }

        .vx-nav-btn.center svg {
          width: 18px;
          height: 18px;
          stroke: var(--gold, #b8935a);
        }

        .vx-nav-btn.center.active svg,
        .vx-nav-btn.center:hover svg {
          stroke: #fff;
          filter: none;
        }

        .vx-center-label {
          font-family: 'DM Sans', sans-serif;
          font-size: .5rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: rgba(246,241,233,0.5);
          line-height: 1;
        }

        .vx-nav-btn.center.active .vx-center-label,
        .vx-nav-btn.center:hover .vx-center-label {
          color: rgba(255,255,255,0.85);
        }

        /* Active pulse ring on center button */
        .vx-nav-btn.center.active .vx-center-bubble::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 20px;
          border: 1.5px solid rgba(184,147,90,0.5);
          animation: vx-center-pulse 2s ease-in-out infinite;
        }
        @keyframes vx-center-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.06); }
        }
      `}</style>

      <nav className="vx-bottom-nav">
        {navItems.map((item) => {
          const active = isActive(item.href);
          if (item.center) {
            return (
              <button
                key={item.id}
                className={`vx-nav-btn center${active ? ' active' : ''}`}
                onClick={() => router.push(item.href)}
                aria-label={item.label}
              >
                <div className="vx-center-bubble">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {item.icon}
                  </svg>
                  <span className="vx-center-label">{item.label}</span>
                </div>
              </button>
            );
          }
          return (
            <button
              key={item.id}
              className={`vx-nav-btn${active ? ' active' : ''}`}
              onClick={() => router.push(item.href)}
              aria-label={item.label}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {item.icon}
              </svg>
              <span className="vx-nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}