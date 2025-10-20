import Header from "./components/Header"
import Footer from "./components/Footer"
import HeadingBlock from "./components/HeadingBlock"
import ImageBlock from "./components/ImageBlock"
import Form from "./components/Form"
import Layout from "./components/Layout"
import kvImg from "./assets/kv_img.jpg"
import img01 from "./assets/img-01.jpg"
import img02 from "./assets/img-02.jpg"
import img03 from "./assets/img-03.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import { motion } from "motion/react"

function App() {
  const MotionIcon = motion(FontAwesomeIcon);

  return (
    <main>
      <Header />
      <Layout
        left={
          <>
            <HeadingBlock type="hero" title="Grow Your Skills" text="Whether you're just starting out or picking up something new, Enlite helps you learn with clarity, confidence, and community." />
            <MotionIcon
              icon={faAngleDoubleDown} 
              className="absolute bottom-[-10rem] right-0" 
              style={{ width: '3rem', height: '3rem' }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />
          </>
        }
        right={
          <div>
            <img src={kvImg} alt="Grow your skills" className="w-full min-h-[34rem] max-sm:min-h-[17rem] object-cover" />
          </div>
        }
        className="mt-[5.25rem]"
      />
      <Layout
        left={
          <HeadingBlock type="heading" title="Discover" />
        }
        right={
          <ImageBlock 
            text="<strong>Study at the comfort of your home.</strong> Whether you're starting fresh or scaling up, your journey begins here."
            image={img01}
            imageAlt="test"
          />
        }
      />
      <Layout
        left={
          <HeadingBlock type="heading" title="Flow" />
        }
        right={
          <ImageBlock 
            text="<strong>No fluff.</strong> Dive into structured lessons, track your growth, and learn in a way that feels natural."
            image={img02}
            imageAlt="test"
          />
        }
      />
      <Layout
        left={
          <HeadingBlock type="heading" title="Spark" />
        }
        right={
          <ImageBlock 
            text="<strong>You don't need permission to start — just curiosity.</strong> Take your first step today and see where it leads!"
            image={img03}
            imageAlt="test"
          />
        }
      />
      <Layout
        left={
          <HeadingBlock type="info" title="Get in touch" text="Send your inquiries here using the form. Our team will get back to you as soon as possible." />
        }
        right={
          <Form />
        }
      />
      <Footer />
    </main>
  )
}

export default App
