"use client";

import { useEffect, useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

interface ProfileCardProps {
  name?: string;
  role?: string;
  email?: string;
  statusText?: string;
  className?: string;
}

function getTimeText() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, "0");
  const hour12 = ((h + 11) % 12) + 1;
  const ampm = h >= 12 ? "PM" : "AM";
  return `${hour12}:${m} ${ampm}`;
}

export function ProfileCard({
  name = "Piyush Kumar Mandal",
  role = "Senior Software Engineer · Freelance",
  email = "piyushkmrmandal@gmail.com",
  statusText = "Open to freelance projects",
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
    <div className={`pc-content${className ? ` ${className}` : ""}`}>
      <style>{`
        .pc-content {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .pc-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }
        .pc-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
        }
        .pc-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #84cc16;
          flex-shrink: 0;
          animation: pc-pulse 2.2s ease-in-out infinite;
        }
        @keyframes pc-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(132,204,22,0.5); }
          50% { opacity: 0.7; box-shadow: 0 0 0 5px rgba(132,204,22,0); }
        }
        .pc-time {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          font-variant-numeric: tabular-nums;
        }
        .pc-identity {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .pc-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.1);
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
        .pc-name {
          font-size: 20px;
          font-weight: 700;
          color: rgba(255,255,255,0.95);
          letter-spacing: -0.02em;
          margin: 0 0 5px;
          line-height: 1.2;
        }
        .pc-role {
          font-size: 13px;
          color: rgba(255,255,255,0.38);
          margin: 0;
          line-height: 1.4;
        }
        .pc-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .pc-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 13px 16px;
          border-radius: 14px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: opacity 0.15s ease, transform 0.15s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .pc-btn:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }
        .pc-btn-primary {
          background: #ffffff;
          color: #0a0a10;
        }
        .pc-btn-secondary {
          background: rgba(163,230,53,0.15);
          color: #a3e635;
          border: 1px solid rgba(163,230,53,0.25);
        }
        .pc-btn-secondary.copied {
          background: rgba(163,230,53,0.25);
        }
      `}</style>

      <div className="pc-status-row">
        <div className="pc-status">
          <div className="pc-dot" />
          {statusText}
        </div>
        <div className="pc-time">{timeText} · Northampton, UK</div>
      </div>

      <div className="pc-identity">
        <div className="pc-avatar">PM</div>
        <div>
          <p className="pc-name">{name}</p>
          <p className="pc-role">{role}</p>
        </div>
      </div>

      <div className="pc-actions">
        <a href={`mailto:${email}`} className="pc-btn pc-btn-primary">
          <Mail size={14} /> Get in Touch
        </a>
        <button
          onClick={handleCopy}
          className={`pc-btn pc-btn-secondary${copied ? " copied" : ""}`}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>
    </div>
  );
}
