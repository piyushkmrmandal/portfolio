"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, Zap } from "lucide-react";

interface ProfileCardProps {
  name?: string;
  role?: string;
  email?: string;
  avatarSrc?: string;
  statusText?: string;
  glowText?: string;
  resumeUrl?: string;
  className?: string;
}

export function ProfileCard({
  name = "Piyush Kumar Mandal",
  role = "Senior Software Engineer · Java & Spring Boot",
  email = "piyushkmrmandal@gmail.com",
  avatarSrc = "https://avatars.githubusercontent.com/u/piyushkmrmandal",
  statusText = "Open to freelance projects",
  glowText = "Typically responds within 24 hours",
  resumeUrl = "/portfolio/resume.pdf",
  className,
}: ProfileCardProps) {
  const [copied, setCopied] = useState(false);

  const timeText = useMemo(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, "0");
    const hour12 = ((h + 11) % 12) + 1;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour12}:${m} ${ampm} · Northampton, UK`;
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
        }
        .profile-card-glow {
          pointer-events: none;
          position: absolute;
          inset-x: 0;
          bottom: -24px;
          top: 72%;
          border-radius: 28px;
          background: rgba(66, 88, 230, 0.22);
          filter: blur(24px);
          z-index: 0;
        }
        .profile-card-zap {
          position: absolute;
          inset-x: 0;
          bottom: -40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 500;
          color: var(--muted, #6b7280);
          z-index: 0;
        }
        .profile-card {
          position: relative;
          z-index: 10;
          border-radius: 24px;
          background: radial-gradient(120% 120% at 30% 10%, #1a1a2e 0%, #0f0f1a 60%, #0a0a10 100%);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 64px rgba(0,0,0,0.35);
          overflow: visible;
          padding: 28px 32px;
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
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #84cc16;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .profile-card-time {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(255,255,255,0.4);
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
          overflow: hidden;
          border: 2px solid rgba(255,255,255,0.1);
          flex-shrink: 0;
          background: linear-gradient(135deg, #4258e6, #2a45d6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          color: white;
        }
        .profile-card-name {
          font-size: 19px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          letter-spacing: -0.02em;
          margin: 0 0 4px;
        }
        .profile-card-role {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          margin: 0;
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
          gap: 8px;
          padding: 12px 16px;
          border-radius: 14px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s ease, transform 0.15s ease;
          text-decoration: none;
        }
        .profile-card-btn:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }
        .profile-card-btn-primary {
          background: rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.9);
        }
        .profile-card-btn-secondary {
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.7);
        }
      `}</style>
      <motion.div
        className={`profile-card-wrap${className ? ` ${className}` : ""}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="profile-card-glow" />
        <div className="profile-card-zap">
          <Zap size={13} /> {glowText}
        </div>

        <div className="profile-card">
          <div className="profile-card-status-row">
            <div className="profile-card-status">
              <div className="profile-card-dot" />
              {statusText}
            </div>
            <div className="profile-card-time">
              <Clock size={13} />
              {timeText}
            </div>
          </div>

          <div className="profile-card-identity">
            <div className="profile-card-avatar">
              PM
            </div>
            <div>
              <p className="profile-card-name">{name}</p>
              <p className="profile-card-role">{role}</p>
            </div>
          </div>

          <div className="profile-card-actions">
            <a href={`mailto:${email}`} className="profile-card-btn profile-card-btn-primary">
              <Mail size={15} /> Get in Touch
            </a>
            <button
              onClick={handleCopy}
              className="profile-card-btn profile-card-btn-secondary"
            >
              <Mail size={15} /> {copied ? "Email Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
