import React from "react";
import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";
import openai from "../public/assets/openai.png";
import deepstash from "../public/assets/deepstash.png";

import { motion } from "framer-motion";

function scrollToQuestions() {
  window.scrollTo({
    top: 800,
    behavior: "smooth",
  });
}

export const Heading = () => {
  return (
    <Styles>
      <div className="title">
        <h1>
          Deep <span className="title-span question">questions</span>
        </h1>
        <span className="followed-by">are followed by</span>
        <h1>
          Deep <span className="title-span answer">answers</span>
        </h1>
      </div>
      <div className="credits">
        <div className="flex deepstash">
          <h3>inspired by</h3>
          <Link href="https://deepstash.com/">
            <a>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Image src={deepstash} width={185} height={121} />
              </motion.div>
            </a>
          </Link>
        </div>
        <div className="flex open-ai">
          <h3>powered by</h3>
          <Link href="https://openai.com/">
            <a>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Image src={openai} width={185} height={121} />{" "}
              </motion.div>
            </a>
          </Link>
        </div>
      </div>
      <button className="main-btn" onClick={scrollToQuestions}>
        What questions?
      </button>
    </Styles>
  );
};

const Styles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .title {
    margin-top: 50px;
    text-align: center;
    h1 {
      margin-bottom: 7px;
    }
    span {
      text-transform: lowercase;
    }
  }
  .credits {
    width: 100%;
  }

  .deepstash {
    gap: 30px;
  }
  .open-ai {
    gap: 10px;
  }

  @media only screen and (min-width: 800px) {
    img {
      width: 220px !important;
    }
    .deepstash {
      gap: 40px;
    }
    .open-ai {
      gap: 20px;
    }
  }
`;
