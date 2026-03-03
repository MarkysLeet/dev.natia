import EventSelector from "@/components/ui/EventSelector";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background elegant subtle glow could go here in the future */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

      <div className="w-full relative z-10">
        <EventSelector />
      </div>
    </main>
  );
}
