import React from "react";
import { request, gql } from "graphql-request";

const grapqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const GetQuestions = async () => {
  const query = gql`
    query LastQuery {
      questions {
        id
        createdAt
        question
        answer
        category
      }
    }
  `;

  try {
    const result = await request(grapqlAPI, query);
    return result.questions;
  } catch (error) {
    console.error("erros", JSON.stringify(error, undefined, 2));
  }
};

GetQuestions().catch((error) => console.error(error));
