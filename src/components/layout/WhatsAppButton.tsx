"use client";

import { whatsappLink, type WhatsAppContext } from "@/lib/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.04 4C9.94 4 5 8.94 5 15.04c0 2.13.6 4.12 1.64 5.81L5 28l7.34-1.6a11 11 0 0 0 3.7.64c6.1 0 11.04-4.94 11.04-11.04S22.14 4 16.04 4Zm0 20.2c-1.2 0-2.38-.24-3.46-.7l-.25-.1-3.66.8.78-3.56-.16-.27a8.94 8.94 0 0 1-1.38-4.78c0-4.96 4.03-8.99 9-8.99 2.4 0 4.66.94 6.36 2.64a8.94 8.94 0 0 1 2.63 6.36c0 4.96-4.03 8.99-8.98 8.99Zm5.07-6.73c-.28-.14-1.64-.81-1.9-.9-.25-.1-.43-.14-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.64-1.54-1.92-.16-.27-.02-.42.12-.56.13-.13.28-.32.42-.48.14-.16.18-.27.28-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.35.98 2.66 1.12 2.84.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33Z" />
    </svg>
  );
}

export default function WhatsAppButton({
  context = "reservation",
  label,
}: {
  context?: WhatsAppContext;
  label?: string;
}) {
  return (
    <a
      href={whatsappLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || "WhatsApp"}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-black shadow-ember-lg transition hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden font-heading text-sm font-medium uppercase tracking-wide sm:block">
        {label}
      </span>
    </a>
  );
}
