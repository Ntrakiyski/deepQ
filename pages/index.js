import Head from "next/head";
import Image from "next/image";

import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "react-modal";

import { GetQuestions } from "../services/GetQestions";
import { Popup } from "../components/Popup";
import { AskQuestion } from "../components/AskQuestion";
import { Heading } from "../components/Heading";

import previous from "../public/assets/previous.svg";

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, type: "tween" },
  },
};
const item2 = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.7, duration: 0.6, type: "spring" },
  },
};

Modal.setAppElement("#__next");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Home({ posts }) {
  const [getData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (loading === true) {
      setData(posts);
      setLoading(false);
    } else setLoading(false);
  }, [loading]);

  function getNextId() {
    if (currentNumber !== Object.keys(getData).length - 1) {
      setCurrentNumber(currentNumber + 1);
    }
    if (currentNumber === Object.keys(getData).length - 1) {
      setCurrentNumber(0);
    }
  }

  function getPrevId() {
    if (currentNumber === Object.keys(getData).length - 1) {
      setCurrentNumber(currentNumber - 1);
    }
    if (currentNumber === 0) {
      setCurrentNumber(Object.keys(getData).length - 1);
    }
  }

  function closeModal() {
    document.body.classList.remove("modal-open");
    setIsOpen(false);
  }

  return (
    <Styles>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Heading />

      {/* Page 2 */}

      <div className="question-type">
        <h3>question type</h3>
        <div className="tabs">
          <div className="category what-btn">What?</div>
          <div className="category why-btn">Why?</div>
          <div className="category how-btn">How?</div>
        </div>
      </div>

      <div className="prev-next">
        <div className="change previous" onClick={getPrevId}>
          <Image src={previous} width={22} height={22} />
          <span>previous</span>
        </div>
        <div className="change next" onClick={getNextId}>
          <span>next</span>
          <Image src={previous} width={22} height={22} />
        </div>
      </div>

      {!loading ? (
        <>
          <motion.div className="content" key={getData[currentNumber].id}>
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="heading2"
            >
              <h2>{getData[currentNumber].question}</h2>
              <div id="line" className={getData[currentNumber].category}></div>
            </motion.div>
            <motion.p variants={item2} initial="hidden" animate="show">
              {getData[currentNumber].answer}
            </motion.p>
          </motion.div>
        </>
      ) : (
        <div>loading...</div>
      )}

      <AskQuestion setIsOpen={setIsOpen} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className="Modal"
        overlayClassName="Overlay"
      >
        <Popup />
      </Modal>
    </Styles>
  );
}

const Styles = styled.div`
  .question-type {
    .tabs {
      margin-top: 10px;
      margin-bottom: 60px;
    }
  }
  .prev-next {
    margin-bottom: 20px;
  }
  .content {
    min-height: 450px;
    p {
      margin-top: 35px;
      line-height: 28px;
      /* or 156% */
    }
  }
`;

export async function getStaticProps() {
  const posts = (await GetQuestions()) || [];

  return {
    props: {
      posts,
    },
  };
}