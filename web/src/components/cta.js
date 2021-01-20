import React from "react";
import Container from "./container"
import PortableText from "./portableText";
import CTALink from "./CTALink";

import { button } from "./button.module.css"
import styles from "./cta.module.css"

const CTA = props => {
  return (
    <section className={styles.root} style={{backgroundColor: `${props.colors.value}`}}>
      <Container>
        <h1 className={styles.title1}>{props.title}</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <PortableText blocks={props.body} />
        <div className="">
          {(props.ctas || []).map((c, i) => (
            <div className="">
              <CTALink
                key={`cta_${i}`}
                {...c}
                buttonActionClass={button}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CTA;
