import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const AskQuestion = ({ setIsOpen }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function openModal() {
    setIsOpen(true);
    document.body.classList.add("modal-open");
  }
  return (
    <>
      {scrollY > 350 ? (
        <Styles
          onClick={openModal}
          className="ask-questions"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 150, duration: 1 }}
        >
          ?
        </Styles>
      ) : (
        <div></div>
      )}
    </>
  );
};

const Styles = styled(motion.div)`
  position: fixed;
  bottom: 50px;
  right: -20px;
  border: 2px solid #3cb86c;
  box-sizing: border-box;
  border-radius: 50px;
  width: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
`;
