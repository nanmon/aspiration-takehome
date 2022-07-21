import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  max-width: 800px;
  align-self: center;
`;

const TopicList = styled.div`
  margin-left: 32px;
`;

const RelatedTopic = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #30363d;
  padding-bottom: 16px;
`;

const StyledLink = styled(Link)`
  color: white;
`;

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

export default function TopicPage() {
  const { topic } = useParams();
  const { loading, error, data } = useQuery<{ topic: TopicWithRelatedTopics }>(
    TOPIC_QUERY,
    {
      variables: { search: topic },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Page>
      <h1>{topic}</h1>
      <TopicList>
        {data!.topic.relatedTopics.map((rtopic) => (
          <RelatedTopic>
            <h2>
              <StyledLink to={`/${rtopic.name}`}>{rtopic.name}</StyledLink>
            </h2>
            <span>⭐️ {rtopic.stargazerCount}</span>
          </RelatedTopic>
        ))}
      </TopicList>
    </Page>
  );
}

interface Topic {
  id: number;
  name: string;
  stargazerCount: number;
}

interface TopicWithRelatedTopics extends Topic {
  relatedTopics: Topic[];
}
