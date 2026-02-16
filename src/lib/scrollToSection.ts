export function scrollToSection(sectionId: string) {
  if (typeof document === "undefined") return;

  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: "smooth" });
}

