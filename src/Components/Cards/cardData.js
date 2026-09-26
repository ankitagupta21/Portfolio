import React from "react";
import { FaExternalLinkAlt, FaFigma, FaGithub, FaKaggle } from "react-icons/fa";

// Turns the page data (experience, projects, certificates, ...) into CardSection cards,
// so Home and the Explore pages present the same data the same way.

// Label and icon for a link, based on where it points.
export const linkFor = (url, fallback = "View Project") => {
  if (url.includes("github.com"))
    return { label: "GitHub", url, icon: <FaGithub /> };
  if (url.includes("kaggle.com"))
    return { label: "Kaggle", url, icon: <FaKaggle /> };
  if (url.includes("figma.com"))
    return { label: "Open in Figma", url, icon: <FaFigma /> };
  return { label: fallback, url, icon: <FaExternalLinkAlt /> };
};

export const experienceCards = (items) =>
  items.map((item) => ({
    id: item.id,
    title: item.company,
    subtitle: item.title,
    date: item.date,
    skills: item.skills,
    bullets: item.desc,
  }));

// project.demo is the hosted app; project.link is the source (GitHub, Kaggle, ...).
export const projectCards = (items) =>
  items.map((project) => ({
    id: project.id,
    title: project.name,
    subtitle: project.subHead,
    skills: project.skills,
    bullets: project.desc,
    links: [
      project.demo && {
        label: "Project Link",
        url: project.demo,
        icon: <FaExternalLinkAlt />,
      },
      project.link && linkFor(project.link),
    ].filter(Boolean),
    contributors: project.contributors,
  }));

export const certificateCards = (items) =>
  items.map((certificate) => ({
    id: certificate.id,
    title: certificate.name,
    subtitle: certificate.organization,
    date: certificate.date,
    skills: certificate.skills,
    links: certificate.link ? [linkFor(certificate.link, "View Certificate")] : [],
  }));

// A programme whose `skills` are really the courses taken.
export const courseworkCards = (items) =>
  items.map((item) => ({
    id: item.id,
    title: item.name,
    subtitle: item.organization,
    date: item.date,
    sections: [{ label: "Coursework", items: item.skills }],
  }));

export const prototypeCards = (items) =>
  items.map((prototype) => ({
    id: prototype.id,
    title: prototype.name,
    image: prototype.img,
    links: [linkFor(prototype.link)],
  }));
