"use client";
import { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

// Client interface
interface Client {
  name: string;
  imagePath: string;
}

export default function ClientLogos() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
    return () => observer.disconnect();
  }, []);

  // Split clients into 3 rows for multi-row marquee
  const splitClientsIntoRows = (clientsArray: Client[]) => {
    const rowCount = 3;
    const rows: Client[][] = [[], [], []];

    clientsArray.forEach((client, index) => {
      rows[index % rowCount].push(client);
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

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#212E3F]">
            Our <span className="text-[#EB5824]">Clients</span>
          </h2>
          <p className="text-lg text-[#212E3F]/60 max-w-2xl mx-auto">
            Trusted by leading organizations across the region.
          </p>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {clients.map((client, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-44 h-20 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300 flex items-center justify-center p-4">
                    <img
                      src={`/images/clients/${client.imagePath}`}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Three-row animated marquee with alternating directions
            <div className="space-y-6">
              {/* Row 1 - Right to Left */}
              <Marquee
                gradient={true}
                speed={35}
                pauseOnHover={true}
                gradientColor={"#f9fafb"}
                gradientWidth={50}
                direction="right"
              >
                {clientRows[0].map((client, index) => (
                  <div key={`row1-${index}`} className="flex items-center mx-6">
                    <div className="w-44 h-20 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300 flex items-center justify-center p-4">
                      <img
                        src={`/images/clients/${client.imagePath}`}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>

              {/* Row 2 - Left to Right (faster) */}
              <Marquee
                gradient={true}
                speed={40}
                pauseOnHover={true}
                gradientColor={"#f9fafb"}
                gradientWidth={50}
                direction="left"
              >
                {clientRows[1].map((client, index) => (
                  <div key={`row2-${index}`} className="flex items-center mx-6">
                    <div className="w-44 h-20 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300 flex items-center justify-center p-4">
                      <img
                        src={`/images/clients/${client.imagePath}`}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>

              {/* Row 3 - Right to Left (slower) */}
              <Marquee
                gradient={true}
                speed={30}
                pauseOnHover={true}
                gradientColor={"#f9fafb"}
                gradientWidth={50}
                direction="right"
              >
                {clientRows[2].map((client, index) => (
                  <div key={`row3-${index}`} className="flex items-center mx-6">
                    <div className="w-44 h-20 bg-white rounded-lg border border-[#212E3F]/10 hover:border-[#EB5824]/30 hover:shadow-md transition-all duration-300 flex items-center justify-center p-4">
                      <img
                        src={`/images/clients/${client.imagePath}`}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
