import { serviceStory } from "@/lib/services";

export default function Demo() {
  return (
    <section id="vitrine" className="v-section v-matin" aria-labelledby="demo-title">
      <div className="v-wrap">
        <h2 className="v-h2" id="demo-title">
          Ouvert, même quand vous êtes fermé.
        </h2>
        <ol className="v-story">
          {serviceStory.map((step) => (
            <li key={step.title}>
              <h3 className="v-h3">{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
