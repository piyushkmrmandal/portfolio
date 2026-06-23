"use client";

import { useEffect, useState } from "react";
import { Mail, Zap } from "lucide-react";

interface ProfileCardProps {
  name?: string;
  role?: string;
  email?: string;
  statusText?: string;
  glowText?: string;
  className?: string;
}

function getTimeText() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, "0");
  const hour12 = ((h + 11) % 12) + 1;
  const ampm = h >= 12 ? "PM" : "AM";
  return `${hour12}:${m} ${ampm} · Northampton, UK`;
}

export function ProfileCard({
  name = "Piyush Kumar Mandal",
  role = "Senior Software Engineer · Java & Spring Boot",
  email = "piyushkmrmandal@gmail.com",
  statusText = "Open to freelance projects",
  glowText = "Typically responds within 24 hours",
  className,
}: ProfileCardProps) {
  const [copied, setCopied] = useState(false);
  const [timeText, setTimeText] = useState(getTimeText);

  useEffect(() => {
    const id = setInterval(() => setTimeText(getTimeText()), 10000);
    return () => clearInterval(id);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <>
      <style>{`
        .profile-card-wrap {
          position: relative;
          width: 100%;
          max-width: 480px;
          flex-shrink: 0;
        }
        .profile-card {
          position: relative;
          border-radius: 24px;
          background: radial-gradient(120% 120% at 30% 10%, #1a1a2e 0%, #0f0f1a 60%, #0a0a10 100%);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04);
          overflow: hidden;
        }
        .profile-card-inner {
          padding: 28px 28px 24px;
        }
        .profile-card-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .profile-card-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }
        .profile-card-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #84cc16;
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(132,204,22,0.5); }
          50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(132,204,22,0); }
        }
        .profile-card-time {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: rgba(255,255,255,0.38);
          font-variant-numeric: tabular-nums;
        }
        .profile-card-identity {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .profile-card-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.12);
          flex-shrink: 0;
          background: linear-gradient(135deg, #4258e6, #2a45d6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: white;
          letter-spacing: 0.02em;
        }
        .profile-card-name {
          font-size: 19px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          letter-spacing: -0.02em;
          margin: 0 0 4px;
          line-height: 1.2;
        }
        .profile-card-role {
          font-size: 12.5px;
          color: rgba(255,255,255,0.42);
          margin: 0;
          line-height: 1.4;
        }
        .profile-card-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .profile-card-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 11px 14px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: opacity 0.15s ease, transform 0.15s ease;
          text-decoration: none;
        }
        .profile-card-btn:hover {
          opacity: 0.82;
          transform: translateY(-1px);
        }
        .profile-card-btn-primary {
          background: rgba(255,255,255,0.11);
          color: rgba(255,255,255,0.88);
        }
        .profile-card-btn-secondary {
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.65);
        }
        .profile-card-neon-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 11px 16px;
          background: #a3e635;
          margin-top: 20px;
          font-size: 13px;
          font-weight: 600;
          color: #0f1a00;
          letter-spacing: 0.01em;
        }
      `}</style>

      <div className={`profile-card-wrap${className ? ` ${className}` : ""}`}>
        <div className="profile-card">
          <div className="profile-card-inner">
            <div className="profile-card-status-row">
              <div className="profile-card-status">
                <div className="profile-card-dot" />
                {statusText}
              </div>
              <div className="profile-card-time">
                {timeText}
              </div>
            </div>

            <div className="profile-card-identity">
              <div className="profile-card-avatar">PM</div>
              <div>
                <p className="profile-card-name">{name}</p>
                <p className="profile-card-role">{role}</p>
              </div>
            </div>

            <div className="profile-card-actions">
              <a href={`mailto:${email}`} className="profile-card-btn profile-card-btn-primary">
                <Mail size={14} /> Get in Touch
              </a>
              <button onClick={handleCopy} className="profile-card-btn profile-card-btn-secondary">
                <Mail size={14} /> {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>

          <div className="profile-card-neon-bar">
            <Zap size={13} />
            {glowText}
          </div>
        </div>
      </div>
    </>
  );
}
