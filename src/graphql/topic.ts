import { gql, useQuery } from "@apollo/client";

const TOPIC_QUERY = gql`
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
  id: number;
  name: string;
  stargazerCount: number;
}

interface TopicWithRelatedTopics extends Topic {
  relatedTopics: Topic[];
}
