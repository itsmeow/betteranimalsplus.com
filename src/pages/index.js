import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSlider from "gatsby-image-background-slider"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../components/title"
import PageSection from "../components/pageSection"
import DownloadOdometer from "../components/downloadOdometer"
import LinkButton from "../components/linkButton"
import PatreonButton from "../components/patreon"
import StaffCard from "../components/staffCard"
import ClientOnly from "../components/clientonly"
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slider,
} from "pure-react-carousel"
import DiscordLogo from "../data/logos/discord.svg"
import TrelloLogo from "../data/logos/trello.svg"
import GitHubLogo from "../data/logos/github.svg"
import WikiLogo from "../data/logos/wiki.svg"
import CurseForgeLogo from "../data/logos/curseforge.svg"
import LinkSlide from "../components/linkSlide"
import CenterImage from "../components/centerImage"

const IndexPage = () => {
  const { images, backgrounds } = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "devlogos" } }) {
        nodes {
          extension
          relativePath
          childImageSharp {
            gatsbyImageData(
              width: 175
              quality: 100
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          }
        }
      }
    }
  `)
  const getImage = (image) =>
    images.nodes.find((i) => i.relativePath === image).childImageSharp
      .gatsbyImageData
  return (
    <Layout eventkey="index">
      <SEO title=""></SEO>
      <div className="slider">
        <Title animateIn="animate__jackInTheBox" />
        <BackgroundSlider
          alt="background"
          style={{
            height: "100vh",
          }}
          query={{ backgrounds: backgrounds }}
        />
      </div>
      <main>
        <ClientOnly>
          <PageSection animateIn="animate__zoomInDown">
            <div className="text-center medium">With Over</div>
            <DownloadOdometer initialValue="1000000" />
            <div className="text-center medium">Downloads</div>
          </PageSection>
        </ClientOnly>
        <article className="highlightsection">
          <h2 className="text-center medium">Discover</h2>
          <CarouselProvider
            visibleSlides={1}
            totalSlides={4}
            naturalSlideHeight={500}
            naturalSlideWidth={500}
            infinite
            isIntrinsicHeight
          >
            <Slider
              className="carousel-slider"
              classNameAnimation="carousel-slider-anim"
            >
              <LinkSlide
                index={0}
                name="discord"
                href="https://discord.betteranimalsplus.com"
                img={DiscordLogo}
                text="Chat about the mod, see upcoming features first, and get alpha builds of the mod"
              />
              <LinkSlide
                index={1}
                name="trello"
                href="https://trello.betteranimalsplus.com"
                img={TrelloLogo}
                text="See confirmed upcoming features and our progress on them"
              />
              <LinkSlide
                index={2}
                name="github"
                href="https://github.betteranimalsplus.com"
                img={GitHubLogo}
                text="Report issues, contribute to the mod, and see how it all
                    works on the inside"
              />
              <LinkSlide
                index={3}
                name="wiki"
                href="https://wiki.betteranimalsplus.com"
                img={WikiLogo}
                text="Learn more about the mod's features, and contribute to our
                    documentation of the mod's behavior"
              />
            </Slider>
            <ButtonBack className="carousel-button carousel-backButton">
              {"<"}
            </ButtonBack>
            <ButtonNext className="carousel-button carousel-nextButton">
              {">"}
            </ButtonNext>
            <DotGroup className="carousel-dots" />
          </CarouselProvider>
        </article>
        <article className="highlightsection">
          <div className="center-box">
            <h2 className="text-center medium">Download</h2>
            <CenterImage
              href="https://download.betteranimalsplus.com"
              img={CurseForgeLogo}
              alt="CurseForge"
              className="cf-svg"
              draggable={false}
            />
          </div>
        </article>
        <PageSection>
          <h2 className="text-center medium">Built by</h2>
          <div className="limit-width">
            <StaffCard
              name="cybercat5555"
              role="Lead Artist and Designer"
              image={getImage("cybercat5555.png")}
              style={{ marginBottom: "20px" }}
              className="center-item-2"
              imageNodes={images.nodes}
            >
              Cybercat is responsible for creating models, textures, ideas, and
              is the lead designer for the mod. Cyber created Better Animals
              Plus and built the team responsible.
            </StaffCard>
            <StaffCard
              name="itsmeow"
              role="Lead Programmer"
              image={getImage("itsmeow.png")}
              style={{ marginBottom: "20px" }}
              className="center-item-2"
              links={
                <>
                  <LinkButton
                    link="https://itsmeow.dev/"
                    color="rgb(25, 144, 255)"
                    hoverColor="rgb(0, 132, 255)"
                    style={{ transitionDuration: "300ms" }}
                    blank
                  >
                    Website
                  </LinkButton>
                  <PatreonButton className="devlinkbutton" />
                </>
              }
            >
              itsmeow is responsible for creating the AI, items, blocks, and
              code required to make the mod function; fixing bugs; and
              developing feature additions.
            </StaffCard>
            <StaffCard
              name="Wolverbyte"
              role="Artist and Designer"
              image={getImage("wolverbyte.png")}
              className="center-item-2"
            >
              Wolverbyte works with Cyber in design and makes art for Better
              Animals Plus.
            </StaffCard>
          </div>
        </PageSection>
      </main>
    </Layout>
  )
}

export default IndexPage
