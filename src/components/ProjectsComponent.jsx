import Link from "next/link";

import projects from "json/Projects.json";

export default function ProjectsComponent({json, shown}) {
  const project = projects[json];

  const title = project.Title;
  const desc = project.Description;
  const pic = project.Image;
  const link = project.Link;
  const id = "project-card-" + json;

  let className = "project-card";
  if (shown != json) className += " noshow";

  return (
    <div id={id} className={className}>
      <img src={pic} alt={title} />
      <div>
        <h3>
          <Link href={link} passHref>{title}</Link>
        </h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}