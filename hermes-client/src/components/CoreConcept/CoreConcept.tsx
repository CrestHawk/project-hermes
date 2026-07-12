import "./CoreConcept.css";

type CoreConceptProps = {
  image: string;
  title: string;
  description: string;
};

export function CoreConcept({ image, title, description }: CoreConceptProps) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
