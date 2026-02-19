"use client";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeader from "./SectionHeader";

// Client interface
interface Client {
  name: string;
  imagePath: string;
}

export default function ClientLogos() {
  const [clients, setClients] = useState<Client[]>([]);
  const { sectionRef, isVisible } = useSectionInView<HTMLElement>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Fetch clients dynamically
    const fetchClients = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/clients");

        if (!response.ok) {
          throw new Error(`Failed to fetch clients: ${response.status}`);
        }

        const data = await response.json();

        if (!data || data.length === 0) {
          setError("No clients available at this time.");
        } else {
          setClients(data);
        }
      } catch (error) {
        console.error("Error fetching clients:", error);
        setError("Unable to load clients. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  // Calculate optimal number of rows based on client count
  // Minimum 6 logos per row to ensure smooth looping without gaps
  const calculateRowCount = (clientCount: number): number => {
    const MIN_LOGOS_PER_ROW = 6;
    const MAX_ROWS = 3;

    // Calculate how many rows we can have while ensuring minimum logos per row
    const possibleRows = Math.floor(clientCount / MIN_LOGOS_PER_ROW);

    // Return at least 1 row, at most MAX_ROWS rows
    return Math.min(MAX_ROWS, Math.max(1, possibleRows));
  };

  // Split clients into rows for multi-row marquee
  // Ensures each row has at least 6 logos for smooth looping
  const splitClientsIntoRows = (clientsArray: Client[]) => {
    const MIN_LOGOS_PER_ROW = 6;
    const rowCount = calculateRowCount(clientsArray.length);
    const rows: Client[][] = Array.from({ length: rowCount }, () => []);

    // Distribute clients across rows
    clientsArray.forEach((client, index) => {
      rows[index % rowCount].push(client);
    });

    // Ensure each row has at least MIN_LOGOS_PER_ROW by duplicating if needed
    // This ensures smooth looping without gaps in the marquee
    rows.forEach((row, rowIndex) => {
      if (row.length > 0 && row.length < MIN_LOGOS_PER_ROW) {
        // Duplicate the row content until we have at least MIN_LOGOS_PER_ROW
        const originalRow = [...row];
        while (row.length < MIN_LOGOS_PER_ROW) {
          row.push(...originalRow);
        }
      }
    });

    return rows;
  };

  const clientRows = splitClientsIntoRows(clients);

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="bg-[#f9fafb] text-[#212E3F] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-48 h-48 border border-[#212E3F] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-[#EB5824] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 lg:pt-36 pb-20 relative z-10">
        {/* Section Header */}
        <div
          className={`mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <SectionHeader
            title={
              <>
                Our <span className="text-[#EB5824]">Clients</span>
              </>
            }
            subtitle={<>Trusted by leading organizations across the region.</>}
          />
        </div>

        {/* Clients Logos Multi-Row Marquee */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-[#EB5824]/20 border-t-[#EB5824] rounded-full animate-spin"></div>
              <p className="mt-4 text-[#212E3F]/60">Loading clients...</p>
            </div>
          ) : error ? (
            <div
              className="text-center py-12 px-6 bg-[#EB5824]/10 rounded-xl border border-[#EB5824]/20"
              role="status"
              aria-live="polite"
            >
              <svg
                className="w-12 h-12 text-[#EB5824] mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="text-[#212E3F] font-semibold">{error}</p>
            </div>
          ) : clients.length === 0 ? (
            <div className="text-center py-12" role="status" aria-live="polite">
              <p className="text-[#212E3F]/60">
                No clients to display at this time.
              </p>
            </div>
          ) : prefersReducedMotion ? (
            // Static grid for users who prefer reduced motion
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {clients.map((client, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-48 h-24 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300 flex items-center justify-center p-2">
                    <img
                      src={`/images/clients/${client.imagePath}`}
                      alt={client.name}
                      title={client.name}
                      loading="lazy"
                      decoding="async"
                      className="max-w-full max-h-full object-contain opacity-85 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Dynamic multi-row animated marquee with alternating directions
            <div className="space-y-4">
              {clientRows.map((row, rowIndex) => {
                // Alternate directions: right, left, right, etc.
                const direction = rowIndex % 2 === 0 ? "right" : "left";
                // Vary speeds: 35, 40, 30, etc.
                const speeds = [35, 40, 30];
                const speed = speeds[rowIndex % speeds.length];

                return (
                  <Marquee
                    key={`row-${rowIndex}`}
                    gradient={true}
                    speed={speed}
                    pauseOnHover={true}
                    gradientColor={"#f9fafb"}
                    gradientWidth={50}
                    direction={direction}
                  >
                    {row.map((client, index) => (
                      <div
                        key={`row${rowIndex}-${client.imagePath}-${index}`}
                        className="flex items-center mx-3"
                      >
                        <div className="w-48 h-24 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300 flex items-center justify-center p-2">
                          <img
                            src={`/images/clients/${client.imagePath}`}
                            alt={client.name}
                            title={client.name}
                            loading="lazy"
                            decoding="async"
                            className="max-w-full max-h-full object-contain opacity-85 hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </Marquee>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
