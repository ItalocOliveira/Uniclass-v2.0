import React from "react";
import {
  IconUser,
  IconBulb,
  IconCalendar,
  IconMapPin,
  IconCalendarEvent,
  IconLogout,
  IconX
} from "@tabler/icons-react";

type SideMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function SideMenu({ open, onClose }: SideMenuProps) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 9998,
          }}
        />
      )}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: 280,
          background: "#0c3c78",
          color: "white",
          zIndex: 9999,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "0.25s ease",
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={onClose} style={iconButton}>
            <IconX size={26} />
          </button>
        </div>

        <MenuItem icon={<IconUser size={22} />} label="Perfil" />
        <MenuItem icon={<IconBulb size={22} />} label="Sugestão" />
        <MenuItem icon={<IconCalendar size={22} />} label="Calendário" />
        <MenuItem icon={<IconMapPin size={22} />} label="Maps" />
        <MenuItem icon={<IconCalendarEvent size={22} />} label="Eventos" />
        <MenuItem icon={<IconLogout size={22} />} label="Sair" />
      </aside>
    </>
  );
}

function MenuItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "14px 10px",
        borderBottom: "1px solid rgba(255,255,255,0.25)",
        fontSize: 16,
        background: "transparent",
        border: "none",
        color: "white",
        cursor: "pointer",
        width: "100%",
      }}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
}

const iconButton: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
};
