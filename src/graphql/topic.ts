import { gql, useQuery } from "@apollo/client";

export const TOPIC_QUERY = gql`
  query FindTopic($search: String!) {
    topic(name: $search) {
      id
      name
      stargazerCount
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;

export function useTopicQuery(topic: string) {
  return useQuery<{ topic: TopicWithRelatedTopics }>(TOPIC_QUERY, {
    variables: { search: topic },
  });
}

interface Topic {
  id: string;
  name: string;
  stargazerCount: number;
}

export interface TopicWithRelatedTopics extends Topic {
  relatedTopics: Topic[];
}
