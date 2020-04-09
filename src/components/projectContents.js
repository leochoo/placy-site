import React from "react";
import projectContentstyles from "../styles/projectContent.module.scss";
import Img from "gatsby-image";
import { useStaticQuery,graphql } from "gatsby";
// a_01788.jpg
const ProjectContents =()=>{
    const data = useStaticQuery(graphql`
        query{
            kandosen: file(relativePath: {eq: "kandosen_logo.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            tokyu: file(relativePath: {eq: "tokyu.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            kenta: file(relativePath: {eq: "kenta.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            cross: file(relativePath: {eq: "cross.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            app: file(relativePath: {eq: "a_01788.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            pamphlets: file(relativePath: {eq: "jr1.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            jr: file(relativePath: {eq: "jr_cast.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            postcards: file(relativePath: {eq: "postcards.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    return(
        <div className={projectContentstyles.container}>
            <div className={projectContentstyles.row}>
                <div className={projectContentstyles.leftContent}>
                    <div className={projectContentstyles.projectTop}>
                        <div className={projectContentstyles.cross}>
                            <Img fluid={data.cross.childImageSharp.fluid}/>
                        </div>
                        <div　class={projectContentstyles.logo}>
                            <Img fluid={data.kandosen.childImageSharp.fluid}/>
                        </div>
                    </div>
                    <h1 className={projectContentstyles.title}>
                        Explore Yamanote-line<br/>
                        through music.
                    </h1>
                    <p className={projectContentstyles.desc}>
                        山手線の各駅には、それぞれ異なる歴史や風土があり、
                        そこに流れる音楽やリズムも多種多様 です。
                        Placy は各駅の特徴的な場所を選定し、そこに流れる音楽データを
                        解析することで、街を より愉しむための地図を作成しています。
                        都市のリズムに身を任せて、新しい街の一面を発見 してみませんか?
                    </p>
                </div>
                <div className={projectContentstyles.right}>
                    <div className={projectContentstyles.imgTop}>
                        <Img fluid={data.app.childImageSharp.fluid}/>
                    </div>
                    <div className={projectContentstyles.imgBottom}>
                        <Img fluid={data.pamphlets.childImageSharp.fluid}/>
                    </div>
                </div>
            </div>
            <div className={projectContentstyles.row}>
                <div className={projectContentstyles.leftContent}>
                    <div className={projectContentstyles.projectTop}>
                            <div className={projectContentstyles.cross}>
                                <Img fluid={data.cross.childImageSharp.fluid}/>
                            </div>
                            <div　class={projectContentstyles.logo}>
                                <Img fluid={data.tokyu.childImageSharp.fluid}/>
                            </div>
                    </div>
                    <h1 className={projectContentstyles.title}>
                        Analyse Shibuya through<br/>
                        the lens of music data.
                    </h1>
                    <p className={projectContentstyles.desc}>
                        渋谷キャスト付近について、Placyアプリのデータに基づいて分析を
                        行わせていただきました。渋谷キャスト付近を訪れる人が聞いている音楽の特徴を、
                        渋谷全体に対して比較し、その傾向について記述させて頂きました。
                    </p>
                </div>
                <div className={projectContentstyles.right}>
                    <div className={projectContentstyles.img}>
                        <Img fluid={data.jr.childImageSharp.fluid}/>
                    </div>
                </div>
            </div>
            <div className={projectContentstyles.kenta}>
                <div className={projectContentstyles.leftContent}>
                <div className={projectContentstyles.projectTop}>
                        <div className={projectContentstyles.cross}>
                            <Img fluid={data.cross.childImageSharp.fluid}/>
                        </div>
                        <div　class={projectContentstyles.logo}>
                            <Img fluid={data.kenta.childImageSharp.fluid}/>
                        </div>
                        <div class={projectContentstyles.byLine}>
                            <p id={projectContentstyles.tanakaTitle}>sound artist</p>
                            <h1 id={projectContentstyles.tanaka}>Kenta Tanaka</h1>
                        </div>
                    </div>
                    <h1 className={projectContentstyles.title}>
                        Archive sound aspects of <br/>
                        city with vinyl postcards.
                    </h1>
                    <p className={projectContentstyles.desc}>
                        毎月のように急速に変わりゆく渋谷を、「音」の観点からアーカイブする 
                        プロジェクトです。Placyのユーザーデータを元に「渋谷の音」を生成し、
                        それを絵葉書レコードに焼き付けます。
                        もちろん、この絵葉書はレコードプレイヤーで実際に聞いてもらうことができます。
                        (現在発注準備中です。少々お待ちくださいませ。)
                    </p>
                </div>
                <div className={projectContentstyles.right} id={projectContentstyles.green}>
                    <div className={projectContentstyles.img}>
                        <Img fluid={data.postcards.childImageSharp.fluid}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectContents;