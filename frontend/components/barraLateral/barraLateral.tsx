import {
  IconBulb,
  IconCalendar,
  IconCalendarEvent,
  IconHome,
  IconLogout,
  IconMap2,
  IconX,
} from "@tabler/icons-react";
import { useRouter } from "expo-router";
import React from "react";

const ICON_MENU = {
  size: 22,
  stroke: 1.75,
  color: "white",
} as const;

type SideMenuProps = {
  open: boolean;
  onClose: () => void;
};

type RouteType = "/Home" | "/Sugestao" | "/Date" | "/Mapa" | "/Evento" | "/";

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
            zIndex: 2147483646,
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
          zIndex: 2147483647,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "0.25s ease",
          overflow: "hidden",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -52,
            right: -52,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.09)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "18%",
            left: -40,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.12)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "42%",
            right: -28,
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "18px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="button" onClick={onClose} style={iconButton} aria-label="Fechar menu">
              <IconX size={26} stroke={2} color="white" />
            </button>
          </div>

          <MenuItem
            icon={<IconHome {...ICON_MENU} />}
            label="Home"
            onClick={() => goTo("/Home")}
          />
          <MenuItem
            icon={<IconBulb {...ICON_MENU} />}
            label="Sugestão"
            onClick={() => goTo("/Sugestao")}
          />
          <MenuItem
            icon={<IconCalendar {...ICON_MENU} />}
            label="Datas"
            onClick={() => goTo("/Date")}
          />
          <MenuItem
            icon={<IconMap2 {...ICON_MENU} />}
            label="Maps"
            onClick={() => goTo("/Mapa")}
          />
          <MenuItem
            icon={<IconCalendarEvent {...ICON_MENU} />}
            label="Evento"
            onClick={() => goTo("/Evento")}
          />
          <MenuItem
            icon={<IconLogout {...ICON_MENU} />}
            label="Sair"
            onClick={() => goTo("/")}
          />
        </div>
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
      type="button"
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
