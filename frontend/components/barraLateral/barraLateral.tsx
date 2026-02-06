import React from "react";
import { useRouter } from "expo-router";
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

type RouteType = "/Home" | "/Evento" | "/Date";

export default function SideMenu({ open, onClose }: SideMenuProps) {
  const router = useRouter();

  function goTo(route: RouteType) {
    onClose();
    router.push(route);
  }

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

        <MenuItem icon={<IconUser size={22} />} label="Home" onClick={() => goTo("/Home")} />
        <MenuItem icon={<IconCalendarEvent size={22} />} label="Eventos" onClick={() => goTo("/Evento")} />
        <MenuItem icon={<IconCalendar size={22} />} label="Datas" onClick={() => goTo("/Date")} />
        <MenuItem
          icon={<IconMapPin size={22} />}
          label="Maps"
          onClick={() => {
            onClose();
            window.open("/mapa/index.html", "_self");
          }}
        />

        <MenuItem icon={<IconLogout size={22} />} label="Sair" onClick={() => alert("/Login")} />
      </aside>
    </>
  );
}

function MenuItem({
  icon,
  label,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
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
