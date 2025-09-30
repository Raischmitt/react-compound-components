import Accordion from "./components/Accordion/Accordion";
import AccordionContent from "./components/Accordion/AccordionContent";
import AccordionTitle from "./components/Accordion/AccordionTitle";


function App() {
  return (
    <>
      <main>
        <section>
          <h2>Why work with us?</h2>
          <Accordion clssNme="accordion">
            <Accordion.Item id="experience" className="accordion-item">
              <Accordion.Title className="accordion-item-title" id="experience" >
                we got 20 years of experience
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content" id="experience" >
                <article>
                  <p>you cn&apost;t go wrong with us.</p>
                  <p>
                    we are in the business of planning highly individualized vacation trips for more than 20 years
                  </p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item id="local-guides" className="accordion-item">
              <Accordion.Title className="accordion-item-title" id="local-guides" >
                we re working with local guides
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content" id="local-guides" >
                <article>
                  <p>we are not doing this along from our office</p>
                  <p>
                    instead, we are working with local guides to ensure a safe and pleasant vacation
                  </p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </section>
      </main>
    </>
  )
}
export default App;
