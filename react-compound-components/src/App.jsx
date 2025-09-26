import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <>
      <main>
        <section>
          <h2>Why work with us?</h2>
          <Accordion clssNme="accordion">
            <AccordionItem id="experience" className="accordion-item" title="we got 20 years of experience">
              <article>
                <p>you cn&apost;t go wrong with us.</p>
                <p>
                  we are in the business of planning highly individualized vacation trips for more than 20 years
                </p>
              </article>
            </AccordionItem>
            <AccordionItem id="local-guides" className="accordion-item" title="we re working with local guides">
              <article>
                <p>we are not doing this along from our office</p>
                <p>
                  instead, we are working with local guides to ensure a safe and pleasant vacation
                </p>
              </article>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </>
  )
}
export default App;
