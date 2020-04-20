import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import quarantineTopStyles from "../styles/quarantineTopStyles.module.scss";
import Img from "gatsby-image";

const QuarantineTop = () => {
    const data = useStaticQuery(graphql`
        query{
            pqr: file(relativePath: {eq: "Placy_PQR.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1920){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return(
        <div className={quarantineTopStyles.container}>
            <div className={quarantineTopStyles.imgContainer}>
                <Img fluid={data.pqr.childImageSharp.fluid} className={quarantineTopStyles.pqr} alt="quarantine image"/>
            </div>
            <p className={quarantineTopStyles.textContainer}>
            Cities are the central nodes of our modern economy; hubs of creativity and innovation. Our globalised system relies on us living collectively, but pandemics are inherently anti-city, as they could force the breakdown of collective cooperation. How will our cities evolve, to adapt to this new reality?
            <br/><br/>
            Cities across the world are establishing unique initiatives and projects to combat the effects of this situation; and by exploring each city's approach, perhaps we can gain a glimpse of our post quarantine world.
            </p>
        </div>
    )
}

export default QuarantineTop;