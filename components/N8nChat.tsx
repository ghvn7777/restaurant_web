"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "https://kakama.app.n8n.cloud/webhook/0b4540c4-dc03-4995-abe3-42084ab31e84/chat",
        mode: "window",
        showWelcomeScreen: false,
        loadPreviousSession: true,
        initialMessages: [
          "Welcome to The Oak & Barrel!",
          "How can I help you today? Ask about our menu, reservations, events, or anything else.",
        ],
        i18n: {
          en: {
            title: "The Oak & Barrel",
            subtitle: "Ask us anything — we're here to help.",
            footer: "",
            getStarted: "New Conversation",
            inputPlaceholder: "Type your message...",
            closeButtonTooltip: "Close chat",
          },
        },
      });
    });

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
}
