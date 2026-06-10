export function scrollToSection(sectionId: string) {
  if (typeof document === "undefined") return;

  const element = document.getElementById(sectionId);

  // Same page: smooth-scroll to the section.
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Different page (e.g. a /services detail page): navigate home to the anchor.
  window.location.href = `/#${sectionId}`;
}
